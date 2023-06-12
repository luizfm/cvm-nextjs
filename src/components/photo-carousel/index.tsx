import Image, { StaticImageData } from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./styles.module.scss";

type PhotoCarouselProps = {
  photos: StaticImageData[];
};

export function PhotoCarousel({ photos }: PhotoCarouselProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
    >
      {photos.map((photo) => (
        <SwiperSlide key={`${photo.src}`}>
          <div className={styles["image-wrapper"]}>
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
