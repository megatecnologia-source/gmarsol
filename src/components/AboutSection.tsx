import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onExploreStores: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreStores }) => {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Institutional Text */}
          <div className="reveal-init lg:col-span-6 flex flex-col justify-center items-start">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-5 sm:mb-6 [text-wrap:balance]">
              A Marsol faz parte da rotina de quem{' '}
              <span className="text-[#E30613]">constrói e reforma</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-8">
              <p>
                Com sete unidades estrategicamente posicionadas na Grande São Luís, facilitamos o acesso a materiais de construção essenciais, desde a base estrutural até os acabamentos que valorizam cada ambiente.
              </p>
              <p>
                Trabalhamos para aproximar os melhores fabricantes do seu projeto, oferecendo canais de atendimento direto em cada bairro, facilidade de cotação e uma equipe preparada para orientar sua compra com transparência.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={onExploreStores}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#E30613] hover:bg-[#C50510] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Conhecer nossas 7 unidades</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Column: Logotipo Oficial Marsol - Versão Vertical */}
          <div className="reveal-init delay-150 lg:col-span-6 flex items-center justify-center">
            <div className="group w-full relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-neutral-200/80 flex items-center justify-center p-6 sm:p-10">
              <img
                src="/assets/marsol/marsol_logo_vertical_clean.png"
                alt="Logotipo Oficial Marsol Materiais de Construção - Versão Vertical"
                className="max-h-[88%] w-auto object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
