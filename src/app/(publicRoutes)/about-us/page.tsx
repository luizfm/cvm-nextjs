import TimelineCard from '@/components/about-us/timeline-card'
import styles from './styles.module.scss'
import { TIMELINE_OPTIONS } from '@/constants'

export const metadata = {
  title: 'Quem somos | CVM',
}

export default function AboutUs() {
  return (
    <div className={styles['about-us-container']}>
      <h1 className={styles['page-title']}>Quem somos</h1>
      <div className={styles['video-wrapper']}>
        <h2 className={styles['video-title']}>Vídeo institucional</h2>
        <iframe
          width="1200"
          height="600"
          src="https://www.youtube.com/embed/xqKy0dM9jAs"
          title="VÍDEO INSTITUCIONAL CRECHE VINDE A MIM AS CRIANCINHAS"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles['institutional-video']}
        />
      </div>
      <div className={styles['page-title-container']}>
        <h2 className={styles['about-us-title']}>Linha do tempo</h2>
        <h2 className={styles['about-us-subtitle']}>Nossa história - CVM</h2>
      </div>
      {TIMELINE_OPTIONS.map((option, index) => (
        <TimelineCard
          key={option.id}
          title={option.title}
          variant={option.variant}
          description={option.description}
          imageUrl={option.imageUrl}
          {...(index !== 0 ? { hasBeforeLine: true } : {})}
          {...(index !== TIMELINE_OPTIONS.length - 1
            ? { hasAfterLine: true }
            : {})}
        />
      ))}
    </div>
  )
}
