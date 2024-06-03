import { selectUser } from '../redux/slices/userSlice'
import { useAppSelector } from './redux-hooks'

export function useAuth() {
  const user = useAppSelector(selectUser)
  const { email, token, id } = user

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
