import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

async function run() {
  console.log('⚡ Iniciando Pré-renderização Estática (SSG)...');

  // 1. Ler o index.html compilado pelo build do cliente
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

  // 2. Importar o render da nossa build de servidor (SSR)
  // O Vite compilará o entry-server para dist/server/entry-server.js
  const { render } = await import('./dist/server/entry-server.js');

  // 3. Definir as rotas que serão geradas
  const routesToPrerender = [
    { path: '/', file: 'index.html' },
    { path: '/portfolio', file: 'portfolio/index.html' },
    { path: '/services', file: 'services/index.html' },
    { path: '/materiais', file: 'materiais/index.html' },
    { path: '/contact', file: 'contact/index.html' },
    { path: '/404', file: '404.html' }
  ];

  for (const { path: routePath, file } of routesToPrerender) {
    console.log(`🌍 Renderizando rota: ${routePath}`);

    // Renderizar a rota usando o entry-server
    const { html, title, meta, link } = render(routePath);

    // Substituir a div root vazia pelo HTML pré-renderizado
    let pageHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    // Injetar o Título do Helmet (se houver)
    if (title) {
      if (pageHtml.includes('<title>')) {
        pageHtml = pageHtml.replace(/<title>.*?<\/title>/, title);
      } else {
        pageHtml = pageHtml.replace('</head>', `${title}\n</head>`);
      }
    }

    // Injetar as Meta tags e Links do Helmet antes de </head>
    let helmetHeadTags = '';
    if (meta) helmetHeadTags += `\n  ${meta}`;
    if (link) helmetHeadTags += `\n  ${link}`;

    if (helmetHeadTags) {
      pageHtml = pageHtml.replace('</head>', `${helmetHeadTags}\n</head>`);
    }

    // Determinar o caminho final do arquivo
    const outFile = toAbsolute(`dist/${file}`);
    const outDir = path.dirname(outFile);

    // Criar a pasta da sub-rota se ela não existir
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    // Salvar o HTML compilado da página
    fs.writeFileSync(outFile, pageHtml, 'utf-8');
    console.log(`✅ Salvo: dist/${file}`);
  }

  // 4. Limpar a pasta temporária de build do servidor
  console.log('🧹 Limpando arquivos de build de servidor temporários...');
  if (fs.existsSync(toAbsolute('dist/server'))) {
    fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true });
  }

  console.log('🎉 Pré-renderização Estática (SSG) concluída com sucesso!');
}

run().catch((err) => {
  console.error('🔥 Erro durante a pré-renderização:', err);
  process.exit(1);
});
