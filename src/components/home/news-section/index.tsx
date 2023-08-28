'use client'

import styles from './index.module.scss'
import NewsCard from './news-card'
import useGetPosts from '@/hooks/useGetPosts'
import newsMapper from '@/utils/news-mapper'

export function NewsSection() {
  const { data } = useGetPosts({})

  const formattedNews = newsMapper(data?.posts)

  return (
    <section className={styles['news-section-container']}>
      <h2 className={styles['news-section-title']}>Notícias</h2>

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
    </section>
  )
}

export default NewsSection
