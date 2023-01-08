import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/montserrat';
import './styles/styles.css';
import { AppProvider } from './context/AppProvider';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
