import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SignIn from '../../components/SignIn/SignIn'
import Button from '../../components/UI/Button/Button'
import classes from './Login.module.css'

const Login: FC = () => {
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || ''

  return (
    <div className={classes.container}>
      <p className={classes.registerLink}>
        Don't have an account yet?{' '}
        <NavLink
          to="/register"
          state={{ from: fromPage }}
        >
          <Button content={'Register'} />
        </NavLink>
      </p>
      <h1>Please Login</h1>
      <SignIn fromPage={fromPage} />
    </div>
  )
}

export default Login
