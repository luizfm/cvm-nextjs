import Image, { StaticImageData } from "next/image";
import classnames from "classnames";

import { PHOTO_LIST } from "@/mocks";

import styles from "./index.module.scss";
import { formatToLocaleString } from "@/utils";
import Link from "next/link";

type NewsCardProps = {
  className?: string;
  href: string;
  title: string;
  author: string;
  date: string;
  coverImage: StaticImageData;
};

export function NewsCard({
  className,
  href,
  title,
  author,
  date,
  coverImage,
}: NewsCardProps) {
  const formattedDate = new Date(date);
  const dateText = formatToLocaleString({
    date: formattedDate,
    locale: "pt-BR",
  });

  return (
    <article className={classnames(styles["news-card-container"], className)}>
      <Image
        src={coverImage}
        alt=""
        fill
        quality={100}
        className={styles["photo"]}
      />
      <div className={styles["news-data"]}>
        <h2 className={styles["news-title"]}>{title}</h2>
        <div className={styles["news-info"]}>
          <p>Escrito por: {author}</p>
          <time dateTime={dateText}>{dateText}</time>
        </div>
      </div>
      <Link href={href} className={styles["news-card-link"]} />
    </article>
  );
}

export default NewsCard;
