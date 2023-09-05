import FoundationImage from '@/assets/images/about-us/foundation.jpeg'
import FoundaresImage from '@/assets/images/about-us/foundares.png'
import RetreatImage from '@/assets/images/about-us/retreat.jpeg'
import FirstPlaceImage from '@/assets/images/about-us/first-place.jpeg'
import NewPlaceImage from '@/assets/images/about-us/new-place.jpeg'
import TerapeuthicCommunity from '@/assets/images/about-us/terapeuthic-community.jpeg'
import NewBuildingImage from '@/assets/images/about-us/new-building.jpeg'

enum TimelineVariant {
  LEFT = 'left',
  RIGHT = 'right',
}

export const TIMELINE_OPTIONS = [
  {
    id: '1',
    title: 'CVM',
    description:
      'A CVM – Vinde a Mim as Criancinhas tem desde o início da sua história os princípios de amor, fé e solidariedade.',
    variant: TimelineVariant.RIGHT,
    imageUrl: FoundationImage,
  },
  {
    id: '2',
    title: '1976',
    description:
      'Por dois anos as fundadoras Geny Júlia Feijó e Jandira Jovita da Rosa permaneceram em vigília de oração, buscando respostas através da fé sobre de que forma poderiam auxiliar a sociedade',
    variant: TimelineVariant.LEFT,
    imageUrl: FoundaresImage,
  },
  {
    id: '3',
    title: '1978',
    description:
      'Foi após um retiro em uma comunidade repleta de crianças que Dona Jandira e Dona Geny se viram diante da sua missão: criar um lugar onde crianças, jovens e adolescentes em risco social pudessem se sentir respeitados, protegidos e amados.',
    variant: TimelineVariant.RIGHT,
    imageUrl: RetreatImage,
  },
  {
    id: '4',
    title: '1986',
    description:
      'Em 1986 inaugurou o Acolhimento Institucional Dona Jandira Jovita da Rosa, que funcionou durante 29 anos.',
    variant: TimelineVariant.LEFT,
    imageUrl: FirstPlaceImage,
  },
  {
    id: '5',
    title: '1993',
    description:
      'Depois de 15 anos de muito amor, em 04 de novembro de 1993 aconteceu a solenidade de inauguração do prédio sede com mais de 3.000 M²',
    variant: TimelineVariant.RIGHT,
    imageUrl: NewPlaceImage,
  },
  {
    id: '6',
    title: '1996',
    description:
      'Fundação da comunidade terapêutica dona Geny Júlia Feijó, localizada no município de Biguaçu.',
    variant: TimelineVariant.LEFT,
    imageUrl: TerapeuthicCommunity,
  },
  {
    id: '7',
    title: 'Hoje',
    description:
      'Depois de muito tempo de dedicação e atendimentos à população carente de São José, continuamos firmes e fortes nas realizações dos nossos objetivos e ações sociais, rumo aos 50 anos.',
    variant: TimelineVariant.RIGHT,
    imageUrl: NewBuildingImage,
  },
]
