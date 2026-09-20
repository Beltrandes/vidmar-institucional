import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServicesSection from '@/components/ServicesSection';

const ServicesPage = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Entre em contato e compartilhe sua visão do projeto'
    },
    {
      number: '02',
      title: 'Medição Gratuita',
      description: 'Nossa equipe realiza medição precisa no local'
    },
    {
      number: '03',
      title: 'Orçamento Detalhado',
      description: 'Receba proposta completa sem compromisso'
    },
    {
      number: '04',
      title: 'Execução',
      description: 'Instalação profissional com acabamento perfeito'
    },
    {
      number: '05',
      title: 'Entrega Final',
      description: 'Vistoria e garantia de qualidade'
    }
  ];

  const serviceDetails = [
    {
      title: 'Bancadas em Mármore',
      description: 'Bancadas personalizadas para cozinhas e banheiros que combinam funcionalidade e elegância. Utilizamos apenas mármores premium selecionados, garantindo cortes precisos e um acabamento escultural que eleva o padrão do seu ambiente.',
      features: [
        'Medição e instalação incluídas',
        'Variedade de pedras e texturas',
        'Cortes milimétricos',
        'Acabamento polido, acetinado ou levigado',
        'Tratamento impermeabilizante premium'
      ]
    },
    {
      title: 'Lavatórios',
      description: 'Lavatórios esculpidos em mármore que transformam seu banheiro em um espaço de luxo e relaxamento, criando verdadeiras obras de arte funcionais.',
      features: [
        'Design exclusivo e sob medida',
        'Válvulas ocultas e rampas esculpidas',
        'Nichos embutidos harmonizados',
        'Acabamento de borda impecável',
        'Instalação com fixação invisível'
      ]
    },
    {
      title: 'Ilhas Gourmet',
      description: 'Ilhas em mármore que se tornam a joia da sua cozinha. Peças imponentes, perfeitas para quem ama cozinhar, receber convidados e preza pela sofisticação atemporal.',
      features: [
        'Projetos monolíticos ou em cascata',
        'Integração perfeita com cooktops',
        'Estrutura reforçada',
        'Beleza atemporal e alto impacto',
        'Superfícies de fácil manutenção'
      ]
    },
    {
      title: 'Revestimentos',
      description: 'Pisos e paredes revestidos com pedras nobres. Uma solução arquitetônica que proporciona amplitude, requinte e uma atmosfera de exclusividade incomparável.',
      features: [
        'Paginação em bookmatch disponível',
        'Instalação com juntas mínimas',
        'Ampla durabilidade',
        'Elegância única e contínua',
        'Valorização imediata do imóvel'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bancadas, Lavatórios e Ilhas em Mármore | Serviços VIDMAR</title>
        <meta
          name="description"
          content="Conheça os serviços premium de marmoraria da Vidmar. Planejamento, medição precisa e instalação impecável de bancadas, ilhas gourmet e revestimentos sob medida."
        />
        <link rel="canonical" href="https://marmorariavidmar.com.br/services/" />
        <meta property="og:title" content="Bancadas, Lavatórios e Ilhas em Mármore | Serviços VIDMAR" />
        <meta property="og:description" content="Conheça os serviços premium de marmoraria da Vidmar. Planejamento, medição precisa e instalação impecável sob medida." />
        <meta property="og:image" content="https://res.cloudinary.com/dcfgsleqw/image/upload/f_auto,q_auto,w_800/v1779154375/pia-calacata-rebaixo-italiano_cryp97.jpg" />
        <meta property="og:url" content="https://marmorariavidmar.com.br/services/" />
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
              <span className="text-zinc-300 font-medium">Serviços</span>
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
                Nossos <span className="text-gold-vidmar">Serviços</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Soluções arquitetônicas em mármore com qualidade premium, precisão técnica e instalação especializada.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesSection />
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 tracking-wide">
                Detalhes da <span className="text-gold-vidmar">Excelência</span>
              </h2>
              <p className="text-xl text-zinc-400 font-light">
                O que torna cada um dos nossos projetos único e exclusivo
              </p>
            </motion.div>

            <div className="space-y-8">
              {serviceDetails.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 lg:p-10 hover:border-gold-vidmar/30 transition-colors duration-500"
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    <div className="lg:w-1/3">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <div className="h-1 w-12 bg-gold-vidmar mb-6 rounded-full" />
                      <p className="text-zinc-400 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-gold-vidmar flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-300 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Nosso Processo
              </h2>
              <p className="text-xl text-zinc-400 font-light">
                Do primeiro contato à entrega impecável
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-zinc-900/40 rounded-2xl p-8 border border-zinc-800/80 text-center h-full hover:-translate-y-2 transition-transform duration-300 backdrop-blur-sm">
                    <div className="text-5xl font-bold text-zinc-800/60 mb-4 font-serif">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="text-gold-vidmar/40" size={28} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-vidmar/10 via-zinc-950 to-zinc-950 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Eleve o padrão do seu projeto
              </h2>
              <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                Agende uma consultoria especializada e descubra como nossas rochas naturais podem transformar seu ambiente.
              </p>
              <Link to="/contact" className="inline-block pt-4">
                <Button
                  size="lg"
                  className="bg-gold-vidmar text-white hover:bg-gold-vidmar/90 px-10 py-7 text-lg rounded-xl shadow-[0_10px_30px_-10px_rgba(209,146,23,0.5)] transition-all hover:scale-105"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;