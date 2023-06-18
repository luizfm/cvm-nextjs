import Image, { StaticImageData } from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./styles.module.scss";

type PhotoCarouselProps = {
  photos: StaticImageData[];
  height?: number;
};

export function PhotoCarousel({ photos, height }: PhotoCarouselProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
    >
      {photos.map((photo) => (
        <SwiperSlide key={`${photo.src}`}>
          <div className={styles["image-wrapper"]} style={{ height }}>
            <Image
              src={photo}
              alt=""
              fill
              quality={100}
              className={styles["photo"]}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
