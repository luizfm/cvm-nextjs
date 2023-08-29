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

const INITIAL_PAGE_AT_ARRAY_INDEX = 0

type PageProps = {
  selected: number
}

type FormDataDefaultValues = {
  search: string
}

export default function Backoffice() {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_AT_ARRAY_INDEX)
  const { data, fetchNextPage, isLoading, isFetchingNextPage } = useGetPosts({
    search,
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
    setCurrentPage(INITIAL_PAGE_AT_ARRAY_INDEX)
  })

  const onFetchNextPage = useCallback(() => {
    if (data?.pages[currentPage].nextPage && !data?.pages[currentPage + 1]) {
      fetchNextPage({
        pageParam: currentPage + 2,
      })
    }
    setCurrentPage((prevValue) => prevValue + 1)
  }, [fetchNextPage, data, currentPage])

  const onPageChange = useCallback(
    ({ selected }: PageProps) => {
      if (currentPage < selected) {
        onFetchNextPage()
        return
      }

      setCurrentPage((prevValue) => prevValue - 1)
    },
    [currentPage, onFetchNextPage],
  )

  const totalItemsCount = data?.pages[currentPage]?.totalPosts ?? 0
  const isFetchingOrLoading = isLoading || isFetchingNextPage

  console.log(isFetchingOrLoading, data, currentPage, isSubmitting)

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

      {isFetchingOrLoading && <Spinner />}
      {!isFetchingOrLoading && (
        <ul className={styles['news-card-list']}>
          {data?.pages[currentPage]?.posts.map(
            (news: UseGetPostsReturnData) => (
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
            ),
          )}
        </ul>
      )}
      {!isSubmitting && (
        <Pagination
          totalItemsCount={totalItemsCount}
          onPageChange={onPageChange}
        />
      )}
    </section>
  )
}
