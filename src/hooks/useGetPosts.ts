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

export type UseGetPostsReturnType = {
  posts: UseGetPostsReturnData[]
}

export default function useGetPosts({ search = '', page = '1' }) {
  const getPosts = async () => {
    const urlSearchParams = new URLSearchParams({ search, page }).toString()
    const result = await api.get(`/posts?${urlSearchParams}`)
    return result.data
  }

  return useQuery<UseGetPostsReturnType>(['Posts', search, page], getPosts)
}
