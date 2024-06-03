import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import 'react-toastify/dist/ReactToastify.css'

const Error = () => {
  const errorMessage = useAppSelector(selectErrorMessage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
    />
  )
}

export default Error
