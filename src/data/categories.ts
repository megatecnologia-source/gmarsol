export interface ProductCategory {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  sampleItems: string[];
}

export const CATEGORIES_DATA: ProductCategory[] = [
  {
    id: 'cimento-argamassas',
    title: 'Cimento e Argamassas',
    shortDescription: 'Do alicerce ao reboco para sua estrutura',
    iconName: 'Package',
    sampleItems: [
      'Cimento todas as classes',
      'Argamassas AC-I, AC-II e AC-III',
      'Rejuntes diversos',
      'Impermeabilizantes de fundação',
      'Cal hidratada e aditivos'
    ]
  },
  {
    id: 'pisos-revestimentos',
    title: 'Pisos e Revestimentos',
    shortDescription: 'Acabamentos com beleza e resistência',
    iconName: 'Grid',
    sampleItems: [
      'Pisos cerâmicos internos e externos',
      'Porcelanatos polidos e acetinados',
      'Revestimentos de parede decorativos',
      'Rodapés e faixas',
      'Espaçadores e niveladores'
    ]
  },
  {
    id: 'hidraulica',
    title: 'Hidráulica',
    shortDescription: 'Tubos, conexões e registros seguros',
    iconName: 'Droplet',
    sampleItems: [
      'Tubos e conexões para água fria e quente',
      'Tubulações de esgoto e drenagem',
      'Registros de pressão e gaveta',
      'Caixas d’água e reservatórios',
      'Válvulas, sifões e ralos'
    ]
  },
  {
    id: 'eletrica',
    title: 'Elétrica',
    shortDescription: 'Cabos, disjuntores e distribuição confiável',
    iconName: 'Zap',
    sampleItems: [
      'Fios e cabos elétricos normatizados',
      'Disjuntores e quadros de distribuição',
      'Interruptores e tomadas',
      'Eletrodutos, conduítes e caixas',
      'Fitas isolantes e conectores'
    ]
  },
  {
    id: 'ferramentas-ferragens',
    title: 'Ferramentas e Ferragens',
    shortDescription: 'Equipamentos manuais e elétricos para obra',
    iconName: 'Wrench',
    sampleItems: [
      'Desempenadeiras e colheres de pedreiro',
      'Martelos, marretas e serras',
      'Ferramentas elétricas (furadeiras, lixadeiras)',
      'Fechaduras, dobradiças e trincos',
      'Parafusos, pregos e buchas'
    ]
  },
  {
    id: 'tintas-pintura',
    title: 'Tintas e Pintura',
    shortDescription: 'Cores, seladores e proteção para paredes',
    iconName: 'Paintbrush',
    sampleItems: [
      'Tintas acrílicas foscas, acetinadas e semibrilho',
      'Seladores e fundos preparadores',
      'Massas corridas e acrílicas',
      'Esmaltes sintéticos e vernizes',
      'Rolos, trinchas e bandejas'
    ]
  },
  {
    id: 'banheiro-cozinha',
    title: 'Banheiro e Cozinha',
    shortDescription: 'Louças, torneiras e metais sanitários',
    iconName: 'Bath',
    sampleItems: [
      'Bacias sanitárias e caixas acopladas',
      'Cubas de apoio e sobrepor',
      'Torneiras para lavatório e pia',
      'Chuveiros elétricos e duchas',
      'Acessórios e porta-toalhas'
    ]
  },
  {
    id: 'utilidades-acessorios',
    title: 'Utilidades e Iluminação',
    shortDescription: 'Luminárias LED e itens práticos para o dia a dia',
    iconName: 'Lightbulb',
    sampleItems: [
      'Lâmpadas e painéis LED de embutir/sobrepor',
      'Refletores externos',
      'Extensões e filtros de linha',
      'Escadas de alumínio',
      'Equipamentos de proteção individual (EPIs)'
    ]
  }
];
