'use client'

import HeroImageOne from '@/assets/images/hero/hero-1.jpeg'
import HeroImageTwo from '@/assets/images/hero/hero-2.jpeg'
import HeroImageThree from '@/assets/images/hero/hero-3.jpeg'

import styles from './styles.module.scss'
import { PhotoCarousel } from '@/components/photo-carousel'

const HERO_IMAGES = [HeroImageOne, HeroImageTwo, HeroImageThree]

export default function HeroSection() {
  return (
    <section className={styles['hero-container']}>
      <div className={styles['carousel-wrapper']}>
        <div className={styles['image-shadow']}>
          <h1 className={styles['hero-title']}>
            Rumo aos <span className={styles['title-bold']}>50</span> anos!
          </h1>
        </div>
        <PhotoCarousel photos={HERO_IMAGES} />
      </div>
    </section>
  )
}
