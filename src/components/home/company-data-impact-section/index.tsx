import styles from './styles.module.scss'
import DataImpactImage from '@/assets/images/data-impact.png'
import Image from 'next/image'

function CompanyDataImpactSection() {
  return (
    <section className={styles['company-data-impact-section-container']}>
      <Image src={DataImpactImage} alt="" className={styles.image} />
    </section>
  )
}

export default CompanyDataImpactSection
