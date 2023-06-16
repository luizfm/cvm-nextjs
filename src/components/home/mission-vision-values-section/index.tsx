"use client";

import CompanyValues from "./company-values";
import Card from "../../card";

import styles from "./styles.module.scss";

const CARDS_ITEMS = [
  {
    title: "Missão",
    animationUrl:
      "https://assets10.lottiefiles.com/packages/lf20_Twpva09nPz.json",
    description:
      "Socializar o atendimento de qualidade á população de baixo poder aquisitivo, evangelizando-os nos ensinamentos de Jesus.",
  },
  {
    title: "Visão",
    animationUrl:
      "https://assets10.lottiefiles.com/packages/lf20_l6UZuXBusZ.json",
    description:
      "Ser referência na área social, buscando aprimoramento contínuo e inovando pelas ações",
  },
  {
    title: "Valores",
    animationUrl: "https://assets7.lottiefiles.com/packages/lf20_wsdpcof3.json",
    description: (
      <CompanyValues
        valuesList={[
          "Ética",
          "Transparência",
          "Credibilidade",
          "Competência",
          "Integridade",
          "Seriedade",
          "Respeito às diferenças",
          "Temor a Deus",
        ]}
      />
    ),
  },
];

export function MissionVisionValuesSection() {
  return (
    <section className={styles["mission-vision-values-container"]}>
      <h2 className={styles["visually-hidden"]}>Mission, Vision, Values</h2>
      <div className={styles["cards-container"]}>
        {CARDS_ITEMS.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            animationUrl={card.animationUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default MissionVisionValuesSection;
