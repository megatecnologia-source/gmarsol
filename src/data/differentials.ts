export interface DifferentialItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: 'variedade',
    title: 'Variedade de produtos',
    subtitle: 'em todas as etapas da sua obra',
    description: 'Do alicerce ao acabamento, tudo para o seu projeto.',
    iconName: 'Box'
  },
  {
    id: 'marcas',
    title: 'Grandes marcas do mercado',
    subtitle: 'com qualidade e confiança',
    description: 'Trabalhamos com marcas consolidadas e reconhecidas.',
    iconName: 'Award'
  },
  {
    id: 'atendimento',
    title: 'Atendimento especializado',
    subtitle: 'em todas as unidades',
    description: 'Profissionais capacitados para orientar sua compra.',
    iconName: 'Users'
  },
  {
    id: 'facilidade',
    title: 'Facilidade na sua compra',
    subtitle: 'em um só lugar',
    description: 'Praticidade com 7 lojas e canal ágil de WhatsApp.',
    iconName: 'ShoppingBag'
  }
];
