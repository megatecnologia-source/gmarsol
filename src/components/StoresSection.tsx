import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  Navigation,
  Search,
  RotateCcw,
  Sparkles,
  Loader2,
} from 'lucide-react';
import {
  STORES_DATA,
  StoreUnit,
  getStoreWhatsAppLink,
  getStoreMapsLink,
  calculateDistanceKm,
  SAO_LUIS_NEIGHBORHOOD_COORDS,
} from '../data/stores';

// Official WhatsApp brand SVG mark (speech bubble with phone handset inside)
export const WhatsAppOfficialIcon: React.FC<{ className?: string }> = ({
  className = 'w-4 h-4',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.81 8.1 19.14L7.81 18.98L4.69 19.8L5.52 16.76L5.34 16.47C4.61 15.31 4.22 13.97 4.22 11.91C4.22 7.37 7.92 3.67 12.04 3.67M9.03 7.55C8.84 7.55 8.53 7.62 8.27 7.9C8.01 8.19 7.28 8.87 7.28 10.27C7.28 11.66 8.3 13 8.44 13.19C8.58 13.38 10.42 16.22 13.25 17.44C13.92 17.73 14.45 17.91 14.86 18.04C15.53 18.25 16.14 18.22 16.63 18.15C17.17 18.07 18.3 17.47 18.54 16.8C18.77 16.12 18.77 15.54 18.7 15.42C18.63 15.3 18.45 15.23 18.18 15.09C17.92 14.96 16.61 14.31 16.36 14.22C16.12 14.13 15.95 14.09 15.77 14.36C15.6 14.64 15.1 15.23 14.95 15.4C14.8 15.57 14.66 15.59 14.39 15.46C14.13 15.32 13.28 15.04 12.27 14.14C11.48 13.44 10.95 12.57 10.8 12.31C10.64 12.05 10.78 11.91 10.91 11.78C11.03 11.66 11.18 11.47 11.31 11.32C11.45 11.17 11.5 11.06 11.59 10.88C11.68 10.69 11.63 10.53 11.56 10.4C11.5 10.26 10.97 8.97 10.75 8.44C10.54 7.93 10.32 8 10.16 7.99C10.01 7.99 9.83 7.98 9.64 7.98C9.46 7.98 9.17 8.05 8.92 8.32L9.03 7.55Z" />
  </svg>
);

interface CepResult {
  cep: string;
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  userCoords: { lat: number; lng: number };
  closestStoreId: string;
  closestDistanceKm: number;
  distances: Record<string, number>;
}

export const StoresSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // CEP Filter State
  const [cepInput, setCepInput] = useState<string>('');
  const [isLoadingCep, setIsLoadingCep] = useState<boolean>(false);
  const [cepError, setCepError] = useState<string | null>(null);
  const [cepResult, setCepResult] = useState<CepResult | null>(null);

  const formatCep = (value: string): string => {
    const raw = value.replace(/\D/g, '').slice(0, 8);
    if (raw.length > 5) {
      return `${raw.slice(0, 5)}-${raw.slice(5)}`;
    }
    return raw;
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCepInput(formatCep(e.target.value));
    if (cepError) setCepError(null);
  };

  // Resolve coordinates based on neighborhood name or city
  const resolveLocationCoordinates = (
    bairro: string,
    cidade: string
  ): { lat: number; lng: number } => {
    const cleanBairro = (bairro || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();

    // Check exact neighborhood matches in São Luís area
    for (const [key, coords] of Object.entries(SAO_LUIS_NEIGHBORHOOD_COORDS)) {
      const cleanKey = key
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
      if (cleanBairro.includes(cleanKey) || cleanKey.includes(cleanBairro)) {
        return coords;
      }
    }

    // Common Greater São Luís cities
    const cleanCidade = (cidade || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    if (cleanCidade.includes('paco do lumiar')) {
      return { lat: -2.53, lng: -44.16 };
    }
    if (cleanCidade.includes('sao jose de ribamar')) {
      return { lat: -2.56, lng: -44.05 };
    }
    if (cleanCidade.includes('raposa')) {
      return { lat: -2.425, lng: -44.1 };
    }

    // Default central reference point for São Luís island
    return { lat: -2.51, lng: -44.23 };
  };

  const handleSearchCep = async (cepToSearch?: string) => {
    const query = (cepToSearch || cepInput).replace(/\D/g, '');
    if (query.length !== 8) {
      setCepError('Por favor, informe um CEP válido com 8 dígitos.');
      return;
    }

    setIsLoadingCep(true);
    setCepError(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${query}/json/`);
      if (!response.ok) {
        throw new Error('Falha ao consultar CEP.');
      }
      const data = await response.json();

      if (data.erro) {
        setCepError('CEP não encontrado. Verifique os números digitados.');
        setIsLoadingCep(false);
        return;
      }

      const coords = resolveLocationCoordinates(data.bairro || '', data.localidade || '');

      // Calculate distance to each of the 7 stores
      const distances: Record<string, number> = {};
      let minDistance = Infinity;
      let closestStoreId = STORES_DATA[0].id;

      STORES_DATA.forEach((store) => {
        const dist = calculateDistanceKm(coords.lat, coords.lng, store.lat, store.lng);
        distances[store.id] = dist;
        if (dist < minDistance) {
          minDistance = dist;
          closestStoreId = store.id;
        }
      });

      setCepResult({
        cep: formatCep(query),
        logradouro: data.logradouro,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf,
        userCoords: coords,
        closestStoreId,
        closestDistanceKm: minDistance,
        distances,
      });

      // Reset individual tab filter so all stores are sorted by distance
      setSelectedFilter('all');
    } catch {
      // Graceful fallback for offline or rate-limiting
      // Derive approximate coords from CEP prefix for Maranhão (65xxx-xxx)
      const prefix = query.slice(0, 5);
      let approxCoords = { lat: -2.51, lng: -44.23 };
      let approxBairro = 'São Luís e Região';

      if (prefix.startsWith('65110') || prefix.startsWith('65130')) {
        approxCoords = { lat: -2.4645, lng: -44.1843 };
        approxBairro = 'Araçagy / Paço do Lumiar';
      } else if (prefix.startsWith('65076') || prefix.startsWith('65075')) {
        approxCoords = { lat: -2.508, lng: -44.298 };
        approxBairro = 'São Francisco / Renascença';
      } else if (prefix.startsWith('65066') || prefix.startsWith('65065')) {
        approxCoords = { lat: -2.508, lng: -44.225 };
        approxBairro = 'Turu / Santa Rosa';
      } else if (prefix.startsWith('65068') || prefix.startsWith('65067')) {
        approxCoords = { lat: -2.489, lng: -44.232 };
        approxBairro = 'Vila Luizão / Olho d\'Água';
      } else if (prefix.startsWith('65137') || prefix.startsWith('65138')) {
        approxCoords = { lat: -2.555, lng: -44.205 };
        approxBairro = 'Maiobão / Maioba';
      }

      const distances: Record<string, number> = {};
      let minDistance = Infinity;
      let closestStoreId = STORES_DATA[0].id;

      STORES_DATA.forEach((store) => {
        const dist = calculateDistanceKm(approxCoords.lat, approxCoords.lng, store.lat, store.lng);
        distances[store.id] = dist;
        if (dist < minDistance) {
          minDistance = dist;
          closestStoreId = store.id;
        }
      });

      setCepResult({
        cep: formatCep(query),
        bairro: approxBairro,
        localidade: 'São Luís',
        uf: 'MA',
        userCoords: approxCoords,
        closestStoreId,
        closestDistanceKm: minDistance,
        distances,
      });
      setSelectedFilter('all');
    } finally {
      setIsLoadingCep(false);
    }
  };

  const handleResetCep = () => {
    setCepInput('');
    setCepResult(null);
    setCepError(null);
    setSelectedFilter('all');
  };

  // Sort stores by proximity if CEP result exists, otherwise maintain order
  const displayStores = [...STORES_DATA]
    .filter((s) => (selectedFilter === 'all' ? true : s.id === selectedFilter))
    .sort((a, b) => {
      if (cepResult) {
        const distA = cepResult.distances[a.id] ?? 999;
        const distB = cepResult.distances[b.id] ?? 999;
        return distA - distB;
      }
      return 0;
    });

  const closestStore = cepResult
    ? STORES_DATA.find((s) => s.id === cepResult.closestStoreId)
    : null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="lojas" className="py-16 sm:py-20 lg:py-24 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight [text-wrap:balance]">
              Encontre a unidade mais próxima de você
            </h2>
            <p className="text-base text-neutral-600 font-normal mt-3">
              São 7 lojas preparadas para atender sua obra com atendimento direto via WhatsApp, telefone ou presencialmente em São Luís e região.
            </p>
          </div>

          {/* Quick link to Google Maps search */}
          <a
            href="https://www.google.com/maps/search/Marsol+Materiais+de+Construcao+Sao+Luis+MA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#E30613] hover:text-[#C50510] transition-colors shrink-0"
          >
            <Navigation className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="hover:underline">Ver todas as lojas no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ======================================================== */}
        {/* FILTRO DE CEP: Descubra qual loja Marsol é mais próxima  */}
        {/* ======================================================== */}
        {/* ======================================================== */}
        {/* FILTRO DE CEP: Descubra qual loja Marsol é mais próxima  */}
        {/* Destaque com o Amarelo Institucional Marsol              */}
        {/* ======================================================== */}
        <div className="reveal-init delay-100 mb-10 p-5 sm:p-6 rounded-2xl bg-[#FFCC00] border border-amber-400/80 shadow-sm transition-all duration-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 text-neutral-950 font-extrabold text-base sm:text-lg mb-1">
                <MapPin className="w-5 h-5 text-[#E30613] shrink-0" />
                <span>Qual é o seu CEP?</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed max-w-xl">
                Digite seu CEP para calcular a distância e descobrir a unidade Marsol mais próxima da sua obra ou residência.
              </p>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchCep();
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto"
            >
              <div className="relative w-full sm:w-56">
                <input
                  type="text"
                  value={cepInput}
                  onChange={handleCepChange}
                  placeholder="Ex: 65110-000"
                  maxLength={9}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300/90 bg-white focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/25 text-neutral-950 text-sm font-semibold tracking-wide placeholder:text-neutral-400 outline-none transition-all shadow-xs"
                  aria-label="Digite seu CEP para encontrar a loja Marsol mais próxima"
                />
              </div>

              <button
                type="submit"
                disabled={isLoadingCep}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#E30613] hover:bg-[#C50510] active:scale-[0.98] hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap disabled:opacity-70"
              >
                {isLoadingCep ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Calculando...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Calcular mais próxima</span>
                  </>
                )}
              </button>

              {cepResult && (
                <button
                  type="button"
                  onClick={handleResetCep}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl font-bold text-xs text-neutral-900 bg-white/80 hover:bg-white hover:text-neutral-950 transition-colors cursor-pointer whitespace-nowrap border border-neutral-900/10 shadow-xs"
                  title="Limpar busca de CEP"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpar</span>
                </button>
              )}
            </form>
          </div>

          {/* Error Message */}
          {cepError && (
            <div className="mt-3.5 p-3 rounded-xl bg-white border border-red-300 text-xs text-[#E30613] font-semibold flex items-center gap-2 shadow-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{cepError}</span>
            </div>
          )}

          {/* Result Banner when CEP is active */}
          {cepResult && closestStore && (
            <div className="mt-4 p-4 rounded-xl bg-white border border-neutral-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E30613] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                      Resultado para CEP {cepResult.cep}
                    </span>
                    {(cepResult.bairro || cepResult.localidade) && (
                      <span className="text-xs text-neutral-600 font-medium">
                        ({[cepResult.bairro, cepResult.localidade, cepResult.uf].filter(Boolean).join(', ')})
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-neutral-900 mt-0.5">
                    A unidade mais próxima de você é{' '}
                    <span className="text-[#E30613]">{closestStore.name}</span>
                    <span className="text-neutral-700 font-normal"> (a aprox. </span>
                    <span className="text-emerald-700 font-bold">{cepResult.closestDistanceKm} km</span>
                    <span className="text-neutral-700 font-normal">)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={getStoreWhatsAppLink(closestStore)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-colors shadow-xs"
                >
                  <WhatsAppOfficialIcon className="w-4 h-4" />
                  <span>Falar com esta loja</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Tab filters (Todas as 7 lojas, Araçagy, Alphaville, etc.) com transição suave */}
        <div className="reveal-init delay-150 flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#E30613] text-white shadow-sm'
                : 'bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 border border-neutral-200'
            }`}
          >
            {cepResult ? 'Todas ordenadas por distância' : 'Todas as 7 lojas'}
          </button>
          {STORES_DATA.map((store) => (
            <button
              key={store.id}
              onClick={() => setSelectedFilter(store.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] cursor-pointer ${
                selectedFilter === store.id
                  ? 'bg-[#E30613] text-white shadow-sm'
                  : 'bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 border border-neutral-200'
              }`}
            >
              {store.name.replace('Marsol ', '')}
              {cepResult && cepResult.distances[store.id] !== undefined && (
                <span className="ml-1.5 opacity-75 text-[11px]">
                  ({cepResult.distances[store.id]} km)
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Stores Grid: 2 Columns on Desktop, 1 Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {displayStores.map((store, idx) => {
            const distance = cepResult?.distances[store.id];
            const isClosest = cepResult?.closestStoreId === store.id;
            const delays = ['delay-75', 'delay-150', 'delay-200', 'delay-250'];

            return (
              <article
                key={store.id}
                className={`reveal-init ${delays[idx % delays.length]} bg-white rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-lg ${
                  isClosest
                    ? 'border-2 border-[#E30613] shadow-lg ring-2 ring-[#E30613]/20 relative'
                    : 'border-neutral-200 shadow-sm'
                }`}
              >
                {/* Badge de Destaque se for a mais próxima pelo CEP */}
                {isClosest && (
                  <div className="bg-[#E30613] text-white px-4 py-1.5 text-xs font-bold flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      UNIDADE MAIS PRÓXIMA DO SEU CEP
                    </span>
                    <span className="bg-white/20 px-2 py-0.5 rounded text-[11px]">
                      ~{distance} km
                    </span>
                  </div>
                )}

                {/* PARTE SUPERIOR: Fotografia horizontal 16:9 com hover zoom refinado */}
                <div className="w-full aspect-[16/9] relative bg-neutral-100 shrink-0 overflow-hidden">
                  <img
                    src={store.image}
                    alt={`Fachada da loja ${store.name}`}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#E30613] text-white shadow-xs">
                      {store.neighborhood}
                    </span>
                    {distance !== undefined && !isClosest && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-neutral-900/90 text-white backdrop-blur-xs shadow-xs">
                        ~{distance} km
                      </span>
                    )}
                  </div>
                </div>

                {/* PARTE INFERIOR: Informações da unidade */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* 1. Nome da unidade */}
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                        {store.name}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium mt-0.5">
                        {store.tagline}
                      </p>
                    </div>

                    {/* 2. Endereço */}
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 mb-3.5">
                      <MapPin className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-medium text-neutral-800">{store.address}</span>
                        <span className="text-neutral-500"> — {store.cityState}</span>
                        <button
                          onClick={() => handleCopy(`${store.name}: ${store.address}, ${store.cityState}`, store.id)}
                          className="ml-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-500 hover:text-neutral-900 active:scale-95 transition-all duration-150 cursor-pointer"
                          title="Copiar endereço completo"
                        >
                          {copiedId === store.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-600 font-bold">Copiado</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copiar</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* 3. Horário de funcionamento */}
                    <div className="flex items-start gap-2.5 text-xs text-neutral-600 mb-4">
                      <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-neutral-800">{store.hoursWeekday}</p>
                        <p className="text-neutral-500">{store.hoursWeekend}</p>
                      </div>
                    </div>

                    {/* 4. Telefone e WhatsApp */}
                    <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs">
                      {store.phoneLandline && (
                        <a
                          href={`tel:${store.phoneLandline.replace(/\D/g, '')}`}
                          className="inline-flex items-center gap-1.5 text-neutral-800 hover:text-[#E30613] font-medium"
                        >
                          <Phone className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{store.phoneLandline}</span>
                        </a>
                      )}
                      {store.whatsapp && store.isConfirmed ? (
                        <div className="inline-flex items-center gap-1.5 text-neutral-700">
                          <span className="text-neutral-400">WhatsApp:</span>
                          <strong className="text-neutral-900 font-bold">{store.whatsapp}</strong>
                        </div>
                      ) : (
                        <span className="text-neutral-400 italic">
                          {store.whatsapp}
                        </span>
                      )}
                    </div>

                    {/* Observação para unidade pendente (Maioba) */}
                    {store.notes && (
                      <div className="mt-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200/70 flex items-start gap-2 text-[11px] text-amber-800">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                        <span>{store.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* 5. Botões de WhatsApp e Como chegar (Alinhados na base) */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 grid grid-cols-2 gap-3">
                    <a
                      href={getStoreWhatsAppLink(store)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20ba59] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-xs hover:shadow-md"
                    >
                      <WhatsAppOfficialIcon className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={getStoreMapsLink(store)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-800 bg-neutral-100 hover:bg-neutral-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 border border-neutral-200"
                    >
                      <MapPin className="w-4 h-4 text-[#E30613] shrink-0 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      <span>Como chegar</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
