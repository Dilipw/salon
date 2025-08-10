import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { registerSW } from 'virtual:pwa-register';

// Register service worker for PWA
registerSW({
  onNeedRefresh() {},
  onOfflineReady() {}
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
