import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LayoutGrid, Droplet, ChefHat, Layers, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <LayoutGrid size={32} strokeWidth={1.5} />,
      title: 'Bancadas',
      description: 'Bancadas exclusivas que combinam precisão técnica com beleza escultural para cozinhas e áreas de lazer de alto padrão.',
      benefits: ['Medição precisa', 'Acabamento moderno', 'Instalação especializada']
    },
    {
      icon: <Droplet size={32} strokeWidth={1.5} />,
      title: 'Lavatórios',
      description: 'Peças únicas esculpidas em material selecionado para transformar seu ambiente em um verdadeiro refúgio de luxo.',
      benefits: ['Design sob medida', 'Válvula oculta opcional', 'Materiais premium']
    },
    {
      icon: <ChefHat size={32} strokeWidth={1.5} />,
      title: 'Ilhas Gourmet',
      description: 'O centro das atenções da sua casa. Ilhas imponentes que unem estética sofisticada e máxima funcionalidade.',
      benefits: ['Integração perfeita', 'Bordas trabalhadas', 'Resistência superior']
    },
    {
      icon: <Layers size={32} strokeWidth={1.5} />,
      title: 'Revestimentos',
      description: 'Pisos e paredes revestidos com pedras nobres que criam uma atmosfera de elegância inigualável.',
      benefits: ['Paginação exclusiva', 'Juntas imperceptíveis', 'Valorização imobiliária']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="space-y-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group bg-zinc-950 rounded-2xl p-8 transition-all duration-500 border border-zinc-800/80 hover:border-gold-vidmar/50 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(209,146,23,0.15)] relative overflow-hidden"
          >
            {/* Subtle gradient glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-vidmar/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-gold-vidmar mb-6 shadow-inner relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-zinc-900/80">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 relative z-10 tracking-wide">
              {service.title}
            </h3>

            <p className="text-zinc-400 mb-8 leading-relaxed relative z-10 font-light">
              {service.description}
            </p>

            <ul className="space-y-3 relative z-10 border-t border-zinc-800/50 pt-6 mt-auto">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-sm text-zinc-300 font-light tracking-wide">
                  <span className="w-1.5 h-1.5 bg-gold-vidmar rounded-full mr-3 shadow-[0_0_8px_rgba(209,146,23,0.8)]"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to action for more solutions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-zinc-400 text-lg mb-4 font-light">
          Temos ainda <span className="font-medium text-white">mais soluções</span> e projetos personalizados para atender à sua necessidade.
        </p>
        <Link to="/contact" className="inline-flex items-center text-gold-vidmar font-medium hover:text-gold-vidmar/80 transition-colors group">
          Entre em contato para saber mais
          <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicesSection;