import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenStorePicker: () => void;
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenStorePicker, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', isPrimary: true },
    { label: 'Sobre', href: '#sobre', isPrimary: false },
    { label: 'Produtos', href: '#produtos', isPrimary: false },
    { label: 'Marcas', href: '#marcas', isPrimary: false },
    { label: 'Lojas', href: '#lojas', isPrimary: false },
    { label: 'Contato', href: '#contato', isPrimary: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (window.location.pathname !== '/' && onNavigate) {
      onNavigate('/');
      setTimeout(() => {
        if (href === '#inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
      return;
    }

    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-white ${
        isScrolled
          ? 'shadow-md border-b border-neutral-200/90 py-3.5'
          : 'border-b border-neutral-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8">
          {/* Brand Zone: Official Marsol Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg"
            aria-label="Grupo Marsol - Página Inicial"
          >
            <img
              src="/assets/marsol/marsol_logo_official.png"
              alt="Grupo Marsol - Materiais de Construção"
              className="h-11 sm:h-12 md:h-13 w-auto object-contain"
            />
          </a>

          {/* Nav Links (Desktop): Bold items with subtle animated underline indicator */}
          <nav
            className="hidden lg:flex items-center gap-7 sm:gap-8 text-sm"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative whitespace-nowrap font-bold transition-colors py-1 ${
                  link.isPrimary
                    ? 'text-[#E30613]'
                    : 'text-neutral-900 hover:text-[#E30613]'
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#E30613] rounded-full transition-all duration-200 ease-out ${
                    link.isPrimary ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          {/* Primary Action (Desktop): Encontre uma unidade with subtle lift & icon motion */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenStorePicker}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E30613] hover:bg-[#C50510] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 whitespace-nowrap cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-white shrink-0 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
              <span>Encontre uma unidade</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenStorePicker}
              className="p-2 rounded-full text-white bg-[#E30613] hover:bg-[#C50510] active:scale-95 transition-transform duration-150 sm:hidden shadow-sm"
              aria-label="Localizar loja"
            >
              <MapPin className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-800 hover:text-neutral-900 hover:bg-neutral-100 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 transition-transform duration-200 rotate-0" /> : <Menu className="w-6 h-6 transition-transform duration-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with smooth slide-in and fade */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[69px] sm:top-[73px] bg-white border-b border-neutral-200 shadow-xl animate-in slide-in-from-top-2 fade-in duration-200 ease-out">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-md text-base font-bold transition-all duration-150 active:scale-[0.99] ${
                  link.isPrimary
                    ? 'text-[#E30613] bg-red-50/60'
                    : 'text-neutral-900 hover:bg-neutral-100 hover:text-[#E30613]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStorePicker();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-bold text-white bg-[#E30613] hover:bg-[#C50510] active:scale-[0.98] transition-all duration-150 cursor-pointer shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Encontre uma unidade</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
