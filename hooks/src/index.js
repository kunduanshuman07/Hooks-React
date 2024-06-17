import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextHookProvider } from './components/ContextHook';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextHookProvider>
    <App />
  </ContextHookProvider>

);
