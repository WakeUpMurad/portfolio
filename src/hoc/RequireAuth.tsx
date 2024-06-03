import React, { FC, ReactElement } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

type Require = {
  content: ReactElement
}

const RequireAuth: FC<Require> = ({ content }) => {
  const { isAuth } = useAuth()
  const location = useLocation()

  if (!isAuth) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
      />
    )
  }

  return content
}

export default RequireAuth
