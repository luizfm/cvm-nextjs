'use client'

import Input from '@/components/input'
import { MagnifyingGlass } from '@phosphor-icons/react'

import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import Button from '@/components/button'
import NewsCard from '@/components/backoffice/news-card'
import useGetPosts from '@/hooks/useGetPosts'
import { useState } from 'react'
import { formatToLocaleString } from '@/utils'

type FormDataDefaultValues = {
  search: string
}

export default function Backoffice() {
  const [search, setSearch] = useState('')
  const { data } = useGetPosts({ search })
  const { register, handleSubmit } = useForm<FormDataDefaultValues>({
    defaultValues: {
      search: '',
    },
  })

  const onSubmit = handleSubmit((formData) => {
    setSearch(formData.search)
  })

  return (
    <section className={styles['backoffice-page-container']}>
      <h1 className={styles['backoffice-page-title']}>
        Gerenciador de notícias do site
      </h1>

      <form onSubmit={onSubmit} className={styles['form-wrapper']}>
        <Input
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

      <ul className={styles['news-card-list']}>
        {data?.posts.map((news) => (
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
    </section>
  )
}
