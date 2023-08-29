import Image, { StaticImageData } from 'next/image'

import styles from './styles.module.scss'
import Link from 'next/link'
import Button from '@/components/button'
import { X } from '@phosphor-icons/react'
import { useCallback } from 'react'
import useUpdatePost from '@/hooks/useUpdatePost'

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
  const { mutate } = useUpdatePost(id)

  const onDeleteClick = useCallback(() => {
    mutate({
      disabled: true,
    })
  }, [mutate])

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
      <Button
        className={styles['delete-button']}
        variant="tertiary"
        onClick={onDeleteClick}
      >
        <X />
      </Button>
      <Link
        href={`/backoffice/posts/${id}`}
        className={styles['news-card-link']}
        prefetch={false}
      />
    </article>
  )
}
