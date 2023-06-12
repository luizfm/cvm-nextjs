import { Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type CarouselItem = {
  id: string;
  component: React.ReactNode;
};

type CarouselProps = {
  items: CarouselItem[];
};

export function Carousel({ items }: CarouselProps) {
  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
      effect={"fade"}
      pagination={{ clickable: true }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>{item.component}</SwiperSlide>
      ))}
    </Swiper>
  );
}
