import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

const OfficialInstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

interface VideosSectionProps {
  onExploreStores?: () => void;
}

interface VideoItem {
  id: string;
  title: string;
  src: string;
  poster: string;
}

const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'video-ferramentas',
    title: 'Ferramentas e utilidades',
    src: '/assets/marsol/marsolconstrucao_1784057262_3941280189772160979_6361117738_a77c8f63.mp4',
    poster: '/assets/marsol/video_poster_ferramentas.jpg',
  },
  {
    id: 'video-loja',
    title: 'Conheça a loja',
    src: '/assets/marsol/marsolconstrucao_1791378058_4002691429150464876_6361117738_07b0f71f.mp4',
    poster: '/assets/marsol/video_poster_loja.jpg',
  },
  {
    id: 'video-materiais',
    title: 'Materiais para sua obra',
    src: '/assets/marsol/marsolconstrucao_1789999011_3991123261701402225_6361117738_9b6ad7d5.mp4',
    poster: '/assets/marsol/video_poster_materiais.jpg',
  },
];

export const VideosSection: React.FC<VideosSectionProps> = () => {
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const [isMuted, setIsMuted] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
  });
  const [activeMobileDot, setActiveMobileDot] = useState(0);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Monitora scroll do carrossel mobile para atualizar indicador
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / (width * 0.75));
    setActiveMobileDot(Math.min(Math.max(newIndex, 0), VIDEOS_DATA.length - 1));
  };

  const handlePlayToggle = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    // Se já estiver tocando este vídeo, pausa
    if (isPlaying[index]) {
      currentVideo.pause();
      setIsPlaying((prev) => ({ ...prev, [index]: false }));
      return;
    }

    // Pausa qualquer outro vídeo ativo antes de iniciar este
    videoRefs.current.forEach((vid, i) => {
      if (vid && i !== index) {
        vid.pause();
      }
    });

    setIsPlaying({
      0: false,
      1: false,
      2: false,
      [index]: true,
    });

    currentVideo.play().catch((err) => {
      console.warn('Reprodução de vídeo requer interação do usuário:', err);
    });
  };

  const handleMuteToggle = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    const newMuted = !isMuted[index];
    currentVideo.muted = newMuted;
    setIsMuted((prev) => ({ ...prev, [index]: newMuted }));
  };

  const handleVideoEnded = (index: number) => {
    setIsPlaying((prev) => ({ ...prev, [index]: false }));
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      currentVideo.currentTime = 0;
    }
  };

  const scrollToMobileVideo = (index: number) => {
    if (!carouselRef.current) return;
    const children = carouselRef.current.children;
    if (children[index]) {
      (children[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <section
      id="a-marsol-de-perto"
      aria-label="A Marsol de perto - Vídeos das lojas e produtos"
      className="bg-[#191919] text-white pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* PARTE SUPERIOR: Headline Expressiva & Sub-headline Editorial */}
        <div className="reveal-init text-center max-w-4xl lg:max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5">
          {/* Título principal H2 com tipografia forte na cor amarelo da marca (#FFC72C) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-[#FFC72C] tracking-tight leading-[1.14]">
            Tem muito mais esperando por você em uma das nossas lojas Marsol.
          </h2>

          {/* Sub-headline ampla: 2 linhas no desktop, sem isolamento de palavras */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl lg:max-w-4xl mx-auto">
            De materiais para começar sua construção a ferramentas e produtos para os últimos detalhes, conheça um pouco da variedade que você encontra na Marsol.
          </p>
        </div>

        {/* PARTE INFERIOR: Composição dos 3 Vídeos Verticais */}
        <div className="reveal-init delay-150 relative">
          {/* Container Mobile (Carrossel com Snap) & Desktop (Grid 3 Colunas com Deslocamento Vertical) */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-2 md:px-0 pb-4 md:pb-2 scrollbar-none items-center justify-start md:justify-center"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {VIDEOS_DATA.map((video, idx) => {
              const currentlyPlaying = !!isPlaying[idx];
              const currentlyMuted = !!isMuted[idx];
              const isCenter = idx === 1;

              return (
                <div
                  key={video.id}
                  className={`relative shrink-0 snap-center w-[82vw] sm:w-[320px] md:w-full transition-all duration-300 ${
                    isCenter
                      ? 'md:-translate-y-2 md:scale-[1.02] z-20'
                      : 'md:translate-y-2 z-10'
                  }`}
                >
                  {/* Moldura do Vídeo com visual limpo e cantos arredondados */}
                  <div
                    onClick={() => handlePlayToggle(idx)}
                    className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-[0_12px_32px_rgba(0,0,0,0.5)] border border-white/10 cursor-pointer select-none"
                    role="region"
                    aria-label={`Vídeo: ${video.title}`}
                  >
                    {/* Elemento de Vídeo HTML5 */}
                    <video
                      ref={(el) => {
                        videoRefs.current[idx] = el;
                      }}
                      src={video.src}
                      poster={video.poster}
                      preload="none"
                      playsInline
                      muted={currentlyMuted}
                      onEnded={() => handleVideoEnded(idx)}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Overlay Escuro Suave para Contraste do Título */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/25 pointer-events-none transition-opacity duration-300 ${
                        currentlyPlaying ? 'opacity-40 group-hover:opacity-60' : 'opacity-80'
                      }`}
                    />

                    {/* Topo Limpo: Botão de Áudio no canto superior direito (apenas ao reproduzir) */}
                    {currentlyPlaying && (
                      <div className="absolute top-4 right-4 z-20">
                        <button
                          type="button"
                          onClick={(e) => handleMuteToggle(e, idx)}
                          aria-label={currentlyMuted ? 'Ativar som' : 'Desativar som'}
                          className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC72C]"
                        >
                          {currentlyMuted ? (
                            <VolumeX className="w-4 h-4 text-white/80" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-[#FFC72C]" />
                          )}
                        </button>
                      </div>
                    )}

                    {/* Botão de Play / Pause Central */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        currentlyPlaying
                          ? 'opacity-0 group-hover:opacity-100 bg-black/30'
                          : 'opacity-100'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayToggle(idx);
                        }}
                        aria-label={currentlyPlaying ? `Pausar ${video.title}` : `Assistir ${video.title}`}
                        className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#E30613] group-hover:border-[#E30613] group-hover:shadow-[0_0_24px_rgba(227,6,19,0.55)] active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFC72C]"
                      >
                        {currentlyPlaying ? (
                          <Pause className="w-7 h-7 fill-white text-white transition-transform duration-200" />
                        ) : (
                          <Play className="w-7 h-7 fill-white text-white ml-1 transition-transform duration-200" />
                        )}
                      </button>
                    </div>

                    {/* Título Descritivo Exclusivo no Rodapé do Card */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicador de Bolinhas para Navegação no Mobile */}
          <div className="flex md:hidden items-center justify-center gap-2 pt-4">
            {VIDEOS_DATA.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToMobileVideo(i)}
                aria-label={`Ver vídeo ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeMobileDot === i
                    ? 'w-6 bg-[#FFC72C]'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Chamada Estratégica para o Instagram Oficial da Marsol */}
        <div className="reveal-init delay-200 mt-14 sm:mt-16 md:mt-20 text-center max-w-2xl mx-auto flex flex-col items-center">
          {/* 1. Ícone oficial do Instagram em branco */}
          <a
            href="https://www.instagram.com/marsolconstrucao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram oficial da Marsol (@marsolconstrucao)"
            className="inline-flex items-center justify-center text-white hover:text-[#FFC72C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFC72C] rounded-xl p-1 mb-3.5 sm:mb-4 group"
          >
            <OfficialInstagramIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white group-hover:scale-105 transition-transform duration-200" />
          </a>

          {/* 2. Título da chamada */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-2.5 [text-wrap:balance]">
            Acompanhe a Marsol no Instagram
          </h3>

          {/* 3. Texto complementar em cinza-claro */}
          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed mb-2.5 max-w-lg">
            Novidades, produtos e um pouco mais do dia a dia das nossas lojas.
          </p>

          {/* 4. Identificação do perfil em amarelo institucional (clicável) */}
          <a
            href="https://www.instagram.com/marsolconstrucao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-base sm:text-lg font-bold text-[#FFC72C] hover:text-[#ffdb65] hover:underline transition-colors mb-6 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] rounded-lg px-2 py-0.5"
            aria-label="Perfil da Marsol no Instagram: @marsolconstrucao"
          >
            @marsolconstrucao
          </a>

          {/* 5. Botão amarelo institucional com texto grafite escuro */}
          <a
            href="https://www.instagram.com/marsolconstrucao"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-neutral-950 bg-[#FFCC00] hover:bg-[#ffb800] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#FFCC00]/40 cursor-pointer"
            aria-label="Siga a Marsol no Instagram (@marsolconstrucao)"
          >
            <span>Siga a Marsol no Instagram</span>
            <ArrowUpRight
              className="w-4 h-4 text-neutral-950 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
