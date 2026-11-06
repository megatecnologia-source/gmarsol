import React from 'react';

interface ContactSectionProps {
  onExploreStores: () => void;
  onOpenStorePicker?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onExploreStores }) => {
  return (
    <section
      id="contato"
      className="py-20 sm:py-24 lg:py-28 bg-neutral-900 text-white relative overflow-hidden border-t border-neutral-800"
    >
      <div className="reveal-init max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Título H2 com destaque em amarelo institucional */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
          Sua obra começa com{' '}
          <span className="text-[#FFC72C]">boas escolhas</span>.
        </h2>

        {/* Texto de apoio com largura confortável para leitura */}
        <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
          Na Marsol, você encontra variedade de materiais de construção para diferentes etapas da sua obra, com atendimento próximo e uma equipe pronta para ajudar. Encontre os materiais que você precisa e fale diretamente com nossa equipe em uma das nossas sete lojas em São Luís e região.
        </p>

        {/* Único botão principal amarelo direcionando para a seção de lojas */}
        <div>
          <button
            onClick={onExploreStores}
            className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base text-neutral-950 bg-[#FFCC00] hover:bg-[#ffb800] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            Encontre sua loja Marsol
          </button>
        </div>
      </div>
    </section>
  );
};
