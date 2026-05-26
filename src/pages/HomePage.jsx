import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Users, Clock, Star, Sparkles, Shield, Compass, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PortfolioGallery from '@/components/PortfolioGallery';
import ServicesSection from '@/components/ServicesSection';

const HomePage = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const stats = [
    { icon: <Award size={32} />, value: '15+', label: 'Anos de Experiência' },
    { icon: <Users size={32} />, value: '500+', label: 'Projetos Concluídos' },
    { icon: <Clock size={32} />, value: '100%', label: 'Satisfação Garantida' }
  ];

  const features = [
    {
      icon: <Sparkles className="text-gold-vidmar flex-shrink-0" size={28} />,
      title: 'Acabamentos Nobres',
      description: 'Execução primorosa nos mínimos detalhes com o que há de melhor no mercado mundial de rochas.'
    },
    {
      icon: <Shield className="text-gold-vidmar flex-shrink-0" size={28} />,
      title: 'Qualidade Incomparável',
      description: 'Materiais selecionados de alto padrão para garantir máxima durabilidade, sofisticação e requinte.'
    },
    {
      icon: <Compass className="text-gold-vidmar flex-shrink-0" size={28} />,
      title: 'Projetos Sob Medida',
      description: 'Planejamento e design personalizados para se adaptar perfeitamente ao seu espaço e estilo de vida.'
    },
    {
      icon: <CheckCircle className="text-gold-vidmar flex-shrink-0" size={28} />,
      title: 'Medição de Precisão',
      description: 'Equipe especializada com equipamentos modernos para medições perfeitas e livre de erros.'
    },
    {
      icon: <Award className="text-gold-vidmar flex-shrink-0" size={28} />,
      title: 'Instalação Exclusiva',
      description: 'Entrega ágil e instalação impecável, realizada por profissionais qualificados no alto padrão.'
    },
    {
      icon: <HeartHandshake className="text-gold-vidmar flex-shrink-0" size={28} />,
      title: 'Atendimento Dedicado',
      description: 'Acompanhamento consultivo do início ao fim, transformando seu sonho em realidade com segurança.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>VIDMAR Marmoraria | Bancadas e Lavatórios de Mármore | São Caetano do Sul SP</title>
        <meta
          name="description"
          content="A Vidmar desenvolve projetos exclusivos em mármores e pedras nobres com cortes milimétricos e acabamento impecável em São Caetano do Sul e Grande SP. Solicite orçamento gratuito."
        />
        <link rel="canonical" href="https://marmorariavidmar.com.br/" />
        <meta property="og:title" content="VIDMAR Marmoraria | Projetos Exclusivos em Mármore SP" />
        <meta property="og:description" content="Marmoraria de alto padrão especializada em bancadas, lavatórios, ilhas e revestimentos de pedras nobres. Solicite orçamento gratuito." />
        <meta property="og:image" content="https://res.cloudinary.com/dcfgsleqw/image/upload/f_auto,q_auto,w_800/v1779154375/pia-calacata-rebaixo-italiano_cryp97.jpg" />
        <meta property="og:url" content="https://marmorariavidmar.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VIDMAR Soluções em Superfícies",
              "description": "Marmoraria de alto padrão especializada em bancadas, lavatórios, ilhas gourmet e revestimentos em mármore e pedras nobres.",
              "url": "https://marmorariavidmar.com.br",
              "telephone": ["+551198953-5288", "+551198475-2473"],
              "email": "contato@marmorariavidmar.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avenida Conde Francisco Matarazzo, 679",
                "addressLocality": "São Caetano do Sul",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.6057145,
                "longitude": -46.5731975
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "13:00"
                }
              ],
              "image": "https://horizons-cdn.hostinger.com/2c2f884d-4128-4dbf-a54f-51078b01bf51/cfe143fb271ef420c70b475d9f48bcbb.png",
              "priceRange": "$$$"
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-hidden">

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center pt-20 md:pt-24 overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dcfgsleqw/image/upload/f_auto,q_auto,w_1920/v1779154375/pia-calacata-rebaixo-italiano_cryp97.jpg')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950/80" />
          </div>

          {/* Golden Ambient Light */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-vidmar/5 rounded-full blur-[150px] pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-gold-vidmar/30 px-4 py-2 rounded-full backdrop-blur-md shadow-2xl">
                <Star size={16} className="text-gold-vidmar fill-gold-vidmar" />
                <span className="text-xs uppercase tracking-widest text-zinc-300 font-medium">Marmoraria de Alto Padrão</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight tracking-tight max-w-5xl mx-auto font-serif">
                A Excelência em <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-vidmar via-amber-300 to-gold-vidmar">Projetos Exclusivos</span>
              </h1>

              <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
                Transformamos ambientes de alto padrão com a sofisticação das pedras mais nobres e acabamentos refinados sob medida. A assinatura de luxo que seu lar merece.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 relative max-w-max mx-auto">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-gold-vidmar/20 transition-all duration-300 w-full sm:w-auto"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-zinc-900/50 border-2 border-zinc-700 text-white hover:bg-zinc-800 hover:border-gold-vidmar text-lg px-8 py-6 rounded-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Ver Portfólio
                  </Button>
                </Link>

                {/* Scroll Indicator positioned to the side of the buttons */}
                <AnimatePresence>
                  {showScrollIndicator && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="hidden lg:flex absolute -right-24 items-center justify-center h-full top-4"
                    >
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer hover:border-gold-vidmar transition-colors duration-300"
                        title="Role para baixo"
                        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
                      >
                        <div className="w-1.5 h-3 bg-white rounded-full mt-2" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-zinc-950 relative border-t border-b border-zinc-900/60 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-vidmar/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group bg-zinc-900/30 rounded-2xl p-8 text-center transition-all duration-500 border border-zinc-800/80 hover:border-gold-vidmar/45 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(209,146,23,0.15)] relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-vidmar/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="w-16 h-16 mx-auto rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-gold-vidmar mb-6 shadow-inner relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-zinc-900/80 group-hover:border-gold-vidmar/30">
                    {stat.icon}
                  </div>

                  <div className="text-5xl font-bold mb-3 text-white relative z-10 tracking-tight font-serif">
                    {stat.value}
                  </div>
                  <div className="text-zinc-400 font-light relative z-10 text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-vidmar/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-1.5 border border-gold-vidmar/20 bg-gold-vidmar/5 px-5 py-2 rounded-full mb-4">
                <span className="text-xs uppercase tracking-widest text-gold-vidmar font-semibold">Exclusividade e Design</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                Soluções Sob Medida
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light">
                Do planejamento à entrega impecável, trabalhamos com as rochas mais nobres para materializar seu projeto
              </p>
            </motion.div>
            <ServicesSection />
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="py-24 bg-zinc-950 relative border-t border-zinc-900/50 overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-vidmar/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-1.5 border border-gold-vidmar/20 bg-gold-vidmar/5 px-5 py-2 rounded-full mb-4">
                <span className="text-xs uppercase tracking-widest text-gold-vidmar font-semibold">Galeria de Luxo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                Nossos Projetos de Destaque
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light">
                Inspire-se com obras concluídas que refletem precisão absoluta e sofisticação incomparável
              </p>
            </motion.div>

            <PortfolioGallery limit={3} />

            <div className="text-center mt-16">
              <Link to="/portfolio">
                <Button
                  size="lg"
                  className="bg-transparent border border-zinc-800 hover:border-gold-vidmar text-zinc-300 hover:text-white hover:bg-gold-vidmar/5 px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-xl"
                >
                  Ver Portfólio Completo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-zinc-950 relative border-t border-zinc-900/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-1.5 border border-gold-vidmar/20 bg-gold-vidmar/5 px-5 py-2 rounded-full mb-4">
                <span className="text-xs uppercase tracking-widest text-gold-vidmar font-semibold">Diferencial Premium</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                Por que escolher a Vidmar?
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light">
                O equilíbrio perfeito entre a beleza atemporal das rochas nobres e a engenharia de alta precisão
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-zinc-900/30 border border-zinc-800/80 hover:border-gold-vidmar/40 rounded-2xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(209,146,23,0.1)] transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-vidmar/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center text-gold-vidmar transition-all duration-500 group-hover:scale-110 group-hover:border-gold-vidmar/30">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gold-vidmar transition-colors duration-300">{item.title}</h3>
                      <p className="text-zinc-400 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-zinc-950 relative overflow-hidden border-t border-zinc-900/60">
          {/* Subtle Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-vidmar/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/60 rounded-3xl p-12 md:p-16 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gold-vidmar/5 rounded-full blur-[50px] pointer-events-none" />

              <div className="space-y-8 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-1.5 border border-gold-vidmar/30 bg-gold-vidmar/10 px-5 py-2 rounded-full">
                  <span className="text-xs uppercase tracking-widest text-gold-vidmar font-bold">Solicite um Estudo Gratuito</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight">
                  Pronto para Transformar Seu Ambiente?
                </h2>

                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                  Entre em contato com nossos consultores especialistas e agende um estudo técnico completo e orçamento sem compromisso.
                </p>

                <div className="pt-4">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="bg-gold-vidmar hover:bg-amber-500 text-zinc-950 font-bold text-lg px-8 py-6 rounded-xl shadow-xl shadow-gold-vidmar/10 hover:shadow-gold-vidmar/25 transition-all duration-300"
                    >
                      Agendar Medição e Orçamento
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;