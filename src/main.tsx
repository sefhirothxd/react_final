import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UseProfileProvider from './context/UseProfileProvider';
import './index.css';
import 'flowbite';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UseProfileProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UseProfileProvider>
  </React.StrictMode>
);
