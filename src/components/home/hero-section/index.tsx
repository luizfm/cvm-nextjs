"use client";

import Image from "next/image";
import HeroImageOne from "@/assets/images/hero/hero-1.png";
import HeroImageTwo from "@/assets/images/hero/hero-2.png";
import HeroImageThree from "@/assets/images/hero/hero-3.png";

import styles from "./styles.module.scss";
import { PhotoCarousel } from "@/components/photo-carousel";

const HERO_IMAGES = [HeroImageOne, HeroImageTwo, HeroImageThree]

export default function HeroSection() {
  return (
    <section className={styles["hero-container"]}>
      <div className={styles['carousel-wrapper']}>
      <PhotoCarousel photos={HERO_IMAGES} />
      </div>
    </section>
  );
}
