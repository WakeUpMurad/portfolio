import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ISign } from '../../models/ISign'
import { registerUserData } from '../../redux/slices/userSlice'
import { useAppDispatch } from 'hooks/redux-hooks'
import Form from '../UI/Form/Form'

const SignUp: FC<ISign> = ({ fromPage }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleRegister = (email: string, password: string, remember: boolean) => {
    dispatch(registerUserData({ email, password, remember })).then(() => {
      navigate(fromPage, { replace: true })
    })
  }
  return (
    <Form
      title="Register"
      handleSubmit={handleRegister}
    />
  )
}
export default SignUp
