import classnames from 'classnames'
import Image, { StaticImageData } from 'next/image'

import styles from './styles.module.scss'

export enum ProjectCardVariant {
  LEFT = 'left',
  RIGHT = 'right',
}

type ProjectCardProps = {
  title: string
  description: string
  imageUrl: StaticImageData | string
  className?: string
  variant?: ProjectCardVariant
}

function ProjectCard({
  description,
  imageUrl,
  title,
  className,
  variant = ProjectCardVariant.LEFT,
}: ProjectCardProps) {
  return (
    <div
      className={classnames(
        styles['project-card-container'],
        styles[variant],
        className,
      )}
    >
      <div className={styles['image-wrapper']}>
        <Image
          src={imageUrl}
          alt=""
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          quality={100}
          className={styles.image}
        />
      </div>
      <dl className={styles['project-card-data']}>
        <dt className={styles['project-card-title']}>
          <i>{title}</i>
        </dt>
        <dd className={styles['project-card-description']}>{description}</dd>
      </dl>
    </div>
  )
}

export default ProjectCard
