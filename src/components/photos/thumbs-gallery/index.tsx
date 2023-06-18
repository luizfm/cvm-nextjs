"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./styles.module.scss";

import { FreeMode, Navigation, Swiper as SwiperOptions, Thumbs } from "swiper";
import Image, { StaticImageData } from "next/image";

type ThumbsGalleryProps = {
  photosList: StaticImageData[] | string[];
};

export default function ThumbsGallery({ photosList }: ThumbsGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperOptions | null>(null);

  return (
    <section className={styles["thumbs-gallery-container"]}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles["main-swiper"]}
      >
        {photosList.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className={styles["image-wrapper"]}>
              <Image
                src={photo}
                fill
                quality={100}
                alt=""
                className={styles["image"]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles["secondary-swiper"]}
      >
        {photosList.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className={styles["small-image-wrapper"]}>
              <Image
                src={photo}
                fill
                quality={100}
                alt=""
                className={styles["image"]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
