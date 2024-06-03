import { useEffect } from 'react'
import { AuthResponse } from './models/AuthResponse'
import { setUser } from '../src/redux/slices/userSlice'
import { useAppDispatch } from 'hooks/redux-hooks'
import { useAuth } from './hooks/use-auth'
import Error from './components/Error/Error'
import AppRouter from './components/AppRouter'
import './App.css'

const App = () => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAuth()

  useEffect(() => {
    if (localStorage.getItem('auth') !== null) {
      const email = localStorage.getItem('email')
      const id = localStorage.getItem('id')
      const token = localStorage.getItem('token')

      if (email && id && token) {
        const userData: AuthResponse = {
          email,
          id,
          token,
        }
        dispatch(setUser(userData))
      }
    }
  }, [dispatch])

  return (
    <div className="App">
      <AppRouter isAuth={isAuth} />
      <Error />
    </div>
  )
}

export default App
