import { PHOTO_LIST } from "@/mocks";
import { PhotoCarousel } from "../photo-carousel";

import styles from "./styles.module.scss";
import CompanyDataCard from "./company-data-card";
import { Carousel } from "../carousel";

const COMPANY_DATA_CARD_LIST = PHOTO_LIST.map((photo, index) => ({
  id: `${index + 1}`,
  component: (
    <CompanyDataCard
      image={photo}
      text="Mais de 22.000 refeições no último ano"
    />
  ),
}));

function CompanyDataImpactSection() {
  return (
    <section className={styles["company-data-impact-section-container"]}>
      <Carousel items={COMPANY_DATA_CARD_LIST} />
    </section>
  );
}

export default CompanyDataImpactSection;
