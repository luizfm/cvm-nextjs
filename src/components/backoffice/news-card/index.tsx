import Image, { StaticImageData } from 'next/image'

import styles from './styles.module.scss'
import Link from 'next/link'

type NewsCardProps = {
  id: string
  imageUrl: string | StaticImageData
  title: string
  author: string
  createdAt: string
}

export default function NewsCard({
  id,
  imageUrl,
  title,
  author,
  createdAt,
}: NewsCardProps) {
  return (
    <article className={styles['news-card-container']}>
      <Image
        unoptimized
        src={imageUrl}
        height={160}
        width={300}
        alt="Post image"
        className={styles['news-image']}
      />
      <div className={styles['news-card-content']}>
        <h2 className={styles['news-card-title']}>{title}</h2>
        <div className={styles['news-card-info']}>
          <p className={styles['news-card-author']}>{author}</p>
          <time dateTime={createdAt}>{createdAt}</time>
        </div>
      </div>
      <Link
        href={`/backoffice/posts/${id}`}
        className={styles['news-card-link']}
        prefetch={false}
      />
    </article>
  )
}
