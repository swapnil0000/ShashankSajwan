import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ContentProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ContentProvider>
  </AuthProvider>
);
