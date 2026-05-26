import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/services', label: 'Serviços' },
    { path: '/materiais', label: 'Materiais' },
    { path: '/contact', label: 'Contato' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/55 shadow-lg shadow-zinc-200/20' 
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-300">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group transition-transform duration-200 hover:scale-105 active:scale-95">
            <img
              src="https://horizons-cdn.hostinger.com/2c2f884d-4128-4dbf-a54f-51078b01bf51/cfe143fb271ef420c70b475d9f48bcbb.png"
              alt="Vidmar Logo"
              className="h-10 w-auto md:h-[54px] object-contain transition-all"
            />
            <div className="flex flex-col ml-3">
              <span className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight leading-none group-hover:text-gold-vidmar transition-colors duration-300 font-serif">
                VIDMAR
              </span>
              <span className="text-[9px] md:text-[11px] text-gold-vidmar tracking-widest uppercase mt-1 font-sans font-semibold">
                SOLUÇÕES EM SUPERFÍCIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors duration-300 relative py-2 group ${
                  isActive(link.path)
                    ? 'text-gold-vidmar'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-vidmar transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 border-t border-zinc-100 overflow-hidden backdrop-blur-lg"
          >
            <nav className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-gold-vidmar/10 text-gold-vidmar border border-gold-vidmar/20 shadow-sm'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;