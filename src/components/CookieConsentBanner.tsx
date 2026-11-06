import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Settings, Check, X, Info } from 'lucide-react';
import {
  getStoredConsent,
  saveConsent,
  acceptAllCookies,
  rejectOptionalCookies,
  openCookiePreferencesModal,
  OPEN_MODAL_EVENT,
  CookiePreferences,
  DEFAULT_PREFERENCES,
} from '../utils/cookieConsent';

interface CookieConsentBannerProps {
  onNavigate: (path: string) => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onNavigate }) => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // Pequeno atraso para entrada suave na primeira visita
      const timer = setTimeout(() => setShowBanner(true), 600);
      return () => clearTimeout(timer);
    } else {
      setPreferences(stored);
    }
  }, []);

  // Escuta evento global para reabrir modal a partir do rodapé ou da página de cookies
  useEffect(() => {
    const handleOpenModal = () => {
      const stored = getStoredConsent();
      if (stored) {
        setPreferences(stored);
      }
      setShowModal(true);
    };

    window.addEventListener(OPEN_MODAL_EVENT, handleOpenModal);
    return () => window.removeEventListener(OPEN_MODAL_EVENT, handleOpenModal);
  }, []);

  const handleAcceptAll = () => {
    const saved = acceptAllCookies();
    setPreferences(saved);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectOptional = () => {
    const saved = rejectOptionalCookies();
    setPreferences(saved);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSaveCustom = () => {
    const saved = saveConsent(
      {
        analytics: preferences.analytics,
        marketing: preferences.marketing,
      },
      'custom'
    );
    setPreferences(saved);
    setShowBanner(false);
    setShowModal(false);
  };

  const handlePolicyLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <>
      {/* 1. BANNER INFERIOR DE CONSENTIMENTO */}
      {showBanner && !showModal && (
        <aside
          role="region"
          aria-label="Aviso de Privacidade e Consentimento de Cookies"
          className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 md:p-6 bg-white/95 backdrop-blur-md border-t border-neutral-300 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] transition-all animate-in slide-in-from-bottom-6 duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6">
            <div className="flex items-start gap-3.5 flex-1">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E30613] flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                <Cookie className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <p className="font-semibold text-neutral-900">
                  Sua privacidade e o uso de cookies na Marsol
                </p>
                <p>
                  Utilizamos cookies estritamente necessários para o funcionamento seguro do nosso site e, com a sua autorização, cookies opcionais de análise e preferências. Você pode aceitar, recusar os opcionais ou personalizar suas escolhas a qualquer momento, de acordo com a LGPD. Saiba mais em nossa{' '}
                  <button
                    onClick={(e) => handlePolicyLinkClick(e, '/politica-de-cookies')}
                    className="font-medium text-[#E30613] hover:underline focus:outline-none focus:ring-1 focus:ring-red-500 rounded cursor-pointer"
                  >
                    Política de Cookies
                  </button>{' '}
                  e na{' '}
                  <button
                    onClick={(e) => handlePolicyLinkClick(e, '/politica-de-privacidade')}
                    className="font-medium text-[#E30613] hover:underline focus:outline-none focus:ring-1 focus:ring-red-500 rounded cursor-pointer"
                  >
                    Política de Privacidade
                  </button>
                  .
                </p>
              </div>
            </div>

            {/* Ações com peso visual equilibrado e transparente */}
            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto shrink-0 justify-end pt-1 sm:pt-0">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-400"
              >
                <Settings className="w-3.5 h-3.5 text-neutral-600" />
                <span>Personalizar</span>
              </button>

              <button
                type="button"
                onClick={handleRejectOptional}
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-400"
              >
                Recusar opcionais
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#E30613] hover:bg-[#C50510] shadow-sm transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-1"
              >
                Aceitar opcionais
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. MODAL DE PERSONALIZAÇÃO DE PREFERÊNCIAS */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative my-8 max-h-[90vh] flex flex-col">
            {/* Cabeçalho do Modal */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E30613] flex items-center justify-center shrink-0 border border-red-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 id="cookie-modal-title" className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
                    Central de Preferências de Privacidade
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Gerencie seu consentimento e a utilização de cookies no site da Marsol
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Fechar painel de cookies"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo rolável com as categorias */}
            <div className="overflow-y-auto py-4 space-y-5 text-neutral-700 pr-1 flex-1">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Em respeito à sua privacidade e à Lei Geral de Proteção de Dados (LGPD), você tem controle sobre as categorias de cookies utilizadas durante sua navegação. Os cookies estritamente necessários não podem ser desativados, pois garantem a segurança e o correto funcionamento do site.
              </p>

              {/* Categoria 1: Necessários */}
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70 space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm sm:text-base text-neutral-900">
                      1. Cookies Estritamente Necessários
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Sempre Ativos
                    </span>
                  </div>
                  <div className="relative inline-flex items-center cursor-not-allowed opacity-80">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      aria-label="Cookies estritamente necessários sempre ativos"
                      className="sr-only"
                    />
                    <div className="w-11 h-6 bg-emerald-600 rounded-full transition-colors flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Essenciais para a navegação básica, segurança do tráfego, direcionamento correto de páginas e salvamento da sua própria escolha de consentimento de privacidade. Não armazenam dados de identificação pessoal para fins comerciais.
                </p>
              </div>

              {/* Categoria 2: Estatísticas e Desempenho */}
              <div className="p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-bold text-sm sm:text-base text-neutral-900 block">
                      2. Desempenho e Estatísticas (Analytics)
                    </span>
                    <span className="text-xs text-neutral-500">
                      Opcional · Desativado por padrão
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:width-5 after:w-5 after:transition-all peer-checked:bg-[#E30613]"></div>
                  </label>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Permitem mensurar o volume de acessos, entender quais seções e unidades da Marsol são mais procuradas e aprimorar a usabilidade do site. As métricas coletadas são de caráter estatístico e agregadas.
                </p>
              </div>

              {/* Categoria 3: Publicidade e Marketing */}
              <div className="p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-bold text-sm sm:text-base text-neutral-900 block">
                      3. Publicidade e Redes Sociais
                    </span>
                    <span className="text-xs text-neutral-500">
                      Opcional · Desativado por padrão
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:width-5 after:w-5 after:transition-all peer-checked:bg-[#E30613]"></div>
                  </label>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Utilizados para medir campanhas institucionais ou integrar conteúdos de redes sociais. A Marsol não comercializa espaços publicitários para terceiros em seu site institucional.
                </p>
              </div>

              {/* Nota sobre direitos e transparência */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  Você pode alterar ou revogar suas preferências a qualquer momento clicando no link <strong>Preferências de Cookies</strong> presente no rodapé do nosso site.
                </p>
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="pt-4 mt-2 border-t border-neutral-200 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleRejectOptional}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-neutral-700 hover:bg-neutral-100 border border-neutral-300 transition-colors cursor-pointer text-center"
              >
                Rejeitar todos os opcionais
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors cursor-pointer text-center"
                >
                  Aceitar todos
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#E30613] hover:bg-[#C50510] shadow-sm transition-colors cursor-pointer text-center whitespace-nowrap"
                >
                  Salvar preferências
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
