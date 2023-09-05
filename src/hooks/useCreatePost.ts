import api from '@/api/fetcher'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

type CreatePostBody = {
  title: string
  body: string
  post_image: string
  user_id: string
}

export default function useCreatePost() {
  const router = useRouter()
  const queryClient = useQueryClient()

  const createPost = async (body: CreatePostBody) => {
    const result = await api.post('/posts', body)
    return result.data
  }

  return useMutation(['createPost'], createPost, {
    onSuccess: () => {
      toast.success('Notícia criada com sucesso')
      queryClient.invalidateQueries(['Posts'])
      router.push('/backoffice')
    },
  })
}
