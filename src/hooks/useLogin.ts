'use client'

import api from '@/api/fetcher'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from 'react-query'

type LoginProps = {
  email: string
  password: string
}

type LoginResultType = {
  userId: string
}

export default function useLogin() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const login = async ({ email, password }: LoginProps) => {
    const result = await api.post('/users/login', {
      email,
      password,
    })

    return result.data
  }

  return useMutation(['login'], login, {
    onSuccess: (data: LoginResultType) => {
      queryClient.setQueryData(['user'], { id: data.userId })
      router.push('/backoffice')
    },
  })
}
