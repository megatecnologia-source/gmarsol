import React from 'react';
import { BRANDS_DATA } from '../data/brands';
import { ShieldCheck } from 'lucide-react';

export const BrandsSection: React.FC = () => {
  return (
    <section id="marcas" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-init text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Trabalhamos com marcas de referência no mercado
          </h2>
          <p className="text-base text-neutral-600 font-normal leading-relaxed">
            Parcerias com fabricantes consagrados no cenário nacional para assegurar durabilidade, conformidade técnica e acabamento de alto nível para sua obra.
          </p>
        </div>

        {/* Brands Grid: Sem moldura e com logotipos ampliados para máximo impacto */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
          {BRANDS_DATA.map((brand, idx) => {
            const delays = ['delay-75', 'delay-100', 'delay-150', 'delay-200', 'delay-250', 'delay-300'];
            return (
              <div
                key={idx}
                className={`reveal-init ${delays[idx % delays.length]} w-full h-20 sm:h-24 lg:h-28 flex items-center justify-center p-2 group transition-all duration-300 hover:scale-108 cursor-default`}
              >
                <img
                  src={brand.logo}
                  alt={`Logotipo da marca ${brand.name}`}
                  className="max-h-16 sm:max-h-20 lg:max-h-24 max-w-[160px] sm:max-w-[190px] lg:max-w-[210px] w-auto h-auto object-contain rounded-md drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Notice of good faith compliance */}
        <div className="reveal-init delay-200 mt-12 flex items-center justify-center gap-2 text-xs text-neutral-500 font-medium text-center">
          <ShieldCheck className="w-4 h-4 text-[#FFB800] shrink-0" />
          <span>
            Marcas comercializadas conforme disponibilidade de estoque em cada unidade do grupo.
          </span>
        </div>
      </div>
    </section>
  );
};
