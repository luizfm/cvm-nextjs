import api from '@/api/fetcher'
import { StaticImageData } from 'next/image'
import { useInfiniteQuery } from 'react-query'

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

export type UseGetPostsReturnType = {
  posts: UseGetPostsReturnData[]
}

type QueryKeyType = {
  page?: number
  search: string
}

export default function useGetPosts({ search, page = 1 }: QueryKeyType) {
  const getPosts = async (page: number, search: string) => {
    const urlSearchParams = new URLSearchParams({
      search,
      page: `${page}`,
    }).toString()

    const result = await api.get(`/posts?${urlSearchParams}`)
    return result.data
  }

  return useInfiniteQuery(['posts', { search, page }], ({ pageParam = 1 }) =>
    getPosts(pageParam, search),
  )
}
