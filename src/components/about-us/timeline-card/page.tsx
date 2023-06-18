"use client";

import classnames from "classnames";

import styles from "./styles.module.scss";
import LottiesAnimation from "@/components/lotties-animation";

export enum TimelineVariant {
  LEFT = "left",
  RIGHT = "right",
}

type TimelineCardProps = {
  title: string;
  icon: JSX.Element;
  description: string;
  variant?: TimelineVariant;
  className?: string;
  animationUrl: string;
  hasBeforeLine?: boolean;
  hasAfterLine?: boolean;
};

function TimelineCard({
  description,
  icon,
  title,
  variant = TimelineVariant.RIGHT,
  animationUrl,
  hasBeforeLine,
  hasAfterLine,
  className,
}: TimelineCardProps) {
  return (
    <div
      className={classnames(
        styles["timeline-card-container"],
        styles[variant],
        className
      )}
    >
      <header className={styles["timeline-card-header"]}>
        <p className={styles["timeline-card-title"]}>{title}</p>
        <p className={styles["timeline-card-description"]}>{description}</p>
      </header>
      <div
        className={classnames(styles["divider"], {
          [styles["before-line"]]: hasBeforeLine,
          [styles["after-line"]]: hasAfterLine,
        })}
      >
        <div className={styles["icon-wrapper"]}>{icon}</div>
      </div>
      <LottiesAnimation src={animationUrl} />
    </div>
  );
}

export default TimelineCard;
