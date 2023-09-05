'use client'

import classnames from 'classnames'

import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'

export enum TimelineVariant {
  LEFT = 'left',
  RIGHT = 'right',
}

type TimelineCardProps = {
  title: string
  description: string
  variant?: TimelineVariant
  className?: string
  imageUrl: string | StaticImageData
  hasBeforeLine?: boolean
  hasAfterLine?: boolean
}

function TimelineCard({
  description,

  title,
  variant = TimelineVariant.RIGHT,
  imageUrl,
  hasBeforeLine,
  hasAfterLine,
  className,
}: TimelineCardProps) {
  return (
    <div
      className={classnames(
        styles['timeline-card-container'],
        styles[variant],
        className,
      )}
    >
      <header className={styles['timeline-card-header']}>
        <p className={styles['timeline-card-title']}>{title}</p>
        <p className={styles['timeline-card-description']}>{description}</p>
      </header>
      <div
        className={classnames(styles.divider, {
          [styles['before-line']]: hasBeforeLine,
          [styles['after-line']]: hasAfterLine,
        })}
      >
        <div className={styles['timeline-bullet']} />
      </div>
      <Image
        src={imageUrl}
        alt=""
        height={300}
        width={300}
        className={styles['timeline-image']}
      />
    </div>
  )
}

export default TimelineCard
