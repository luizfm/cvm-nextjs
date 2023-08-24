import classnames from "classnames";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import LottiesAnimation from "../lotties-animation";

type CardProps = {
  className?: string;
  imageUrl?: StaticImageData;
  animationUrl?: string;
  title?: string;
  description?: React.ReactNode | string;
};

export function Card({
  className,
  imageUrl,
  title,
  description,
  animationUrl,
}: CardProps) {
  return (
    <div className={classnames(styles["card-container"], className)}>
      {!!imageUrl && (
        <div className={styles["image-wrapper"]}>
          <Image
            className={styles["image"]}
            src={imageUrl}
            height={200}
            width={200}
            alt=""
            quality={100}
          />
        </div>
      )}

      {!!animationUrl && (
        <LottiesAnimation
          className={styles["animation-container"]}
          src={animationUrl}
        />
      )}
      <div className={styles["card-data"]}>
        {title && <h2 className={styles["title"]}>{title}</h2>}
        {Boolean(description) &&
          (typeof description === "string" ? (
            <p className={styles["description"]}>{description}</p>
          ) : (
            description
          ))}
      </div>
    </div>
  );
}

export default Card;
