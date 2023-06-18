import classnames from "classnames";

import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";

export enum PartnersCardVariant {
  Default = "",
  Current = "current",
}

type PartnersCardProps = {
  variant?: PartnersCardVariant;
  imageUrl: StaticImageData | string;
  className?: string;
  partnerName: string;
};

function PartnersCard({
  variant = PartnersCardVariant.Default,
  partnerName,
  imageUrl,
  className,
}: PartnersCardProps) {
  return (
    <div
      className={classnames(
        styles["partners-card-container"],
        styles[variant],
        className
      )}
    >
      <div className={styles["logo-container"]}>
        <div className={styles["image-wrapper"]}>
          <Image
            src={imageUrl}
            alt=""
            quality={100}
            className={styles["image"]}
            height={132}
            width={132}
          />
        </div>
      </div>
      {variant === PartnersCardVariant.Current && (
        <p className={styles["partners-name"]}>{partnerName}</p>
      )}
    </div>
  );
}

export default PartnersCard;
