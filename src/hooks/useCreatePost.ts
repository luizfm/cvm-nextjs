import api from '@/api/fetcher'
import { useMutation, useQueryClient } from 'react-query'

type CreatePostBody = {
  title: string
  body: string
  post_image: string
  user_id: string
}

export default function useCreatePost() {
  const queryClient = useQueryClient()

  const createPost = async (body: CreatePostBody) => {
    const result = await api.post('/posts', body)
    return result.data
  }

  return useMutation(['createPost'], createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['Posts'])
    },
  })
}
