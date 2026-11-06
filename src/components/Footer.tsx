import React from 'react';
import { MapPin, Mail, Globe, Shield, Instagram, Facebook, Cookie, Sliders } from 'lucide-react';
import { STORES_DATA } from '../data/stores';
import { openCookiePreferencesModal } from '../utils/cookieConsent';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenStorePicker: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenStorePicker, onNavigate }) => {
  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Marcas', href: '#marcas' },
    { label: 'Nossas Lojas', href: '#lojas' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (window.location.pathname !== '/' && onNavigate) {
      onNavigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer className="bg-[#E30613] text-white pt-16 pb-10 border-t border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/20">
          {/* Col 1: Brand & Institutional */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block max-w-[200px] shadow-sm">
              <img
                src="/assets/marsol/marsol_logo_official.png"
                alt="Grupo Marsol Materiais de Construção"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-white/90 leading-relaxed font-normal">
              Construindo histórias e fornecendo materiais de qualidade para obras residenciais e comerciais em São Luís e região.
            </p>

            {/* Redes Sociais Marsol */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/marsolconstrucao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Marsol (@marsolconstrucao)"
                className="w-9 h-9 rounded-full bg-white text-[#E30613] hover:bg-amber-300 hover:text-neutral-900 hover:-translate-y-0.5 hover:shadow-md active:scale-95 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Grupo Marsol"
                className="w-9 h-9 rounded-full bg-white text-[#E30613] hover:bg-amber-300 hover:text-neutral-900 hover:-translate-y-0.5 hover:shadow-md active:scale-95 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-white/90 space-y-1.5 font-medium">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-300" />
                <span>www.grupomarsol.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-300" />
                <span>contato@grupomarsol.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                <span>São Luís - Maranhão</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="inline-block text-white/90 hover:text-white hover:translate-x-1 transition-all duration-150 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: The 7 Units */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
              Nossas 7 Unidades
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {STORES_DATA.map((store) => (
                <li key={store.id} className="flex items-center justify-between gap-2">
                  <span className="text-white font-medium">{store.name}</span>
                  <span className="text-[11px] text-white/80 bg-black/15 px-2 py-0.5 rounded font-normal">
                    {store.neighborhood}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={onOpenStorePicker}
              className="group mt-4 text-xs font-bold text-amber-300 hover:text-white cursor-pointer inline-flex items-center gap-1 transition-colors"
            >
              <span>Falar com uma loja via WhatsApp</span>
              <span className="transition-transform duration-150 group-hover:translate-x-1">&rarr;</span>
            </button>
          </div>

          {/* Col 4: Institutional & Legal Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
              Privacidade e Legal
            </h4>
            <p className="text-xs text-white/90 leading-relaxed font-normal">
              Atendimento presencial em 7 pontos de São Luís. Cotações e consultas diretas em total conformidade com a LGPD.
            </p>

            <ul className="space-y-2 pt-1 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handlePageNavigation('/politica-de-privacidade')}
                  className="inline-flex items-center gap-2 text-white hover:text-amber-200 underline font-medium transition-colors cursor-pointer text-left"
                >
                  <Shield className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Política de Privacidade</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handlePageNavigation('/politica-de-cookies')}
                  className="inline-flex items-center gap-2 text-white hover:text-amber-200 underline font-medium transition-colors cursor-pointer text-left"
                >
                  <Cookie className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Política de Cookies</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openCookiePreferencesModal()}
                  className="inline-flex items-center gap-2 text-amber-300 hover:text-white underline font-semibold transition-colors cursor-pointer text-left"
                >
                  <Sliders className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Preferências de Cookies</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Links and Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
            <p>© 2026 Grupo Marsol. Todos os direitos reservados.</p>
            <span className="hidden sm:inline text-white/40">|</span>
            <button
              onClick={() => handlePageNavigation('/politica-de-privacidade')}
              className="hover:text-amber-200 underline font-normal cursor-pointer"
            >
              Privacidade
            </button>
            <span className="text-white/40">·</span>
            <button
              onClick={() => handlePageNavigation('/politica-de-cookies')}
              className="hover:text-amber-200 underline font-normal cursor-pointer"
            >
              Cookies
            </button>
            <span className="text-white/40">·</span>
            <button
              onClick={() => openCookiePreferencesModal()}
              className="hover:text-amber-200 underline font-normal cursor-pointer"
            >
              Preferências
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span>Site desenvolvido por</span>
            <a
              href="https://www.bydomarketing.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-amber-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              Bydo Marketing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
