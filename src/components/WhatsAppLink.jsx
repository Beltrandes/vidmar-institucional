import React from 'react';
import { trackConversion } from '@/lib/tracking';

export const WHATSAPP_NUMBER = '5511911053203';

export const whatsappUrl = (message = 'Olá, gostaria de solicitar um orçamento.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/**
 * Link de WhatsApp com a conversão do Google Ads já anexada.
 * Abre em nova aba (sem preventDefault) e dispara o evento em paralelo,
 * para que o clique nunca dependa do carregamento do gtag.
 */
const WhatsAppLink = ({ message, children, className, ...props }) => (
  <a
    href={whatsappUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    data-wa-tracked="true"
    onClick={() => trackConversion('whatsapp')}
    {...props}
  >
    {children}
  </a>
);

export default WhatsAppLink;
