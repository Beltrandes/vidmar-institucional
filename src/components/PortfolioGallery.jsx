import React, { useState } from 'react';
import { motion } from 'framer-motion';

const optimizeCloudinaryUrl = (url, width = 800) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
};

const PortfolioGallery = ({ limit }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const portfolioItems = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154378/pia-l-preto-sao-gabriel_woj65b.jpg',
      title: 'Bancada em Granito Preto São Gabriel',
      category: 'Bancadas',
      description: 'Bancada em L em hotel de alto padrão',
      alt: 'Bancada de cozinha em granito preto São Gabriel em formato L de alto padrão'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779759851/pia-calacata-rebaixo-italiano_xkinvo.jpg',
      title: 'Bancada em Quartzo Calacata',
      category: 'Bancadas',
      description: 'Bancada slim com rebaixo italiano',
      alt: 'Bancada de cozinha em quartzo Calacata com acabamento rebaixo italiano'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154374/lavatorio-branco-alaska-esculpido_r8b5uj.jpg',
      title: 'Lavatório em Granito Branco Alaska',
      category: 'Lavatórios',
      description: 'Lavatório caixote com cuba esculpida',
      alt: 'Lavatório esculpido caixote em granito branco Alaska para banheiro'
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779743381/pia-churrasqueira-super-white-rodabase_g0gw6c.jpg',
      title: 'Bancada em Granito Branco Pitaya',
      category: 'Bancadas',
      description: 'Bancada em Área Gourmet com churrasqueira embutida',
      alt: 'Bancada de área gourmet em granito branco Pitaya com churrasqueira embutida'
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154375/lavatorio-quartzo-branco-cuba-sobrepor_s72wx1.jpg',
      title: 'Lavatório em Quartzo Branco',
      category: 'Lavatórios',
      description: 'Lavatório com frontão alto e cuba sobrepor',
      alt: 'Lavatório moderno em quartzo branco com cuba de sobrepor'
    },
    {
      id: 6,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779743523/nicho-cozinha-quartzo-branco_vaya1s.jpg',
      title: 'Nicho em Quartzo Branco',
      category: 'Bancadas',
      description: 'Bancada em nicho para cozinha',
      alt: 'Nicho planejado esculpido para cozinha em quartzo branco'
    },
    {
      id: 7,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154375/pia-balcao-branco-parana_penbzp.jpg',
      title: 'Bancadas em Mármore Branco Paraná',
      category: 'Bancadas',
      description: 'Bancada e balcão de cozinha',
      alt: 'Bancada e balcão americano de cozinha em mármore nobre branco Paraná'
    },
    {
      id: 8,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154374/lavatorio-esculpido-branco-itaunas_uuxfpu.jpg',
      title: 'Lavatório em Granito Branco Itaúnas Levigado',
      category: 'Lavatórios',
      description: 'Design exclusivo em granito com cuba esculpida',
      alt: 'Lavatório com design exclusivo em granito branco Itaúnas levigado e cuba esculpida'
    },
    {
      id: 9,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154379/pia-preto-sao-gabriel-cuba-gourmet_wf7tfg.jpg',
      title: 'Bancada em Granito Preto São Gabriel',
      category: 'Bancadas',
      description: 'Bancada extensa com cuba gourmet e cooktop',
      alt: 'Bancada de cozinha extensa com cooktop e cuba gourmet em granito preto São Gabriel'
    },
    {
      id: 10,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779743745/ilha-banquetas-quartzo-branco_nhbxds.jpg',
      title: 'Ilha em Quartzo Branco',
      category: 'Ilhas',
      description: 'Ilha em quartzo branco com pé lateral para banquetas',
      alt: 'Ilha central em quartzo branco com acabamento em cascata para banquetas'
    },
    {
      id: 11,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154376/lavatorio-esculpido-cuba-extensa-quartzo-bege_ft1s62.jpg',
      title: 'Lavatório em Quartzo Bege',
      category: 'Lavatórios',
      description: 'Lavatório esculpido com cuba extensa',
      alt: 'Lavatório com cuba esculpida extensa em quartzo bege de alto padrão'
    },
    {
      id: 12,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779743873/pia-ilha-cuba-gourmet-yellow-bamboo_r8vt98.jpg',
      title: 'Ilha em Quartzito Yellow Bamboo',
      category: 'Ilhas',
      description: 'Bancada em ilha com cuba gourmet e cooktop',
      alt: 'Ilha central gourmet com cooktop em quartzito nobre Yellow Bamboo'
    },
    {
      id: 13,
      image: 'https://res.cloudinary.com/dcfgsleqw/image/upload/v1779154375/lavatorio-esculpido-nicho-branco-itaunas_qvcduf.jpg',
      title: 'Lavatório Branco Itaúnas Levigado',
      category: 'Lavatórios',
      description: 'Lavatório embutido em nicho com cuba esculpida',
      alt: 'Lavatório embutido em nicho de banheiro com cuba esculpida em granito branco Itaúnas'
    }
  ];

  const categories = ['Todos', 'Bancadas', 'Lavatórios', 'Ilhas', 'Pisos', 'Escadas'];

  const filteredItems = activeFilter === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div className="w-full">
      {!limit && (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === category
                ? 'bg-gold-vidmar border-gold-vidmar text-white shadow-[0_4px_15px_-3px_rgba(209,146,23,0.4)]'
                : 'bg-zinc-900 border-zinc-800/80 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Grid de Portfólio */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {displayedItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(209,146,23,0.15)] transition-all duration-500 hover:border-gold-vidmar/50"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={optimizeCloudinaryUrl(item.image, 600)}
                alt={item.alt || item.title}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1.5 bg-gold-vidmar/20 text-gold-vidmar backdrop-blur-md rounded-full text-xs font-semibold mb-3 border border-gold-vidmar/30">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold mb-2 tracking-wide">{item.title}</h3>
                <p className="text-zinc-300 font-light">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioGallery;