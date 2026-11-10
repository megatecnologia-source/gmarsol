export interface StoreUnit {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  address: string;
  neighborhood: string;
  cityState: string;
  cep?: string;
  phoneLandline?: string;
  whatsapp: string;
  whatsappRaw: string; // for wa.me link
  hoursWeekday: string;
  hoursSaturday?: string;  // se diferente de hoursWeekday; undefined = mesmo que hoursWeekday
  hoursSunday?: string;    // undefined = fechado; '' = mesmo que hoursWeekday
  mapsQuery: string;
  isConfirmed: boolean;
  notes?: string;
  image: string; // Referência da fotografia real da Marsol
  lat: number;
  lng: number;
}

export const STORES_DATA: StoreUnit[] = [
  {
    id: 'aracagy',
    name: 'Marsol Araçagy',
    badge: 'Unidade Araçagy',
    tagline: 'Atendimento completo na região do Araçagy',
    address: 'Av. dos Holandeses, 1300',
    neighborhood: 'Araçagy',
    cityState: 'São José de Ribamar - MA',
    cep: 'CEP 65077-357',
    phoneLandline: '(98) 3210-1078',
    whatsapp: '(98) 99902-1768',
    whatsappRaw: '5598999021768',
    hoursWeekday: 'Segunda a sexta, 07h30 às 19h00',
    hoursSaturday: 'Sábado, 07h30 às 18h00',
    hoursSunday: 'Domingo, 08h00 às 13h00',
    mapsQuery: 'Marsol Materiais de Construção Araçagy São Luís MA',
    isConfirmed: true,
    image: '/assets/marsol/Marsol_Constru__o_Ara_agy_5fbb5c51.png',
    lat: -2.4645,
    lng: -44.1843,
  },
  {
    id: 'alphaville',
    name: 'Marsol Alphaville',
    badge: 'Unidade Alphaville',
    tagline: 'Próxima ao Alphaville e região',
    address: 'Av. Conselheiro Hílton Rodrigues, s/n',
    neighborhood: 'Araçagy',
    cityState: 'Paço do Lumiar - MA',
    cep: 'CEP 65130-000',
    phoneLandline: '(98) 98149-4474',
    whatsapp: '(98) 98149-4474',
    whatsappRaw: '5598981494474',
    hoursWeekday: 'Segunda a sexta, 07h30 às 18h00',
    hoursSaturday: 'Sábado, 07h30 às 12h00',
    hoursSunday: 'Domingo, fechado',
    mapsQuery: 'Marsol Alphaville São Luís MA',
    isConfirmed: true,
    image: '/assets/marsol/Filial_Alphaville_da_Marsol_Distribuidora_1795cc7e.png',
    lat: -2.478,
    lng: -44.195,
  },
  {
    id: 'vila-luizao',
    name: 'Marsol Vila Luizão',
    badge: 'Unidade Vila Luizão',
    tagline: 'Ponto tradicional na Avenida Luizão',
    address: 'Av. Luizão, 125',
    neighborhood: 'Turu',
    cityState: 'São Luís - MA',
    cep: 'CEP 65065-545',
    phoneLandline: '(98) 3233-0972',
    whatsapp: '(98) 98121-7171',
    whatsappRaw: '5598981217171',
    hoursWeekday: 'Segunda a sábado, 07h30 às 12h00 e 13h30 às 17h30',
    hoursSunday: 'Domingo, 07h30 às 12h00',
    mapsQuery: 'Marsol Materiais de Construção Av Luizao 125 São Luís MA',
    isConfirmed: true,
    image: '/assets/marsol/Marsol_Materiais_de_Constru__o_VILA_luizao_263da289.png',
    lat: -2.489,
    lng: -44.232,
  },
  {
    id: 'santa-rosa',
    name: 'Marsol Santa Rosa',
    badge: 'Unidade Santa Rosa',
    tagline: 'Tradição e variedade na região Santa Rosa',
    address: 'Avenida Acre',
    neighborhood: 'Jardim Eldorado',
    cityState: 'São Luís - MA',
    cep: 'CEP 65066-620',
    phoneLandline: '(98) 3012-0073',
    whatsapp: '(98) 3012-0073',
    whatsappRaw: '559830120073',
    hoursWeekday: 'Segunda a sábado, 07h30 às 18h00',
    hoursSunday: 'Domingo, 08h00 às 12h00',
    mapsQuery: 'Marsol Santa Rosa São Luís MA',
    isConfirmed: true,
    image: '/assets/marsol/Marsol_Materiais_de_Constru__o_Santa_Rosa.jpg',
    lat: -2.508,
    lng: -44.225,
  },
  {
    id: 'sao-francisco',
    name: 'Marsol São Francisco',
    badge: 'Unidade São Francisco',
    tagline: 'Atendimento na região do São Francisco e bairros vizinhos',
    address: 'Rua Maria Firmina, 5',
    neighborhood: 'São Francisco',
    cityState: 'São Luís - MA',
    cep: 'CEP 65076-060',
    phoneLandline: '(98) 98865-8569',
    whatsapp: '(98) 98865-8569',
    whatsappRaw: '5598988658569',
    hoursWeekday: 'Segunda a sexta, 07h30 às 12h00 e 14h00 às 17h30',
    hoursSaturday: 'Sábado e domingo, 07h30 às 12h00',
    mapsQuery: 'Marsol São Francisco São Luís MA',
    isConfirmed: true,
    image: '/assets/marsol/Marsol_Materiais_de_Constru__o_sao_francisco_dc03abf3.png',
    lat: -2.508,
    lng: -44.298,
  },
  {
    id: 'pindai',
    name: 'Marsol Pindaí',
    badge: 'Unidade Pindaí',
    tagline: 'Atendimento na Estrada Velha de Ribamar / Pindaí',
    address: 'Estrada Velha de Ribamar, nº 30, km 13',
    neighborhood: 'Pindaí',
    cityState: 'São José de Ribamar - MA',
    cep: 'CEP 65110-000',
    phoneLandline: '(98) 99611-5506',
    whatsapp: '(98) 99611-5506',
    whatsappRaw: '5598996115506',
    hoursWeekday: 'Segunda a sexta, 07h30 às 18h00',
    hoursSaturday: 'Sábado, 07h30 às 17h30',
    hoursSunday: 'Domingo, 08h00 às 12h00',
    mapsQuery: 'Marsol Materiais de Construção Pindai São Luís MA',
    isConfirmed: true,
    image: '/assets/marsol/loja_pindai_fachada.jpg',
    lat: -2.545,
    lng: -44.17,
  },
  {
    id: 'maioba',
    name: 'Marsol Maioba',
    badge: 'Unidade Maioba',
    tagline: 'Atendimento completo na região da Maioba',
    address: 'Estrada da Maioba, 202',
    neighborhood: 'Trizidela Maioba',
    cityState: 'Paço do Lumiar - MA',
    cep: 'CEP 65137-000',
    phoneLandline: '(98) 99904-8097',
    whatsapp: '(98) 99904-8097',
    whatsappRaw: '5598999048097',
    hoursWeekday: 'Segunda a sexta, 7h30 às 17h30',
    hoursSaturday: 'Sábado e domingo, 7h30 às 12h',
    mapsQuery: 'Marsol Maioba São Luís MA',
    isConfirmed: true,
    image: '/assets/marsol/Fachada_Marsol_Materiais_de_Constru__o_Maioba_d4864ab2.png',
    lat: -2.555,
    lng: -44.205,
  },
];

