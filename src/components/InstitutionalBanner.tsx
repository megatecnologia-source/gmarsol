import React from 'react';
import { MapPin } from 'lucide-react';

interface InstitutionalBannerProps {
  onExploreStores: () => void;
}

export const InstitutionalBanner: React.FC<InstitutionalBannerProps> = ({ onExploreStores }) => {
  return (
    <section
      className="relative w-full min-h-[440px] sm:min-h-[460px] lg:h-[460px] xl:h-[480px] flex items-center overflow-hidden bg-[#7A060E] border-b border-neutral-200"
      aria-label="Faixa Institucional Grupo Marsol"
    >
      {/* 100% Full-width Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-[position:82%_center] sm:bg-[position:70%_center] md:bg-[position:40%_center] lg:bg-[position:left_center]"
        style={{
          backgroundImage: `url('/assets/marsol/banner_construcao_marsol.png')`,
        }}
        role="img"
        aria-label="Profissional da construção civil em obra ao pôr do sol e identidade visual Marsol"
      />

      {/* Content Container: Aligned to the right half in the red diagonal area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-0">
        <div className="reveal-init w-full sm:max-w-lg lg:w-[42%] lg:max-w-xl ml-auto text-left">
          {/* Título Principal da Seção (H2) */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] xl:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.14] mb-4 [text-wrap:balance]">
            Sua obra merece as{' '}
            <span className="text-[#FFC72C] whitespace-nowrap">
              melhores escolhas
            </span>
            .
          </h2>

          {/* Texto Complementar */}
          <p className="text-sm sm:text-base lg:text-[1.125rem] text-white/95 font-normal leading-relaxed mb-6 sm:mb-8 max-w-lg">
            Do primeiro material ao acabamento, conte com a variedade e o atendimento da Marsol para encontrar o que sua obra precisa.
          </p>

          {/* Botão de Ação */}
          <div>
            <a
              href="#lojas"
              onClick={(e) => {
                e.preventDefault();
                onExploreStores();
              }}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#E30613] bg-white hover:bg-neutral-100 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-[#E30613] shrink-0 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
              <span>Encontre uma loja Marsol</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
