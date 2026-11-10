import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';
import { captureCampaignParams } from '@/lib/tracking';
import { installWhatsappAttribution } from '@/lib/whatsappAttribution';

// Guarda utm_* / gclid da URL de entrada para anexar ao lead mais tarde,
// mesmo que o visitante navegue por varias paginas antes de enviar.
captureCampaignParams();

// Codigo "(cod. XXXX)" na mensagem do WhatsApp + registro na planilha de leads,
// para devolver ao Google Ads os leads que viraram orcamento (conversao offline).
installWhatsappAttribution();

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