import Image, { StaticImageData } from 'next/image'
import styles from './styles.module.scss'

type CompanyDataCardProps = {
  image: StaticImageData | string
  text: string
}

function CompanyDataCard({ image, text }: CompanyDataCardProps) {
  return (
    <div className={styles['image-wrapper']}>
      <Image
        src={image}
        alt=""
        fill
        quality={100}
        className={styles.photo}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={styles['data-text-wrapper']}>
        <p className={styles['data-text']}>{text}</p>
      </div>
    </div>
  )
}

export default CompanyDataCard
