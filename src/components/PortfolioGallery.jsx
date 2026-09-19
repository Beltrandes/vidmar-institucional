import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/customSupabaseClient';

const optimizeCloudinaryUrl = (url, width = 800) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
};

const categories = ['Todos', 'Bancadas', 'Lavatórios', 'Ilhas', 'Pisos', 'Escadas'];

const PortfolioGallery = ({ limit }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('id, title, category, image_url, description, alt_text')
        .eq('active', true)
        .order('sort_order', { ascending: true });

      if (error) {
        setError('Não foi possível carregar o portfólio.');
      } else {
        setItems(data);
      }
      setLoading(false);
    };

    fetchItems();
  }, []);

  const filteredItems = activeFilter === 'Todos'
    ? items
    : items.filter(item => item.category === activeFilter);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div className="w-full">
      {!limit && (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === category
                  ? 'bg-gold-vidmar border-gold-vidmar text-white shadow-[0_4px_15px_-3px_rgba(209,146,23,0.4)]'
                  : 'bg-zinc-900 border-zinc-800/80 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: limit || 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl bg-zinc-900 animate-pulse" />
          ))}
        </div>
      )}

      {error && (
        <p className="text-center text-zinc-400 py-16">{error}</p>
      )}

      {!loading && !error && (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  src={optimizeCloudinaryUrl(item.image_url, 600)}
                  alt={item.alt_text || item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              {/* No mobile nao existe hover: as informacoes ficam sempre
                  visiveis. No desktop, seguem aparecendo ao passar o mouse. */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-gold-vidmar/20 text-gold-vidmar backdrop-blur-md rounded-full text-xs font-semibold mb-2 md:mb-3 border border-gold-vidmar/30">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 tracking-wide">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm md:text-base text-zinc-300 font-light line-clamp-2 md:line-clamp-none">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioGallery;
