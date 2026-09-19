import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import App from './App';

export function render(url) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  return {
    html,
    title: helmet.title.toString(),
    meta: helmet.meta.toString(),
    link: helmet.link.toString(),
    // JSON-LD (LocalBusiness, FAQPage). Sem isto, o schema so existe apos o
    // JavaScript rodar e nao aparece no HTML entregue aos buscadores.
    script: helmet.script.toString()
  };
}
