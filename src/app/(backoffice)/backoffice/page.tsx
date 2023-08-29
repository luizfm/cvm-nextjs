'use client'

import Input from '@/components/input'
import { MagnifyingGlass } from '@phosphor-icons/react'

import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import Button from '@/components/button'
import NewsCard from '@/components/backoffice/news-card'
import useGetPosts, { UseGetPostsReturnData } from '@/hooks/useGetPosts'
import { useCallback, useState } from 'react'
import { formatToLocaleString } from '@/utils'
import Pagination from '@/components/pagination'
import Spinner from '@/components/spinner'

type FormDataDefaultValues = {
  search: string
}

export default function Backoffice() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const { data, isLoading } = useGetPosts({
    search,
    page,
  })
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormDataDefaultValues>({
    defaultValues: {
      search: '',
    },
  })

  const onSubmit = handleSubmit((formData) => {
    setSearch(formData.search)
    setPage(1)
  })

  const onPageChange = useCallback((pageNumber: number) => {
    setPage(pageNumber)
  }, [])

  const totalItemsCount = data?.totalPosts
  const isFetchingOrLoading = isLoading

  return (
    <section className={styles['backoffice-page-container']}>
      <h1 className={styles['backoffice-page-title']}>
        Gerenciador de notícias do site
      </h1>

      <form onSubmit={onSubmit} className={styles['form-wrapper']}>
        <Input
          id="search-input"
          type="text"
          label="Search for a post"
          hiddenLabel
          placeholder="Pesquisar por título"
          suffix={
            <Button className={styles['search-button']} type="submit">
              <MagnifyingGlass size={24} />
            </Button>
          }
          {...register('search')}
        />
      </form>

      {isFetchingOrLoading && <Spinner className={styles['spinner-wrapper']} />}
      {!isFetchingOrLoading && (
        <ul className={styles['news-card-list']}>
          {data?.posts.map((news: UseGetPostsReturnData) => (
            <li key={news.id}>
              <NewsCard
                id={news.id}
                title={news.title}
                author={news.user.name}
                createdAt={formatToLocaleString({
                  date: new Date(news.created_at),
                  locale: 'pt-BR',
                })}
                imageUrl={news.post_image}
              />
            </li>
          ))}
        </ul>
      )}
      {!isSubmitting && (
        <Pagination
          totalItemsCount={totalItemsCount}
          itemsPerPage={10}
          onPageChange={onPageChange}
          className={styles.pagination}
        />
      )}
    </section>
  )
}
