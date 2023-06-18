"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.module.scss";

import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Swiper as SwiperOptions,
  Thumbs,
} from "swiper";
import PartnersCard, { PartnersCardVariant } from "../partners-card";
import { Partners } from "@/types";

type PartnersCarouselProps = {
  carouselList: Partners[];
};

export default function PartnersCarousel({
  carouselList,
}: PartnersCarouselProps) {
  const [partnersSwiper, setPartnersSwiper] = useState<SwiperOptions | null>(
    null
  );

  return (
    <section className={styles["partners-container"]}>
      <Swiper
        thumbs={{ swiper: partnersSwiper }}
        loop={true}
        spaceBetween={10}
        centeredSlides
        slidesPerView={3}
        autoplay={{ delay: 5000 }}
        watchSlidesProgress={true}
        modules={[Autoplay, Thumbs]}
        className="mySwiper"
      >
        {carouselList.map((partner, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <PartnersCard
                imageUrl={partner.imageUrl}
                partnerName={partner.name}
                variant={
                  isActive
                    ? PartnersCardVariant.Current
                    : PartnersCardVariant.Default
                }
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        onSwiper={setPartnersSwiper}
        modules={[Thumbs]}
        className={styles["main-swiper"]}
      >
        {carouselList.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className={styles["partner-description-container"]}>
              <p>{partner.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
