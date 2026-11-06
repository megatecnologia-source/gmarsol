import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { STORES_DATA, getStoreWhatsAppLink } from '../data/stores';

// Ícone Oficial do WhatsApp (Logotipo oficial Simple Icons / Meta)
export const OfficialWhatsAppIcon: React.FC<{ className?: string }> = ({
  className = 'w-7 h-7',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.743.95 3.707 1.45 5.71 1.45h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Popover Menu com as 7 Unidades */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-80 rounded-2xl bg-white shadow-2xl border border-neutral-200 overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <OfficialWhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">WhatsApp Marsol</h4>
                <p className="text-[11px] text-white/90">Escolha sua loja mais próxima:</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-md cursor-pointer transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-2 max-h-64 overflow-y-auto space-y-1">
            {STORES_DATA.map((store) => (
              <a
                key={store.id}
                href={getStoreWhatsAppLink(store)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-100 transition-colors group"
              >
                <div className="min-w-0">
                  <p className="text-xs font-bold text-neutral-800 group-hover:text-emerald-700 truncate">
                    {store.name}
                  </p>
                  <p className="text-[10px] text-neutral-500 truncate">
                    {store.neighborhood} · {store.whatsapp || 'Informações da unidade'}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-emerald-600 shrink-0 ml-2" />
              </a>
            ))}
          </div>

          <div className="p-2.5 bg-neutral-50 border-t border-neutral-100 text-center">
            <span className="text-[10px] text-neutral-500 font-medium">
              Atendimento de Seg a Sex (7h30-17h30) e Sáb/Dom (7h30-12h)
            </span>
          </div>
        </div>
      )}

      {/* Botão Flutuante Perfeitamente Circular Oficial do WhatsApp com Pulsação Suave */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center cursor-pointer transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 ${
          isOpen
            ? 'shadow-xl'
            : 'animate-whatsapp-pulse motion-reduce:animate-none shadow-lg hover:shadow-xl'
        }`}
        aria-label="Abrir conversa no WhatsApp das 7 unidades da Marsol"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 text-white" aria-hidden="true" />
        ) : (
          <OfficialWhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        )}
      </button>
    </div>
  );
};

