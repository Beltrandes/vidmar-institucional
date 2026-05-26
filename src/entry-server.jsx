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
    link: helmet.link.toString()
  };
}
