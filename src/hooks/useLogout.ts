import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useQueryClient } from 'react-query'

export default function useLogout() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const logout = () => {
    deleteCookie('token')
    deleteCookie('userId')

    queryClient.setQueryData(['user'], {})
    router.push('/')
  }

  return { logout }
}
