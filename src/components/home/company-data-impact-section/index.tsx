import styles from './styles.module.scss'
import DataImpactImage from '@/assets/images/data-impact.png'
import Image from 'next/image'

function CompanyDataImpactSection() {
  return (
    <section className={styles['company-data-impact-section-container']}>
      <h2 className={styles['section-title']}>IMPACTO SOCIAL</h2>
      <div className={styles['image-wrapper']}>
        <Image
          src={DataImpactImage}
          alt=""
          fill
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
          className={styles.image}
        />
      </div>
    </section>
  )
}

export default CompanyDataImpactSection
