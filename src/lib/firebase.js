import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Values come from .env.local (see .env.example). These are public client keys —
// access is controlled by firestore.rules / storage.rules, not by hiding them.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(config.apiKey && config.projectId);

const app = isFirebaseConfigured ? initializeApp(config) : null;
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
// Storage needs the Blaze plan, so uploads are opt-in; without it admins paste image links instead.
export const storage = app && config.storageBucket && process.env.REACT_APP_FIREBASE_STORAGE_ENABLED === 'true' ? getStorage(app) : null;

const emailList = (v) => v.split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);

// Owners can add/remove other admins from Admin → Admins. Built-in admins always have access.
// Both lists must match firestore.rules; any further admins live in the Firestore `admins` collection.
export const OWNER_EMAILS = emailList(process.env.REACT_APP_OWNER_EMAILS || 'swapnilsrivastava1999@gmail.com');
export const ADMIN_EMAILS = [...new Set([...OWNER_EMAILS, ...emailList(process.env.REACT_APP_ADMIN_EMAILS || 'actsswork@gmail.com')])];
