'use client'

import { useCallback, useState } from 'react'
import styles from './index.module.scss'
import NewsCard from './news-card'
import useGetPosts from '@/hooks/useGetPosts'
import newsMapper from '@/utils/news-mapper'
import Pagination from '@/components/pagination'
import Spinner from '@/components/spinner'

export function NewsSection() {
  const [page, setPage] = useState(1)

  const { data, isLoading } = useGetPosts({
    page,
    search: '',
    pageSize: 5,
  })

  const formattedNews = newsMapper(data?.posts)

  const onPageChange = useCallback((pageNumber: number) => {
    setPage(pageNumber)
  }, [])

  const isLoadingOrFetchingNextPage = isLoading

  const totalItemsCount = data?.totalPosts

  return (
    <section className={styles['news-section-container']}>
      <h2 className={styles['news-section-title']}>Notícias</h2>

      {isLoadingOrFetchingNextPage && (
        <Spinner className={styles['spinner-wrapper']} />
      )}
      {!isLoadingOrFetchingNextPage && (
        <div className={styles['news-grid-tile']}>
          {formattedNews.map(
            ({ id, className, author, coverImage, date, title, href }) => (
              <NewsCard
                key={id}
                className={styles[className]}
                author={author}
                date={date}
                title={title}
                coverImage={coverImage}
                href={href}
              />
            ),
          )}
        </div>
      )}
      <Pagination
        totalItemsCount={totalItemsCount}
        itemsPerPage={5}
        onPageChange={onPageChange}
      />
    </section>
  )
}

export default NewsSection
