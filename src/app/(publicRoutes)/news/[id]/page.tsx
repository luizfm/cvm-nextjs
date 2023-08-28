'use client'

import useGetPostById from '@/hooks/useGetPostById'

import styles from './styles.module.scss'

type NewsDetailPageProps = {
  params: {
    id: string
  }
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const id = params.id as string

  const { data, isLoading, isError } = useGetPostById(id)

  if (isLoading || isError) {
    return null
  }

  return (
    <div className={styles['news-details-page-container']}>
      <div
        className={styles['news-body']}
        dangerouslySetInnerHTML={{ __html: data?.post.body as string }}
      />
    </div>
  )
}
