import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreStores: () => void;
  onExploreAbout: () => void;
}

const HERO_SLIDES = [
  {
    src: '/assets/marsol/Fachada_da_Marsol_Materiais_de_Constru__o_06a28cb8.png',
    alt: 'Fachada da Marsol Materiais de Construção com atendimento e estrutura completa',
  },
  {
    src: '/assets/marsol/Fachada_Marsol_com_Sobreposi__o_Vermelha_e9229bd8.png',
    alt: 'Fachada da Marsol Distribuidora com ampla variedade e frota de atendimento',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreStores, onExploreAbout }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [textParallaxOffset, setTextParallaxOffset] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  // Pré-carregamento das fotografias para transição instantânea e fluida
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Slider automático: alterna a cada 5 segundos com pausa ao trocar de aba ou movimento reduzido
  // Não interfere nem reinicia a animação dos textos
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      return; // Respeita preferência de acessibilidade do usuário
    }

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const startTimer = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 5000);
    };

    const stopTimer = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        stopTimer();
      } else if (!document.hidden) {
        startTimer();
      }
    };

    if (!document.hidden) {
      startTimer();
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Intersection Observer: detecta quando o Hero entra e sai da viewport
  // Quando sai, reseta o estado. Quando retorna (por rolagem ou clique de volta ao topo), reanima!
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setIsHeroVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            setIsHeroVisible(true);
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.05) {
            setIsHeroVisible(false);
          }
        });
      },
      {
        threshold: [0, 0.05, 0.15, 0.3],
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Gatilho imediato para a entrada suave no primeiro carregamento
    const frameId = requestAnimationFrame(() => {
      if (window.scrollY < 200) {
        setIsHeroVisible(true);
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  // Parallax suave de profundidade e garantia de reanimação ao voltar ao topo
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Se o usuário rolou de volta até o topo ou clicou em link de início, garante visibilidade ativa
          if (scrollY < 60) {
            setIsHeroVisible(true);
          }

          // Deslocamento de profundidade durante a passagem pelo Hero
          if (scrollY < 850) {
            setParallaxOffset(Math.round(scrollY * 0.06));
            setTextParallaxOffset(Math.round(scrollY * 0.1));
          } else {
            // Hero completamente fora de visão: reseta flags para reanimação perfeita ao subir
            setIsHeroVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full min-h-[560px] sm:min-h-[640px] lg:h-[700px] xl:h-[720px] flex items-center overflow-hidden bg-neutral-950"
      aria-label="Apresentação institucional Marsol Materiais de Construção"
    >
      {/* Slider automático de imagens de fundo com crossfade suave de ~1s */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-[position:80%_center] sm:bg-[position:70%_center] lg:bg-[position:center_right] xl:bg-center transition-opacity duration-1000 ease-in-out will-change-[opacity,transform] ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
              style={{
                backgroundImage: `url('${slide.src}')`,
                transform: parallaxOffset ? `translate3d(0, ${parallaxOffset}px, 0)` : undefined,
              }}
              role="img"
              aria-label={slide.alt}
            />
          );
        })}
      </div>

      {/* Camada fixa de degradê vermelho institucional estendendo a proteção para o parágrafo e botões */}
      <div
        className="hero-red-gradient-overlay absolute inset-0 pointer-events-none z-[2]"
        aria-hidden="true"
      />

      {/* Sobreposição escura suave exclusiva no mobile para garantir leitura sem sobreposição excessiva */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 via-50% to-transparent sm:hidden pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Content Container: Alinhado à esquerda, com profundidade parallax sutil e animação progressiva repetível */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 sm:pt-24 sm:pb-12 lg:pt-16 lg:pb-0"
        style={{
          transform: textParallaxOffset ? `translate3d(0, ${textParallaxOffset}px, 0)` : undefined,
          willChange: textParallaxOffset ? 'transform' : undefined,
        }}
      >
        <div className="w-full sm:max-w-lg lg:w-[42%] lg:max-w-xl text-left">
          {/* Conjunto Superior: Kicker, Headline H1 e Parágrafo com entrada progressiva reanimável */}
          <div className="mb-7 sm:mb-9">
            {/* 1. Texto superior (Kicker) - Entrada suave de cima para baixo */}
            <p
              className={`hero-elem-kicker text-[11px] sm:text-sm font-semibold tracking-wider uppercase text-white/90 mb-2 sm:mb-4 ${
                isHeroVisible ? 'is-visible' : ''
              }`}
            >
              MATERIAIS DE CONSTRUÇÃO E ACABAMENTO
            </p>

            {/* 2. Título principal H1 com destaque amarelo institucional por linha - Entrada de baixo para cima */}
            <h1
              className={`hero-elem-headline text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-extrabold text-neutral-950 tracking-tight leading-[1.22] sm:leading-[1.18] mb-4 sm:mb-5 ${
                isHeroVisible ? 'is-visible' : ''
              }`}
            >
              <span className="inline-block bg-[#FFCC00] hover:bg-white text-neutral-950 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-md mb-1.5 sm:mb-2 shadow-xs transition-colors duration-300 ease-in-out cursor-default">
                Tudo para
              </span>
              <br />
              <span className="inline-block bg-[#FFCC00] hover:bg-white text-neutral-950 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-md mb-1.5 sm:mb-2 shadow-xs transition-colors duration-300 ease-in-out cursor-default">
                sua obra
              </span>
              <br />
              <span className="inline-block bg-[#FFCC00] hover:bg-white text-neutral-950 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-md shadow-xs transition-colors duration-300 ease-in-out cursor-default">
                em um só lugar
              </span>
            </h1>

            {/* 3. Texto complementar descritivo - Entrada com pequeno atraso de baixo para cima */}
            <p
              className={`hero-elem-paragraph text-sm sm:text-base lg:text-[1.125rem] text-white font-normal leading-relaxed max-w-lg ${
                isHeroVisible ? 'is-visible' : ''
              }`}
            >
              Qualidade, variedade e atendimento próximo nas nossas 7 unidades em São Luís. Do alicerce ao acabamento, conte com a Marsol.
            </p>
          </div>

          {/* 4. Botões de ação da Hero: Microinterações refinadas - Aparecem por último com fade e leve elevação */}
          <div
            className={`hero-elem-buttons flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto ${
              isHeroVisible ? 'is-visible' : ''
            }`}
          >
            {/* Botão principal com fundo branco, texto e ícone pretos */}
            <a
              href="#lojas"
              onClick={(e) => {
                e.preventDefault();
                onExploreStores();
              }}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[46px] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-neutral-900 bg-white hover:bg-neutral-100 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-center whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-neutral-900 shrink-0 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
              <span>Encontre a unidade mais próxima</span>
            </a>

            {/* Botão secundário com fundo branco, texto e ícone pretos */}
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                onExploreAbout();
              }}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[46px] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-neutral-900 bg-white hover:bg-neutral-100 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-center whitespace-nowrap"
            >
              <span>Conheça a Marsol</span>
              <ArrowRight className="w-4 h-4 text-neutral-800 shrink-0 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

