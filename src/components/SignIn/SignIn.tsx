import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/redux-hooks'
import { ISign } from '../../models/ISign'
import { getUserData } from '../../redux/slices/userSlice'
import Form from '../UI/Form/Form'

const SignIn: FC<ISign> = ({ fromPage }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = (email: string, password: string, remember: boolean) => {
    dispatch(getUserData({ email, password, remember })).then(() => {
      navigate(fromPage, { replace: true })
    })
  }
  return (
    <Form
      title="Sing in"
      handleSubmit={handleLogin}
    />
  )
}
export default SignIn
