/**
 * Conversões do Google Ads.
 *
 * Cada canal tem seu próprio rótulo (send_to) para que seja possível saber,
 * na campanha, se o lead veio do WhatsApp ou do formulário.
 *
 * Os rótulos vêm do snippet de evento que o Google Ads gera ao criar a ação
 * de conversão (Ferramentas > Conversões > Ações de conversão).
 */
export const CONVERSION_LABELS = {
  whatsapp: 'AW-11183058594/ymTeCNW70P0cEKLdv9Qp',
  form: 'AW-11183058594/boIrCLi_0P0cEKLdv9Qp',
};

/** Valor atribuído a cada lead. Ajuste se quiser medir ROI por ticket médio. */
const CONVERSION_VALUE = { value: 1.0, currency: 'BRL' };

/**
 * Dispara uma conversão. Quando `url` é informada, a navegação só acontece
 * depois do callback do gtag (ou do timeout), para não perder a conversão
 * em conexões lentas.
 */
export const trackConversion = (channel, { url, params = {} } = {}) => {
  const sendTo = CONVERSION_LABELS[channel];
  const go = () => {
    if (url) window.location.href = url;
  };

  if (typeof window === 'undefined' || typeof window.gtag !== 'function' || !sendTo) {
    if (!sendTo && import.meta.env.DEV) {
      console.warn(`[dev] Conversão "${channel}" sem rótulo configurado em CONVERSION_LABELS.`);
    }
    go();
    return;
  }

  let navigated = false;
  const callback = () => {
    if (navigated) return;
    navigated = true;
    go();
  };

  window.gtag('event', 'conversion', {
    send_to: sendTo,
    ...CONVERSION_VALUE,
    ...params,
    event_callback: url ? callback : undefined,
    event_timeout: 2000,
  });

  // Rede de segurança: se o gtag não chamar o callback, navega mesmo assim.
  if (url) setTimeout(callback, 2000);
};

const CAMPAIGN_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
const CAMPAIGN_STORAGE_KEY = 'vidmar_campaign';

/**
 * Lê os parâmetros de campanha da URL de entrada e os guarda na sessão,
 * para que continuem disponíveis depois que o visitante navegar entre páginas.
 */
export const captureCampaignParams = () => {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const found = CAMPAIGN_KEYS.reduce((acc, key) => {
    const value = params.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});

  if (Object.keys(found).length === 0) return;

  try {
    sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(found));
  } catch {
    // sessionStorage indisponível (navegação privada em alguns navegadores)
  }
};

/** Parâmetros de campanha da sessão, para gravar junto com o lead. */
export const getCampaignParams = () => {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(sessionStorage.getItem(CAMPAIGN_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
};
