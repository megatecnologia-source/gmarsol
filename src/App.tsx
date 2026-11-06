/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CredibilityStrip } from './components/CredibilityStrip';
import { AboutSection } from './components/AboutSection';
import { CategoriesSection } from './components/CategoriesSection';
import { RenovationSection } from './components/RenovationSection';
import { InstitutionalBanner } from './components/InstitutionalBanner';
import { BrandsSection } from './components/BrandsSection';
import { VideosSection } from './components/VideosSection';
import { StoresSection } from './components/StoresSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StorePickerModal } from './components/StorePickerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { ProductCategory } from './data/categories';
import { useScrollRevealObserver } from './utils/motion';

export default function App() {
  useScrollRevealObserver();

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [storePickerOpen, setStorePickerOpen] = useState(false);
  const [activeCategoryContext, setActiveCategoryContext] = useState<ProductCategory | null>(null);

  // Sincroniza histórico e navegação do navegador
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Atualização dinâmica de Título, Meta Description e Tag Canônica de SEO por rota
  useEffect(() => {
    let title = 'Grupo Marsol - Materiais de Construção';
    let description =
      'Site institucional One Page do Grupo Marsol em São Luís - MA. Conheça as 7 lojas, marcas comercializadas, categorias e canais diretos de atendimento.';
    let canonical = 'https://www.grupomarsol.com.br';

    if (currentPath === '/politica-de-privacidade') {
      title = 'Política de Privacidade | Marsol Materiais de Construção';
      description =
        'Conheça a Política de Privacidade da Marsol Materiais de Construção em conformidade com a LGPD. Saiba como tratamos seus dados e seus direitos como titular.';
      canonical = 'https://www.grupomarsol.com.br/politica-de-privacidade';
    } else if (currentPath === '/politica-de-cookies') {
      title = 'Política de Cookies | Marsol Materiais de Construção';
      description =
        'Entenda como a Marsol Materiais de Construção utiliza cookies essenciais e gerencie suas preferências de privacidade e navegação.';
      canonical = 'https://www.grupomarsol.com.br/politica-de-cookies';
    }

    document.title = title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', description);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState(null, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleOpenStorePicker = (category?: ProductCategory | null) => {
    setActiveCategoryContext(category || null);
    setStorePickerOpen(true);
  };

  const handleScrollToStores = () => {
    if (currentPath !== '/') {
      handleNavigate('/');
      setTimeout(() => {
        const el = document.getElementById('lojas');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('lojas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    if (currentPath !== '/') {
      handleNavigate('/');
      setTimeout(() => {
        const el = document.getElementById('sobre');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('sobre');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col text-neutral-900 selection:bg-[#E30613] selection:text-white">
      {/* 01. Cabeçalho Institucional */}
      <Header
        onOpenStorePicker={() => handleOpenStorePicker()}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {currentPath === '/politica-de-privacidade' ? (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        ) : currentPath === '/politica-de-cookies' ? (
          <CookiePolicyPage onNavigate={handleNavigate} />
        ) : (
          <>
            {/* 01. Hero */}
            <Hero
              onExploreStores={handleScrollToStores}
              onExploreAbout={handleScrollToAbout}
            />

            {/* 02. Faixa de Credibilidade */}
            <CredibilityStrip />

            {/* 03. Sobre a Marsol */}
            <AboutSection onExploreStores={handleScrollToStores} />

            {/* 04. Produtos e Categorias */}
            <CategoriesSection />

            {/* 04.1 Construção, Reforma e Reparos */}
            <RenovationSection onExploreStores={handleScrollToStores} />

            {/* Nova Faixa Institucional de Transição */}
            <InstitutionalBanner onExploreStores={handleScrollToStores} />

            {/* 05. Marcas Comercializadas */}
            <BrandsSection />

            {/* NOVA SEÇÃO: A Marsol de perto */}
            <VideosSection />

            {/* 06. Nossas Lojas (Prioridade) */}
            <StoresSection />

            {/* 07. Diferenciais */}
            <DifferentialsSection />

            {/* 08. Contato Final */}
            <ContactSection
              onOpenStorePicker={() => handleOpenStorePicker()}
              onExploreStores={handleScrollToStores}
            />
          </>
        )}
      </main>

      {/* 09. Rodapé Institucional com Links de Privacidade e Cookies */}
      <Footer
        onOpenPrivacy={() => handleNavigate('/politica-de-privacidade')}
        onOpenStorePicker={() => handleOpenStorePicker()}
        onNavigate={handleNavigate}
      />

      {/* Modais e Utilitários Interativos */}
      <StorePickerModal
        isOpen={storePickerOpen}
        onClose={() => {
          setStorePickerOpen(false);
          setActiveCategoryContext(null);
        }}
        categoryContext={activeCategoryContext}
      />

      {/* Gerenciador de Consentimento e Banner LGPD */}
      <CookieConsentBanner onNavigate={handleNavigate} />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
