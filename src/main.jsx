import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';
import { captureCampaignParams } from '@/lib/tracking';

// Guarda utm_* / gclid da URL de entrada para anexar ao lead mais tarde,
// mesmo que o visitante navegue por varias paginas antes de enviar.
captureCampaignParams();

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));
} else {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}