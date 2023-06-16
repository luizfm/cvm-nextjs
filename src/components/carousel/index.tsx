"use client";

import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export type CarouselItem = {
  id: string;
  component: React.ReactNode;
};

type CarouselProps = React.RefAttributes<SwiperRef> &
  SwiperProps & {
    items: CarouselItem[];
  };

export function Carousel({ items, ...sliderProps }: CarouselProps) {
  return (
    <Swiper
      navigation
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      {...sliderProps}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>{item.component}</SwiperSlide>
      ))}
    </Swiper>
  );
}
