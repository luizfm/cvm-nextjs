import Image, { StaticImageData } from 'next/image'
import { Autoplay, EffectFade, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import styles from './styles.module.scss'

type PhotoCarouselProps = {
  photos: StaticImageData[]
  height?: number
}

export function PhotoCarousel({ photos, height }: PhotoCarouselProps) {
  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      autoplay={{ delay: 5000 }}
      effect={'fade'}
      fadeEffect={{ crossFade: true }}
    >
      {photos.map((photo) => (
        <SwiperSlide key={`${photo.src}`}>
          <div className={styles['image-wrapper']} style={{ height }}>
            <Image
              src={photo}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              className={styles.photo}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
