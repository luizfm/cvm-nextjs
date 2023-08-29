import { getCookie } from 'cookies-next'
import { useQueryClient } from 'react-query'

type UserProps = {
  id: string
}

export default function useGetUser() {
  const queryClient = useQueryClient()
  const userIdFromCookies = getCookie('userId')
  const user = queryClient.getQueryData<UserProps>(['user'])

  if (userIdFromCookies && !user) {
    queryClient.setQueryData(['user'], { id: userIdFromCookies })
  }

  return {
    userId: userIdFromCookies ?? user?.id ?? '',
  }
}
