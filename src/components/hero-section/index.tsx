"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import PhotoExampleOne from "@/assets/images/photo-example-1.jpeg";
import PhotoExampleTwo from "@/assets/images/photo-example-2.jpg";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./styles.module.scss";
import { PhotoCarousel } from "../photo-carousel";

const PHOTO_LIST = [PhotoExampleOne, PhotoExampleTwo];

export default function HeroSection() {
  return (
    <section className={styles["hero-container"]}>
      <PhotoCarousel photos={PHOTO_LIST} />
    </section>
  );
}
