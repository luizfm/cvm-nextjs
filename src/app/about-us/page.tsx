import TimelineCard from "@/components/about-us/timeline-card";
import styles from "./styles.module.scss";
import { TIMELINE_OPTIONS } from "@/constants";

export const metadata = {
  title: "Quem somos | CVM",
};

export default function AboutUs() {
  return (
    <div className={styles["about-us-container"]}>
      <div className={styles["page-title-container"]}>
        <h1 className={styles["about-us-title"]}>Linha do tempo</h1>
        <h2 className={styles["about-us-subtitle"]}>Nossa história - CVM</h2>
      </div>
      {TIMELINE_OPTIONS.map((option, index) => (
        <TimelineCard
          key={option.id}
          title={option.title}
          variant={option.variant}
          description={option.description}
          animationUrl={option.animationUrl}
          icon={<></>}
          {...(index !== 0 ? { hasBeforeLine: true } : {})}
          {...(index !== TIMELINE_OPTIONS.length - 1
            ? { hasAfterLine: true }
            : {})}
        />
      ))}
    </div>
  );
}
