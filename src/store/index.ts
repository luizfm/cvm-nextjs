import { AxiosError } from 'axios'
import { QueryClient } from 'react-query'
import { toast } from 'react-toastify'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: (error) => {
        const queryError = error as AxiosError<{ error: string }>
        toast.error(queryError.response?.data.error)
      },
    },
    mutations: {
      onError: (error) => {
        const mutationError = error as AxiosError<{ error: string }>
        toast.error(mutationError.response?.data.error)
      },
    },
  },
})
