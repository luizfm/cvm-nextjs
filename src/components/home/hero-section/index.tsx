"use client";

import { PhotoCarousel } from "../../photo-carousel";

import styles from "./styles.module.scss";
import { photos } from "@/constants/photos";

export default function HeroSection() {
  const photosList = photos.slice(35, 45);

  return (
    <section className={styles["hero-container"]}>
      <PhotoCarousel photos={photosList} />
    </section>
  );
}