// Haversine distance in kilometers
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(1));
}

// Approximate coordinates for common São Luís / Ilha de São Luís neighborhoods & regions
export const SAO_LUIS_NEIGHBORHOOD_COORDS: Record<string, { lat: number; lng: number }> = {
  aracagy: { lat: -2.4645, lng: -44.1843 },
  'aracagi': { lat: -2.4645, lng: -44.1843 },
  alphaville: { lat: -2.478, lng: -44.195 },
  'olho d agua': { lat: -2.482, lng: -44.225 },
  'olho d\'agua': { lat: -2.482, lng: -44.225 },
  calhau: { lat: -2.495, lng: -44.253 },
  renascenca: { lat: -2.502, lng: -44.285 },
  'renascença': { lat: -2.502, lng: -44.285 },
  'sao francisco': { lat: -2.508, lng: -44.298 },
  'são francisco': { lat: -2.508, lng: -44.298 },
  'ponta d areia': { lat: -2.495, lng: -44.31 },
  'ponta do farol': { lat: -2.492, lng: -44.3 },
  turu: { lat: -2.505, lng: -44.225 },
  'santa rosa': { lat: -2.508, lng: -44.225 },
  'vila luizao': { lat: -2.489, lng: -44.232 },
  'vila luizão': { lat: -2.489, lng: -44.232 },
  cohatrac: { lat: -2.529, lng: -44.218 },
  cohafuma: { lat: -2.505, lng: -44.262 },
  vinhais: { lat: -2.512, lng: -44.256 },
  maranhao: { lat: -2.52, lng: -44.25 },
  anil: { lat: -2.536, lng: -44.235 },
  'angelim': { lat: -2.525, lng: -44.248 },
  cohama: { lat: -2.52, lng: -44.252 },
  ipase: { lat: -2.522, lng: -44.27 },
  'maranhao novo': { lat: -2.528, lng: -44.268 },
  bequimao: { lat: -2.531, lng: -44.262 },
  'bequimão': { lat: -2.531, lng: -44.262 },
  pindai: { lat: -2.545, lng: -44.17 },
  'pindaí': { lat: -2.545, lng: -44.17 },
  maiobão: { lat: -2.528, lng: -44.185 },
  maiobao: { lat: -2.528, lng: -44.185 },
  maioba: { lat: -2.555, lng: -44.205 },
  'paco do lumiar': { lat: -2.53, lng: -44.16 },
  'paço do lumiar': { lat: -2.53, lng: -44.16 },
  'sao jose de ribamar': { lat: -2.56, lng: -44.05 },
  'são josé de ribamar': { lat: -2.56, lng: -44.05 },
  raposa: { lat: -2.425, lng: -44.1 },
  centro: { lat: -2.53, lng: -44.3 },
  'joao paulo': { lat: -2.54, lng: -44.27 },
  'joão paulo': { lat: -2.54, lng: -44.27 },
  tirirical: { lat: -2.57, lng: -44.22 },
  maracana: { lat: -2.61, lng: -44.28 },
  'maracanã': { lat: -2.61, lng: -44.28 },
  itapera: { lat: -2.67, lng: -44.32 },
  pedrinhas: { lat: -2.69, lng: -44.3 },
  forquilha: { lat: -2.535, lng: -44.215 },
  'sol e mar': { lat: -2.485, lng: -44.238 },
  habitar: { lat: -2.49, lng: -44.23 },
  chacara: { lat: -2.485, lng: -44.21 },
};

export function getStoreWhatsAppLink(store: StoreUnit): string {
  if (!store.whatsappRaw) {
    return `https://wa.me/5598999021768?text=${encodeURIComponent(
      `Olá! Gostaria de informações sobre a unidade Marsol ${store.name}.`
    )}`;
  }
  const text = encodeURIComponent(
    `Olá! Gostaria de falar com a unidade ${store.name} e tirar dúvidas sobre materiais.`
  );
  return `https://wa.me/${store.whatsappRaw}?text=${text}`;
}

export function getStoreMapsLink(store: StoreUnit): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    store.mapsQuery
  )}`;
}

