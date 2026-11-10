/**
 * Atribuição de leads do WhatsApp ao clique do Google Ads.
 *
 * 1. Na chegada, guarda gclid / gbraid / wbraid por 90 dias (localStorage).
 * 2. No clique em qualquer link de WhatsApp (componente WhatsAppLink, links
 *    soltos ou o botão flutuante do whatsa.me), acrescenta um código curto à
 *    mensagem: "Olá, gostaria de solicitar um orçamento. (cód. V7K2)".
 * 3. Envia código + ids de clique para a planilha "VIDMAR - Leads WhatsApp
 *    (Google Ads)" (Apps Script). Quando a conversa vira orçamento, o status
 *    marcado na planilha volta para o Google Ads como conversão offline.
 *
 * Roda em paralelo ao trackConversion('whatsapp'): não substitui a conversão
 * de clique, só adiciona o vínculo com o lead real.
 */

const ENDPOINT =
  'https://script.google.com/macros/s/AKfycbygSERBrl42sVgZsompMdEDZlcZC5HNvy-xwsUgLO-NNWOPo6FGUb8rnwrcKdqPCUNz/exec';

const WHATSAPP_NUMBER = '5511911053203';
const DEFAULT_TEXT = 'Olá, gostaria de solicitar um orçamento.';
const STORE_KEY = 'vidmar_attr';
const TTL_MS = 90 * 24 * 60 * 60 * 1000; // janela máxima do Google Ads
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem 0/O/1/I
const WA_SELECTOR =
  'a[href*="wa.me/"], a[href*="api.whatsapp.com/"], a[href*="whatsa.me/"], a[href^="whatsapp:"]';

const load = () => {
  try {
    const o = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
    if (o && Date.now() - o.ts < TTL_MS) return o;
  } catch {
    // storage bloqueado
  }
  return null;
};

const save = (o) => {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(o));
  } catch {
    // ignora
  }
};

const genCode = () => {
  const arr = new Uint32Array(4);
  if (window.crypto?.getRandomValues) window.crypto.getRandomValues(arr);
  else for (let i = 0; i < 4; i++) arr[i] = Math.floor(Math.random() * 1e9);
  return Array.from(arr, (n) => ALPHABET[n % ALPHABET.length]).join('');
};

const refSource = () => {
  try {
    return document.referrer ? new URL(document.referrer).hostname : 'direto';
  } catch {
    return 'direto';
  }
};

const send = (a, intent) => {
  const body = JSON.stringify({
    code: a.code,
    gclid: a.gclid,
    gbraid: a.gbraid,
    wbraid: a.wbraid,
    page: a.landing,
    utm_source: a.utm_source,
    utm_campaign: a.utm_campaign,
    intent,
  });
  // text/plain (padrão do sendBeacon com string) evita preflight de CORS no Apps Script
  let ok = false;
  try {
    ok = !!navigator.sendBeacon?.(ENDPOINT, body);
  } catch {
    ok = false;
  }
  if (!ok) {
    fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body,
    }).catch(() => {});
  }
};

/** Reescreve o href do link com o código no fim da mensagem. Idempotente. */
const tagLink = (link, code) => {
  const href = link.getAttribute('href') || '';
  const qi = href.indexOf('?');
  let base = qi === -1 ? href : href.slice(0, qi);
  const qs = new URLSearchParams(qi === -1 ? '' : href.slice(qi + 1));

  // whatsa.me é um redirecionador que não repassa o texto: troca por wa.me
  if (/whatsa\.me\//.test(base)) base = `https://wa.me/${WHATSAPP_NUMBER}`;

  let text = qs.get('text') || DEFAULT_TEXT;
  const marker = `(cód. ${code})`;
  if (!text.includes(marker)) {
    text = `${text.replace(/\s*\(cód\. [A-Z0-9]+\)\s*$/, '')} ${marker}`;
  }
  qs.delete('text');
  const rest = qs.toString();
  // encodeURIComponent (e não URLSearchParams) para espaço virar %20, não "+"
  link.setAttribute('href', `${base}?${rest ? `${rest}&` : ''}text=${encodeURIComponent(text)}`);
  return text;
};

let installed = false;

export const installWhatsappAttribution = () => {
  if (installed || typeof window === 'undefined') return;
  installed = true;

  const params = new URLSearchParams(window.location.search);
  const gclid = params.get('gclid') || '';
  const gbraid = params.get('gbraid') || '';
  const wbraid = params.get('wbraid') || '';
  const hasAdId = Boolean(gclid || gbraid || wbraid);
  let attr = load();

  const newAttr = () => ({
    ts: Date.now(),
    code: genCode(),
    gclid,
    gbraid,
    wbraid,
    utm_source: params.get('utm_source') || (hasAdId ? 'google-ads' : refSource()),
    utm_campaign: params.get('utm_campaign') || '',
    landing: window.location.pathname,
    sent: false,
  });

  // Novo clique de anúncio (ids diferentes do guardado) => novo código
  if (hasAdId && !(attr && attr.gclid === gclid && attr.gbraid === gbraid && attr.wbraid === wbraid)) {
    attr = newAttr();
    save(attr);
  }

  document.addEventListener(
    'click',
    (ev) => {
      const link = ev.target?.closest?.(WA_SELECTOR);
      if (!link) return;

      if (!attr) {
        attr = newAttr(); // visitante orgânico/direto
        save(attr);
      }
      const text = tagLink(link, attr.code);

      if (!attr.sent) {
        send(attr, /d[uú]vida/i.test(text) ? 'duvida' : 'orcamento');
        attr.sent = true;
        save(attr);
      }
    },
    true, // fase de captura: roda antes da navegação e do onClick do React
  );
};
