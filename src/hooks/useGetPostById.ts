import api from '@/api/fetcher'
import { useQuery } from 'react-query'

type UserType = {
  name: string
}

type GetPostByIdReturnType = {
  post: {
    title: string
    id: string
    body: string
    post_image: string
    created_at: string
    user: UserType
  }
  totalPosts: number
  currentPage: number
  nextPage: number | null
}

export default function useGetPostById(id: string) {
  const getPostById = async () => {
    const result = await api.get(`/posts/${id}`)
    return result.data
  }

  return useQuery<GetPostByIdReturnType>(['posts', id], getPostById, {
    enabled: !!id,
  })
}
