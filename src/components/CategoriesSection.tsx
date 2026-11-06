import React from 'react';
import {
  Package,
  Grid,
  Droplet,
  Zap,
  Wrench,
  Paintbrush,
  Bath,
  Lightbulb,
} from 'lucide-react';
import { CATEGORIES_DATA } from '../data/categories';

export const CategoriesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package':
        return Package;
      case 'Grid':
        return Grid;
      case 'Droplet':
        return Droplet;
      case 'Zap':
        return Zap;
      case 'Wrench':
        return Wrench;
      case 'Paintbrush':
        return Paintbrush;
      case 'Bath':
        return Bath;
      case 'Lightbulb':
        return Lightbulb;
      default:
        return Package;
    }
  };

  return (
    <section id="produtos" className="py-16 sm:py-20 lg:py-24 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-init text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Sua obra completa começa aqui. Do básico ao acabamento!
          </h2>
          <p className="text-base text-neutral-600 font-normal leading-relaxed">
            As principais categorias e segmentos comercializados nas 7 unidades Marsol para atender cada etapa do seu projeto.
          </p>
        </div>

        {/* Yellow Cards Grid: Clean static institutional presentation with subtle hover lift and staggered entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((category, idx) => {
            const IconComponent = getIcon(category.iconName);
            const delays = ['delay-75', 'delay-100', 'delay-150', 'delay-200', 'delay-250', 'delay-300', 'delay-350', 'delay-400'];
            return (
              <div
                key={category.id}
                className={`reveal-init ${delays[idx % delays.length]} group flex flex-col items-center justify-center text-center p-6 sm:p-7 rounded-2xl bg-[#FFCC00] border border-amber-300/80 shadow-xs text-neutral-900 min-h-[195px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default`}
              >
                <div className="w-14 h-14 rounded-xl bg-neutral-900/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-7 h-7 text-neutral-900 stroke-[1.75]" aria-hidden="true" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1.5 leading-snug">
                  {category.title}
                </h3>

                <p className="text-xs text-neutral-800 font-medium leading-relaxed">
                  {category.shortDescription}
                </p>
              </div>
            );
          })}
        </div>

        {/* Note clarifying institutional presentation */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500 font-medium">
            * Apresentação dos segmentos atendidos. Consulte marcas específicas e disponibilidade diretamente com a loja mais próxima.
          </p>
        </div>
      </div>
    </section>
  );
};
