"use client";

import { PHOTO_LIST } from "@/mocks";
import { PhotoCarousel } from "../photo-carousel";

import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles["hero-container"]}>
      <PhotoCarousel photos={PHOTO_LIST} />
    </section>
  );
}
