import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: (error) => {
        console.log({ error }, 'queries')
      },
    },
    mutations: {
      onError: (error) => {
        console.log({ error }, 'mutations')
      },
    },
  },
})
