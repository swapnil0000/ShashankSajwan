import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { ADMIN_EMAILS, OWNER_EMAILS, auth, db, isFirebaseConfigured } from '../lib/firebase';

const AuthContext = createContext(null);

const notConfigured = () => Promise.reject(new Error('Login is not available yet — Firebase is not configured.'));

// Creates the users/{uid} profile on first sign-in.
const ensureProfile = async (user, name) => {
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      name: name || user.displayName || '',
      email: user.email,
      role: 'student',
      bookmarks: [],
      createdAt: serverTimestamp(),
    });
  }
};

export const friendlyAuthError = (err) => {
  const code = err?.code || '';
  const map = {
    'auth/invalid-credential': 'Wrong email or password. If you created your account with Google, use "Continue with Google" — or tap "Forgot password?" to set a password.',
    'auth/wrong-password': 'Wrong email or password.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/email-already-in-use': 'An account with this email already exists. Try signing in.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/too-many-requests': 'Too many attempts. Please wait a minute and try again.',
    'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
    'auth/network-request-failed': 'Network error. Check your internet connection.',
  };
  return map[code] || err?.message || 'Something went wrong. Please try again.';
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(isFirebaseConfigured);
  // Admins added from Admin → Admins (Firestore `admins/{email}`).
  const [listedAdmin, setListedAdmin] = useState(false);

  useEffect(() => {
    if (!auth) return undefined;
    return onAuthStateChanged(auth, async (u) => {
      let listed = false;
      if (u?.email && u.emailVerified && !ADMIN_EMAILS.includes(u.email.toLowerCase())) {
        listed = await getDoc(doc(db, 'admins', u.email.toLowerCase())).then((d) => d.exists()).catch(() => false);
      }
      setListedAdmin(listed);
      setUser(u);
      setLoading(false);
    });
  }, []);

  const value = useMemo(() => {
    const email = user?.email?.toLowerCase();
    // Rules also require a verified email, so mirror that here.
    const isAdmin = Boolean(email && user.emailVerified && (ADMIN_EMAILS.includes(email) || listedAdmin));
    const isOwner = Boolean(isAdmin && OWNER_EMAILS.includes(email));
    return {
      user,
      loading,
      isAdmin,
      isOwner,
      isAdminEmailUnverified: Boolean(email && ADMIN_EMAILS.includes(email) && !user.emailVerified),
      configured: isFirebaseConfigured,
      signup: async ({ name, email: e, password }) => {
        if (!auth) return notConfigured();
        const cred = await createUserWithEmailAndPassword(auth, e, password);
        if (name) await updateProfile(cred.user, { displayName: name });
        await ensureProfile(cred.user, name);
        await sendEmailVerification(cred.user);
        return cred.user;
      },
      login: async ({ email: e, password }) => {
        if (!auth) return notConfigured();
        const cred = await signInWithEmailAndPassword(auth, e, password);
        return cred.user;
      },
      loginWithGoogle: async () => {
        if (!auth) return notConfigured();
        const cred = await signInWithPopup(auth, new GoogleAuthProvider());
        await ensureProfile(cred.user);
        return cred.user;
      },
      resetPassword: (e) => (auth ? sendPasswordResetEmail(auth, e) : notConfigured()),
      resendVerification: () => (auth?.currentUser ? sendEmailVerification(auth.currentUser) : notConfigured()),
      refreshUser: async () => {
        await auth?.currentUser?.reload();
        setUser(auth?.currentUser ? { ...auth.currentUser } : null);
      },
      logout: () => (auth ? signOut(auth) : Promise.resolve()),
    };
  }, [user, loading, listedAdmin]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
