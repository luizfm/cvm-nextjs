import { PHOTO_DATA_LIST, PHOTO_LIST } from "@/mocks";
import { PhotoCarousel } from "../photo-carousel";

import styles from "./styles.module.scss";
import CompanyDataCard from "./company-data-card";
import { Carousel } from "../carousel";
import { Autoplay, EffectFade, Pagination } from "swiper";

const DATA_TEXTS = [
  "Esses são os números de 2020:",
  "Foram cerca de 466 crianças atendidas",
  "Postadas 1.976 atividades na plataforma online",
  "Distribuidas cerca de 260 cestas básicas através do projeto CVM de amparo a familia",
  "O CDC atendeu 40 crianças",
  "O CDE atendeu 58 crianças",
  "Distribuição de 209 kits alimentação, 260 cestas básicas e 300 aves natalinas",
];

const COMPANY_DATA_CARD_LIST = PHOTO_DATA_LIST.map((photo, index) => ({
  id: `${index + 1}`,
  component: <CompanyDataCard image={photo} text={DATA_TEXTS[index]} />,
}));

function CompanyDataImpactSection() {
  return (
    <section className={styles["company-data-impact-section-container"]}>
      <Carousel
        items={COMPANY_DATA_CARD_LIST}
        modules={[EffectFade, Pagination, Autoplay]}
        effect={"fade"}
      />
    </section>
  );
}

export default CompanyDataImpactSection;
