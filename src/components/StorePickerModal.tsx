import React from 'react';
import { X, MapPin, AlertCircle } from 'lucide-react';
import { STORES_DATA, StoreUnit, getStoreWhatsAppLink } from '../data/stores';
import { ProductCategory } from '../data/categories';
import { WhatsAppOfficialIcon } from './StoresSection';

interface StorePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryContext?: ProductCategory | null;
}

export const StorePickerModal: React.FC<StorePickerModalProps> = ({
  isOpen,
  onClose,
  categoryContext,
}) => {
  if (!isOpen) return null;

  const getWhatsAppLinkWithContext = (store: StoreUnit) => {
    if (!store.whatsappRaw) {
      return getStoreWhatsAppLink(store);
    }
    const message = categoryContext
      ? `Olá! Gostaria de consultar sobre produtos da categoria "${categoryContext.title}" na unidade Marsol ${store.name}.`
      : `Olá! Gostaria de falar com a equipe da unidade Marsol ${store.name} sobre materiais de construção.`;
    return `https://wa.me/${store.whatsappRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200 ease-out">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 hover:rotate-90 active:scale-90 transition-all duration-200"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E30613] text-xs font-bold uppercase tracking-wider mb-2">
            <WhatsAppOfficialIcon className="w-3.5 h-3.5" />
            <span>Atendimento Direto por Unidade</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-tight">
            Escolha a loja Marsol mais perto de você
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Cada unidade possui canal de WhatsApp próprio para cotação e atendimento ágil:
          </p>
        </div>

        {/* Stores List */}
        <div className="overflow-y-auto space-y-3 pr-1 py-1 flex-1">
          {STORES_DATA.map((store) => (
            <div
              key={store.id}
              className="p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/80 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#E30613] transition-colors">
                    {store.name}
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                    {store.neighborhood}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-1 truncate">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">{store.address}</span>
                </div>
                {store.whatsapp && store.isConfirmed && (
                  <p className="text-xs text-neutral-600 font-medium mt-1">
                    WhatsApp: <span className="font-semibold text-neutral-900">{store.whatsapp}</span>
                  </p>
                )}
                {!store.isConfirmed && (
                  <p className="text-[11px] text-amber-700 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-amber-600 shrink-0" />
                    <span>Telefone aguardando validação final da gerência</span>
                  </p>
                )}
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <a
                  href={getWhatsAppLinkWithContext(store)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-all shadow-xs"
                >
                  <WhatsAppOfficialIcon className="w-4 h-4 text-white shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
          <span>Horário: Seg a Sex 07h30-17h30 | Sáb e Dom 07h30-12h</span>
          <button
            onClick={onClose}
            className="font-medium text-neutral-600 hover:text-neutral-900 cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
