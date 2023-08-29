import api from '@/api/fetcher'
import { StaticImageData } from 'next/image'
import { useQuery } from 'react-query'

type UserType = {
  name: string
}

export type UseGetPostsReturnData = {
  id: string
  post_image: string | StaticImageData
  title: string
  user: UserType
  created_at: string
}

type QueryKeyType = {
  page?: number
  pageSize?: number
  search: string
}

export default function useGetPosts({
  search,
  page = 1,
  pageSize = 10,
}: QueryKeyType) {
  const getPosts = async (page: number, search: string) => {
    const urlSearchParams = new URLSearchParams({
      search,
      page: `${page}`,
      pageSize: `${pageSize}`,
    }).toString()

    const result = await api.get(`/posts?${urlSearchParams}`)
    return result.data
  }

  return useQuery(
    ['posts', { search, page, pageSize }],
    () => getPosts(page, search),
    {
      keepPreviousData: true,
    },
  )
}
