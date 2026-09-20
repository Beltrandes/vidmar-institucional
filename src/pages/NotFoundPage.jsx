import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Images, Hammer, Layers, MessageCircle, SearchX } from 'lucide-react';
import WhatsAppLink from '@/components/WhatsAppLink';

const suggestions = [
  { to: '/', label: 'Início', icon: <Home size={20} /> },
  { to: '/portfolio', label: 'Portfólio', icon: <Images size={20} /> },
  { to: '/services', label: 'Serviços', icon: <Hammer size={20} /> },
  { to: '/materiais', label: 'Materiais', icon: <Layers size={20} /> },
];

/**
 * Pagina de rota inexistente.
 *
 * Alem de evitar a tela em branco, e uma chance de recuperar a visita: quem
 * chegou por um link quebrado ou uma URL antiga continua sendo um possivel
 * cliente, entao a pagina oferece os caminhos principais e o WhatsApp.
 */
const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Página não encontrada | VIDMAR Marmoraria</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>

    {/* pb maior no mobile para o CTA nao ficar sob o botao flutuante do WhatsApp */}
    <div className="min-h-screen pt-24 md:pt-28 bg-zinc-950 flex items-center justify-center px-4 pb-32 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="w-20 h-20 rounded-full bg-gold-vidmar/10 border border-gold-vidmar/30 flex items-center justify-center mx-auto mb-8">
          <SearchX size={38} className="text-gold-vidmar" />
        </div>

        <p className="text-sm uppercase tracking-widest text-gold-vidmar font-semibold mb-3">
          Erro 404
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif tracking-tight">
          Página não encontrada
        </h1>

        <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10">
          O endereço que você acessou não existe ou foi alterado. Use um dos
          caminhos abaixo ou fale direto com a gente.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {suggestions.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex flex-col items-center gap-2 bg-zinc-900/40 border border-zinc-800/80 hover:border-gold-vidmar/50 text-zinc-300 hover:text-white rounded-2xl px-4 py-5 transition-colors duration-300"
            >
              <span className="text-gold-vidmar">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        <WhatsAppLink
          message="Olá, gostaria de solicitar um orçamento."
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-bold text-lg px-8 py-4 rounded-xl shadow-xl shadow-gold-vidmar/10 transition-colors duration-300"
        >
          <MessageCircle size={20} />
          Falar no WhatsApp
        </WhatsAppLink>
      </motion.div>
    </div>
  </>
);

export default NotFoundPage;
