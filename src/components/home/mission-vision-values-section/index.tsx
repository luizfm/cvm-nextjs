'use client'

import CompanyValues from './company-values'
import Card from '../../card'
import VisionIcon from '@/assets/icons/vision-icon.png'
import MissionIcon from '@/assets/icons/mission-icon.png'
import ValuesIcon from '@/assets/icons/values-icon.png'

import styles from './styles.module.scss'

const CARDS_ITEMS = [
  {
    title: 'Missão',
    imageUrl: MissionIcon,
    description:
      'Socializar o atendimento de qualidade á população de baixo poder aquisitivo, evangelizando-os nos ensinamentos de Jesus.',
  },
  {
    title: 'Visão',
    imageUrl: VisionIcon,
    description:
      'Ser referência na área social, buscando aprimoramento contínuo e inovando pelas ações',
  },
  {
    title: 'Valores',
    imageUrl: ValuesIcon,
    description: (
      <CompanyValues
        valuesList={[
          'Ética',
          'Transparência',
          'Credibilidade',
          'Competência',
          'Integridade',
          'Seriedade',
          'Respeito às diferenças',
          'Temor a Deus',
        ]}
      />
    ),
  },
]

export function MissionVisionValuesSection() {
  return (
    <section className={styles['mission-vision-values-container']}>
      <h2 className={styles['visually-hidden']}>Mission, Vision, Values</h2>
      <div className={styles['cards-container']}>
        {CARDS_ITEMS.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default MissionVisionValuesSection
