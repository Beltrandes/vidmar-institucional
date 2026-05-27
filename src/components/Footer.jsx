import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/portfolio',
    label: 'Portfólio'
  }, {
    path: '/services',
    label: 'Serviços'
  }, {
    path: '/materiais',
    label: 'Materiais'
  }, {
    path: '/contact',
    label: 'Contato'
  }];
  const services = ['Bancadas', 'Lavatórios', 'Ilhas Gourmet', 'Revestimentos', 'E muito mais'];

  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-zinc-900 tracking-tight font-serif">
                VIDMAR
              </span>
              <span className="text-[11px] font-semibold text-gold-vidmar tracking-widest uppercase mt-1">
                SOLUÇÕES EM SUPERFÍCIES
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 pr-4">
              Especialistas em projetos exclusivos de mármore com precisão em medições e instalações de alto padrão.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/marmorariavidmar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-gold-vidmar hover:text-white transition-colors duration-300 shadow-sm" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/marmorariavidmar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-gold-vidmar hover:text-white transition-colors duration-300 shadow-sm" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/marmorariavidmar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-gold-vidmar hover:text-white transition-colors duration-300 shadow-sm" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-6 block border-b border-gold-vidmar/30 inline-block pb-1">
              Navegação
            </span>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-zinc-600 hover:text-gold-vidmar font-medium transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-vidmar/30 group-hover:bg-gold-vidmar transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-6 block border-b border-gold-vidmar/30 inline-block pb-1">
              Serviços
            </span>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  <span className="text-sm text-zinc-600 font-medium">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-6 block border-b border-gold-vidmar/30 inline-block pb-1">
              Contato
            </span>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="mt-0.5 flex-shrink-0 text-gold-vidmar" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+5511989535288" className="text-sm text-zinc-600 font-medium hover:text-gold-vidmar transition-colors">
                    (11) 98953-5288
                  </a>
                  <a href="tel:+5511984752473" className="text-sm text-zinc-600 font-medium hover:text-gold-vidmar transition-colors">
                    (11) 98475-2473
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="mt-0.5 flex-shrink-0 text-gold-vidmar" />
                <a href="mailto:contato@marmorariavidmar.com.br" className="text-sm text-zinc-600 font-medium hover:text-gold-vidmar transition-colors">
                  contato@marmorariavidmar.com.br
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-gold-vidmar" />
                <span className="text-sm text-zinc-600 font-medium group-hover:text-zinc-900 transition-colors">
                  São Caetano do Sul, SP<br />Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 font-medium">
            © {currentYear} Vidmar. Todos os direitos reservados.
          </p>
          <div className="text-sm text-zinc-500 font-medium">
            Desenvolvido com <span className="text-gold-vidmar">♥</span> para projetos exclusivos
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;