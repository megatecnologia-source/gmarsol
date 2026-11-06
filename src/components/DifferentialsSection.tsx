import React from 'react';
import { Box, Award, Users, ShoppingBag } from 'lucide-react';
import { DIFFERENTIALS_DATA } from '../data/differentials';

export const DifferentialsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return Box;
      case 'Award':
        return Award;
      case 'Users':
        return Users;
      case 'ShoppingBag':
        return ShoppingBag;
      default:
        return Box;
    }
  };

  return (
    <section id="diferenciais" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rótulo Superior conforme o Briefing */}
        <div className="reveal-init mb-5 sm:mb-6">
          <span className="text-xs sm:text-sm font-bold text-[#E30613] tracking-widest uppercase">
            Nossos Diferenciais
          </span>
        </div>

        {/* Diagramação em Grid: Bloco Vermelho + 4 Cartões de Diferenciais */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {/* Bloco Vermelho Institucional Marsol (Coluna Esquerda no Desktop) */}
          <div className="reveal-init delay-75 col-span-12 lg:col-span-4 bg-[#E30613] rounded-2xl p-7 sm:p-8 lg:p-9 text-white flex flex-col justify-center shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3 [text-wrap:balance]">
              Muito mais do que materiais, soluções para o seu projeto
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
              Qualidade, variedade e um atendimento próximo em todas as nossas unidades.
            </p>
          </div>

          {/* 4 Cartões Diagramados Lado a Lado conforme Wireframe */}
          {DIFFERENTIALS_DATA.map((diff, idx) => {
            const Icon = getIcon(diff.iconName);
            const delays = ['delay-100', 'delay-150', 'delay-200', 'delay-250'];
            return (
              <div
                key={diff.id}
                className={`reveal-init ${delays[idx % delays.length]} col-span-6 md:col-span-3 lg:col-span-2 bg-neutral-50/70 border border-neutral-200/90 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center hover:border-neutral-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default`}
              >
                {/* Ícone Vermelho Centralizado com microinteração */}
                <div className="mb-4 flex items-center justify-center">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#E30613] stroke-[1.8] group-hover:scale-110 transition-transform duration-200" />
                </div>

                {/* Título do Diferencial */}
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug mb-1.5">
                  {diff.title}
                </h3>

                {/* Subtítulo Descritivo */}
                <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                  {diff.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
