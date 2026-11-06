import React from 'react';
import { MapPin, Layers, Award, Users } from 'lucide-react';

export const CredibilityStrip: React.FC = () => {
  const credibilityItems = [
    {
      icon: MapPin,
      title: '7 unidades',
      subtitle: 'em São Luís e região',
    },
    {
      icon: Layers,
      title: 'Variedade de produtos',
      subtitle: 'para a sua obra',
    },
    {
      icon: Award,
      title: 'Grandes marcas',
      subtitle: 'do mercado da construção',
    },
    {
      icon: Users,
      title: 'Atendimento dedicado',
      subtitle: 'em todas as lojas',
    },
  ];

  return (
    <section className="bg-white border-b border-neutral-200 py-6 sm:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {credibilityItems.map((item, index) => {
            const Icon = item.icon;
            const delayClasses = ['delay-75', 'delay-150', 'delay-225', 'delay-300'];
            return (
              <div
                key={index}
                className={`reveal-init ${delayClasses[index] || ''} group flex items-center gap-3.5 sm:gap-4 p-2 sm:p-3 rounded-xl transition-all duration-200 hover:bg-neutral-50/90 hover:-translate-y-0.5 cursor-default`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#E30613] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-105">
                  <Icon className="w-6 h-6 text-[#FFB800] transition-transform duration-200" aria-hidden="true" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-500 font-medium truncate">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
