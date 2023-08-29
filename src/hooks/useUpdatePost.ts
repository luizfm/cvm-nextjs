import api from '@/api/fetcher'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from 'react-query'

type UpdatePostBody = {
  title?: string
  body?: string
  post_image?: string
  user_id?: string
  disabled?: boolean
}

export default function useUpdatePost(id: string) {
  const queryClient = useQueryClient()
  const router = useRouter()

  const updatePost = async (data: UpdatePostBody) => {
    const result = await api.patch(`/posts/${id}`, data)
    return result.data
  }

  return useMutation(['post'], updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      router.push('/backoffice')
    },
  })
}
