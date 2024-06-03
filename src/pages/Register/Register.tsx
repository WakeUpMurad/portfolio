import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SignUp from '../../components/SignUp/SignUp'
import Button from '../../components/UI/Button/Button'
import classes from './Register.module.css'

const Register: FC = () => {
  const location = useLocation()
  const fromPage = location.state?.from || ''

  return (
    <div className={classes.container}>
      <p className={classes.loginLink}>
        Already have an account?{' '}
        <NavLink
          to="/login"
          state={{ from: fromPage }}
        >
          <Button content={'Sing in'} />
        </NavLink>
      </p>
      <h1>Please Register</h1>
      <SignUp fromPage={fromPage} />
    </div>
  )
}

export default Register
