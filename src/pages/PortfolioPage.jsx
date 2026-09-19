import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Star, Award, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react';
import PortfolioGallery from '@/components/PortfolioGallery';
import WhatsAppLink from '@/components/WhatsAppLink';

const PortfolioPage = () => {
  // Somente depoimentos REAIS de clientes, transcritos das avaliações do Google.
  // Não alterar os textos: eles precisam bater com o que o visitante encontra
  // ao clicar em "Ver todas as avaliações no Google".
  // `project` é opcional e só aparece quando o próprio cliente cita o trabalho.
  const testimonials = [
    {
      name: 'Talita Moura',
      rating: 5,
      comment: 'Amamos as bancadas. Inicialmente iríamos fazer apenas 1, mas a qualidade e o custo, acabamos fazendo todas. O atendimento do Bel fez toda a diferença. Os outros moços da instalação também eram muito prestativos.',
      project: 'Bancadas'
    },
    {
      name: 'Jose Luciano Trevisan',
      rating: 5,
      comment: 'Projeto sob encomenda, orientações precisas sobre o preparo da alvenaria, cumpriu o prazo e qualidade na instalação e acabamento. Recomendo.',
      project: 'Projeto sob encomenda'
    },
    {
      name: 'Talita Mendes Oliveira',
      rating: 5,
      comment: 'Um excelente atendimento , fiz o mármore de todo o meu apartamento ficou perfeito da forma que esperava super recomendo !',
      project: 'Mármore em todo o apartamento'
    },
    {
      name: 'Roseli Pintor Alvaredo',
      rating: 5,
      comment: 'Ótimo atendimento...preço bom e entrega rápida...recomendo..'
    },
    {
      name: 'Bruno Da Silva',
      rating: 5,
      comment: 'Superou as expectativas, super recomendo 🙌🙏'
    },
    {
      name: 'Evandro Jose',
      rating: 5,
      comment: 'Bom atendimento e um bom serviço!!!'
    }
  ];

  const projectStats = [
    { icon: <Award size={28} />, value: '500+', label: 'Projetos Concluídos' },
    { icon: <Star size={28} />, value: '4.9/5', label: 'Avaliação Média' },
    { icon: <TrendingUp size={28} />, value: '98%', label: 'Clientes Satisfeitos' }
  ];

  return (
    <>
      <Helmet>
        <title>Portfólio de Projetos em Mármore | VIDMAR Marmoraria SP</title>
        <meta
          name="description"
          content="Veja fotos reais de projetos concluídos de alto padrão executados pela Vidmar: bancadas gourmet, lavatórios esculpidos, ilhas em quartzo e mais."
        />
        <link rel="canonical" href="https://marmorariavidmar.com.br/portfolio" />
        <meta property="og:title" content="Portfólio de Projetos em Mármore | VIDMAR Marmoraria SP" />
        <meta property="og:description" content="Veja fotos reais de projetos concluídos de alto padrão executados pela Vidmar: bancadas gourmet, lavatórios esculpidos, ilhas e mais." />
        <meta property="og:image" content="https://res.cloudinary.com/dcfgsleqw/image/upload/f_auto,q_auto,w_800/v1779154378/pia-l-preto-sao-gabriel_woj65b.jpg" />
        <meta property="og:url" content="https://marmorariavidmar.com.br/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
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
              <span className="text-zinc-300 font-medium">Portfólio</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <section className="bg-zinc-950 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-vidmar/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Nosso <span className="text-gold-vidmar">Portfólio</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Conheça nossos projetos que transformaram ambientes com a mais refinada seleção de pedras nobres
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-16 bg-zinc-950 relative border-b border-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group bg-zinc-900/40 rounded-2xl p-8 text-center transition-all duration-500 border border-zinc-800/80 hover:border-gold-vidmar/50 shadow-2xl relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-vidmar/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="w-16 h-16 mx-auto rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-gold-vidmar mb-6 shadow-inner relative z-10 transition-transform duration-500 group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 relative z-10 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-zinc-400 font-light relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PortfolioGallery />

            {/* CTA logo apos a galeria: e o ponto de maior intencao da pagina */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/60 rounded-3xl p-10 md:p-14 text-center backdrop-blur-md shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
                Gostou de algum projeto?
              </h2>
              <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto mb-8">
                Envie uma foto ou a medida do seu ambiente e receba um orçamento sem compromisso. A medição é gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppLink
                  message="Olá, vi o portfólio no site e gostaria de um orçamento."
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-bold text-lg px-8 py-4 rounded-xl shadow-xl shadow-gold-vidmar/10 transition-colors duration-300"
                >
                  <MessageCircle size={20} />
                  Pedir Orçamento no WhatsApp
                </WhatsAppLink>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-zinc-800 hover:border-gold-vidmar text-zinc-300 hover:text-white px-8 py-4 rounded-xl font-medium transition-colors duration-300"
                >
                  Preencher formulário
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-center ${testimonials.length > 0 ? 'mb-16' : 'mb-10'}`}
            >
              <h2 className="text-4xl font-bold mb-4 tracking-wide">
                O que nossos clientes dizem
              </h2>
              <p className="text-xl text-zinc-400 font-light">
                {testimonials.length > 0
                  ? 'A satisfação e confiança de quem escolheu a Vidmar'
                  : 'Veja as avaliações de quem já contratou a Vidmar, direto no Google'}
              </p>
            </motion.div>

            {testimonials.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="flex flex-col h-full bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 hover:border-gold-vidmar/30 transition-colors duration-500 relative"
                  >
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-gold-vidmar fill-gold-vidmar mr-1" />
                      ))}
                    </div>
                    <p className="text-zinc-300 font-light mb-8 italic leading-relaxed text-lg">
                      "{testimonial.comment}"
                    </p>
                    <div className="border-t border-zinc-800/80 pt-6 mt-auto">
                      <p className="font-semibold text-white tracking-wide">{testimonial.name}</p>
                      {testimonial.project && (
                        <p className="text-sm text-gold-vidmar font-medium">{testimonial.project}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className={`text-center ${testimonials.length > 0 ? 'mt-16' : ''}`}>
              <a
                href="https://www.google.com/maps/place/VIDMAR+Solu%C3%A7%C3%B5es+em+Superf%C3%ADcies/@-23.6057145,-46.5731975,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5db424673dc5:0xcaf89ff0ee75ddba!8m2!3d-23.6057194!4d-46.5706226!16s%2Fg%2F11thcdzp6h?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-gold-vidmar text-zinc-300 hover:text-white rounded-xl transition-all duration-300 shadow-xl group hover:bg-gold-vidmar/5"
              >
                <img src="https://res.cloudinary.com/dcfgsleqw/image/upload/v1779749503/google-logo-icon_zsttpd.png" alt="Google" className="h-5 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" onError={(e) => { e.target.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'; e.target.className = 'h-5 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity'; }} />
                <span className="font-semibold text-sm tracking-wide ml-1">Ver todas as avaliações no Google</span>
                <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform text-gold-vidmar" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;