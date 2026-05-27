import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Telefone',
      details: [
        { text: '(11) 98953-5288', href: 'tel:+5511989535288' },
        { text: '(11) 98475-2473', href: 'tel:+5511984752473' },
      ]
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: [
        { text: 'contato@marmorariavidmar.com.br', href: 'mailto:contato@marmorariavidmar.com.br' },
        { text: 'gerencia@marmorariavidmar.com.br', href: 'mailto:gerencia@marmorariavidmar.com.br' },
      ]
    },
    {
      icon: <MapPin size={24} />,
      title: 'Endereço',
      details: [
        { text: 'Avenida Conde Francisco Matarazzo, 679' },
        { text: 'São Caetano do Sul, SP - Brasil' },
      ]
    },
    {
      icon: <Clock size={24} />,
      title: 'Horário de Atendimento',
      details: [
        { text: 'Segunda a Sexta: 8h às 18h' },
        { text: 'Sábado: 9h às 13h' },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato e Orçamento Gratuito | VIDMAR Marmoraria São Caetano</title>
        <meta
          name="description"
          content="Entre em contato com a Vidmar. Solicite medição gratuita e orçamento sem compromisso em São Caetano do Sul e Grande SP. Telefone, WhatsApp, email e endereço."
        />
        <link rel="canonical" href="https://marmorariavidmar.com.br/contact" />
        <meta property="og:title" content="Contato e Orçamento Gratuito | VIDMAR Marmoraria São Caetano" />
        <meta property="og:description" content="Entre em contato com a Vidmar. Solicite medição gratuita e orçamento sem compromisso em São Caetano do Sul e Grande SP." />
        <meta property="og:image" content="https://res.cloudinary.com/dcfgsleqw/image/upload/f_auto,q_auto,w_800/v1779154375/pia-calacata-rebaixo-italiano_cryp97.jpg" />
        <meta property="og:url" content="https://marmorariavidmar.com.br/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Como solicito um orçamento para meu projeto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Você pode solicitar um orçamento sem compromisso entrando em contato conosco via WhatsApp no (11) 98953-5288, pelo telefone ou enviando uma mensagem no formulário desta página."
                  }
                },
                {
                  "@type": "Question",
                  "name": "A medição no local realmente é gratuita?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim! Realizamos medição técnica com profissionais especializados e equipamentos de precisão de forma totalmente gratuita em São Caetano do Sul, ABC e toda a Grande São Paulo."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen pt-24 md:pt-28 bg-zinc-950">
        {/* Breadcrumb */}
        <div className="bg-zinc-950 border-b border-zinc-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-zinc-500 hover:text-gold-vidmar transition-colors flex items-center">
                <Home size={16} className="mr-1" />
                Home
              </Link>
              <ChevronRight size={16} className="text-zinc-700" />
              <span className="text-zinc-300 font-medium">Contato</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <section className="bg-zinc-950 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-vidmar/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-4 tracking-tight">
                Entre em <span className="text-gold-vidmar">Contato</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Estamos prontos para transformar seu projeto em realidade. Solicite um orçamento gratuito!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-zinc-950 relative border-t border-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 shadow-2xl hover:border-gold-vidmar/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-vidmar/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-gold-vidmar mb-4 shadow-inner relative z-10 transition-transform duration-500 group-hover:scale-110">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 relative z-10">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    detail.href ? (
                      <a key={idx} href={detail.href} className="block text-zinc-400 hover:text-gold-vidmar text-sm mb-1 font-light relative z-10 transition-colors duration-200">
                        {detail.text}
                      </a>
                    ) : (
                      <p key={idx} className="text-zinc-400 text-sm mb-1 font-light relative z-10">
                        {detail.text}
                      </p>
                    )
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-zinc-950 relative border-t border-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Nossa <span className="text-gold-vidmar">Localização</span>
              </h2>
              <p className="text-xl text-zinc-400 font-light">
                Visite nosso showroom e conheça nossos projetos pessoalmente
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/80"
              style={{ height: '400px' }}
            >
              <iframe
                title="Localização Vidmar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9614776884778!2d-46.57319752578548!3d-23.605714463221027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5db424673dc5%3A0xcaf89ff0ee75ddba!2sVIDMAR%20Solu%C3%A7%C3%B5es%20em%20M%C3%A1rmores%20e%20Vidros!5e0!3m2!1spt-BR!2sbr!4v1779745652732!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-zinc-950 relative border-t border-zinc-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-zinc-400 font-light">
                Respostas para as dúvidas mais comuns
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: 'A medição realmente é gratuita?',
                  answer: 'Sim! Realizamos medição gratuita e sem compromisso em toda a região de São Paulo.'
                },
                {
                  question: 'Quanto tempo leva a instalação?',
                  answer: 'O prazo varia conforme o projeto, mas geralmente instalações residenciais levam de 1 a 3 dias.'
                },
                {
                  question: 'Vocês trabalham com que tipos de mármore?',
                  answer: 'Trabalhamos com diversas opções premium de mármore nacional e importado.'
                },
                {
                  question: 'Oferecem garantia?',
                  answer: 'Sim, oferecemos garantia de 5 anos em todos os nossos serviços e instalações.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-sm"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-zinc-400 font-light">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;