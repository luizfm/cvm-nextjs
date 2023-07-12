import classnames from "classnames";

import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export enum PartnersCardVariant {
  Default = "",
  Current = "current",
}

type PartnersCardProps = {
  variant?: PartnersCardVariant;
  imageUrl: StaticImageData | string;
  className?: string;
  partnerName: string;
  href: string;
};

function PartnersCard({
  variant = PartnersCardVariant.Default,
  partnerName,
  imageUrl,
  href,
  className,
}: PartnersCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
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
    </Link>
  );
}

export default PartnersCard;
