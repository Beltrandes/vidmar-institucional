import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Star, Award, TrendingUp, ArrowRight } from 'lucide-react';
import PortfolioGallery from '@/components/PortfolioGallery';

const PortfolioPage = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      rating: 5,
      comment: 'Trabalho impecável! A bancada da minha cozinha ficou perfeita. Uma verdadeira obra de arte.',
      project: 'Bancada Gourmet'
    },
    {
      name: 'João Santos',
      rating: 5,
      comment: 'Profissionais muito atenciosos e o resultado superou todas as nossas expectativas. Acabamento de luxo.',
      project: 'Lavatório Esculpido'
    },
    {
      name: 'Ana Costa',
      rating: 5,
      comment: 'Excelente qualidade do mármore e execução perfeita. Adorei cada detalhe da instalação.',
      project: 'Escada Premium'
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
        <title>Projetos Executados - VIDMAR</title>
        <meta
          name="description"
          content="Veja nosso portfólio completo de projetos de alto padrão. Bancadas, lavatórios, ilhas e revestimentos executados com perfeição pela Vidmar."
        />
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
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 tracking-wide">
                O que nossos clientes dizem
              </h2>
              <p className="text-xl text-zinc-400 font-light">
                A satisfação e confiança de quem escolheu a Vidmar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 hover:border-gold-vidmar/30 transition-colors duration-500 relative"
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
                    <p className="text-sm text-gold-vidmar font-medium">{testimonial.project}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
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