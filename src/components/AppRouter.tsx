import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import NotFound from '../pages/NotFound/NotFound'
import { privateRoutes, publicRoutes } from '../router'
import RequireAuth from '../hoc/RequireAuth'

interface IAuth {
  isAuth: boolean
}

const AppRouter: FC<IAuth> = () => {
  return (
    <Routes>
      <Route
        element={<MainLayout />}
        path={'/'}
      >
        {publicRoutes.map((route) => (
          <Route
            element={<>{route.element}</>}
            path={route.path}
            key={route.path}
          />
        ))}
        {privateRoutes.map((route) => (
          <Route
            element={<RequireAuth content={route.element} />}
            path={route.path}
            key={route.path}
          />
        ))}
        <Route
          element={<NotFound />}
          path={'*'}
        />
      </Route>
    </Routes>
  )
}

export default AppRouter
