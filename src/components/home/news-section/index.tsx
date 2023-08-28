'use client'

import { PHOTO_LIST } from '@/mocks'
import styles from './index.module.scss'
import NewsCard from './news-card'
import useGetPosts from '@/hooks/useGetPosts'
import newsMapper from '@/utils/news-mapper'

const NEWS_CARD_LIST = [
  {
    id: '1',
    className: styles['card-1'],
    author: 'CVM',
    coverImage: PHOTO_LIST[0],
    date: '2021-08-01',
    title: 'CVM realiza ação de doação de cestas básicas',
    href: '/',
  },
  {
    id: '2',
    className: styles['card-2'],
    author: 'CVM',
    coverImage: PHOTO_LIST[0],
    date: '2021-08-01',
    title: 'CVM realiza ação de doação de cestas básicas',
    href: '/',
  },
  {
    id: '3',
    className: styles['card-3'],
    author: 'CVM',
    coverImage: PHOTO_LIST[0],
    date: '2021-08-01',
    title: 'CVM realiza ação de doação de cestas básicas',
    href: '/',
  },
  {
    id: '4',
    className: styles['card-4'],
    author: 'CVM',
    coverImage: PHOTO_LIST[0],
    date: '2021-08-01',
    title: 'CVM realiza ação de doação de cestas básicas',
    href: '/',
  },
  {
    id: '5',
    className: styles['card-5'],
    author: 'CVM',
    coverImage: PHOTO_LIST[0],
    date: '2021-08-01',
    title: 'CVM realiza ação de doação de cestas básicas',
    href: '/',
  },
]

export function NewsSection() {
  const { data, isLoading } = useGetPosts({})

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
