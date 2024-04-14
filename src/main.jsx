import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-WT3GZXTK', // Reemplaza con tu ID de contenedor
  // gtmId: 'GTM-5FX3BLC4', // Reemplaza con tu ID de contenedor
};

TagManager.initialize(tagManagerArgs)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
