import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5511989535288?text=Ol%C3%A1%2C%20acabei%20de%20enviar%20um%20formul%C3%A1rio%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.';

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Orçamento Recebido | VIDMAR</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-24 md:pt-28 bg-zinc-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-gold-vidmar/10 border border-gold-vidmar/30 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle size={48} className="text-gold-vidmar" />
          </motion.div>

          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Orçamento <span className="text-gold-vidmar">recebido!</span>
          </h1>

          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10">
            Obrigado pelo contato. Nossa equipe analisará seu projeto e entrará em contato em até{' '}
            <strong className="text-white font-medium">1 dia útil</strong>.
          </p>

          <div className="space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg"
            >
              <MessageCircle size={22} />
              Falar agora pelo WhatsApp
            </a>

            <Link
              to="/"
              className="flex items-center justify-center gap-2 w-full border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white py-4 px-6 rounded-xl font-medium transition-colors duration-200"
            >
              <ArrowLeft size={18} />
              Voltar ao início
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ThankYouPage;
