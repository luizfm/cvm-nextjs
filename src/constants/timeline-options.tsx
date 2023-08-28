import FoundationImage from '@/assets/images/about-us/foundation.jpeg'
import FoundaresImage from '@/assets/images/about-us/foundares.png'
import RetreatImage from '@/assets/images/about-us/retreat.jpeg'

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
      'A instituição funda o Lar Jandira Jovita da Rosa, para atender crianças de 0 a 18 anos.',
    variant: TimelineVariant.LEFT,
    imageUrl: '',
  },
  {
    id: '5',
    title: '1996',
    description:
      'É aberta a Comunidade Terapêutica Dona Geny Julia Feijó que atende crianças e adolescentes.',
    variant: TimelineVariant.RIGHT,
    imageUrl: '',
  },
  {
    id: '6',
    title: '2007',
    description: 'A Comunidade Terapêutica passa a atender adultos também.',
    variant: TimelineVariant.LEFT,
    imageUrl: '',
  },
  {
    id: '7',
    title: 'Hoje',
    description:
      'Continuamos firmes e fortes nas realizações dos nossos objetivos e ações sociais, rumo aos 50 anos.',
    variant: TimelineVariant.RIGHT,
    imageUrl: '',
  },
]
