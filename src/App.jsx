import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PortfolioPage from '@/pages/PortfolioPage';
import ServicesPage from '@/pages/ServicesPage';
import MaterialsPage from '@/pages/MaterialsPage';
import ContactPage from '@/pages/ContactPage';
import ThankYouPage from '@/pages/ThankYouPage';
import NotFoundPage from '@/pages/NotFoundPage';
import AdminPage from '@/pages/AdminPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/materiais" element={<MaterialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/obrigado" element={<ThankYouPage />} />
            {/* Area interna de gestao do portfolio, protegida por login */}
            <Route path="/admin" element={<AdminPage />} />
            {/* Catch-all: sem isto, uma URL invalida renderizava tela em branco */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {/* Sem isto, nenhum toast aparece — inclusive o erro de envio do formulario */}
      <Toaster />
    </>
  );
}

export default App;