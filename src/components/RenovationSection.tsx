import React from 'react';
import { MapPin } from 'lucide-react';

interface RenovationSectionProps {
  onExploreStores: () => void;
}

export const RenovationSection: React.FC<RenovationSectionProps> = ({ onExploreStores }) => {
  return (
    <section
      id="construcao-reforma"
      className="bg-white py-16 sm:py-20 lg:py-24 border-b border-neutral-200"
      aria-label="Construção, Reforma e Reparos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-16">
          {/* Coluna esquerda: Fotografia vertical com revelação suave e hover sutil */}
          <div className="reveal-init w-full lg:w-[45%] shrink-0">
            <div className="group relative rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/assets/marsol/acabamento_fachada_trabalhador.jpg"
                alt="Profissional realizando acabamento na fachada de uma residência em construção"
                className="w-full h-auto max-h-[580px] lg:max-h-[620px] object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

          {/* Coluna direita: Conteúdo textual com revelação progressiva */}
          <div className="reveal-init delay-150 w-full lg:w-[55%] flex flex-col justify-center">
            {/* Título H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Vai <span className="text-[#E30613]">construir, reformar</span> ou fazer aquele reparo em casa?
            </h2>

            {/* Parágrafos */}
            <div className="space-y-4 text-neutral-600 font-normal leading-relaxed text-sm sm:text-base mb-6">
              <p>
                Toda obra começa com uma necessidade. Pode ser a construção da casa dos seus sonhos, a reforma de um ambiente ou até aquele pequeno conserto que você vem adiando.
              </p>
              <p>
                Seja para comprar cimento, trocar o piso, escolher revestimentos, instalar uma caixa-d'água ou encontrar materiais hidráulicos e elétricos, contar com uma loja que oferece variedade faz toda a diferença.
              </p>
              <p>
                Na Marsol Materiais de Construção, você encontra produtos para diferentes etapas da sua obra, do básico ao acabamento. São sete lojas em São Luís e região, com equipes prontas para ajudar você a encontrar o que precisa, seja para uma grande construção ou um simples reparo.
              </p>
            </div>

            {/* Frase final em destaque */}
            <p className="text-base sm:text-lg font-bold text-neutral-900 border-l-4 border-[#E30613] pl-4 py-1 leading-snug mb-8">
              Sua obra é grande ou pequena? Na Marsol, toda necessidade tem importância.
            </p>

            {/* Botão com microinterações refinadas */}
            <div>
              <a
                href="#lojas"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreStores();
                }}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#E30613] hover:bg-[#C50510] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-white shrink-0 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
                <span>Encontre a loja mais próxima</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
