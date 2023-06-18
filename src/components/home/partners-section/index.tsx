import { PARTNERS } from "@/mocks/partners";

import PartnersCarousel from "./partners-carousel";

import styles from "./styles.module.scss";

function PartnersSection() {
  return (
    <section className={styles["partners-section-container"]}>
      <h2 className={styles["section-title"]}>Conheça nossos parceiros</h2>
      <PartnersCarousel carouselList={PARTNERS} />
    </section>
  );
}

export default PartnersSection;
