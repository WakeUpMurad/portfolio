import React, { ReactElement } from 'react'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Weather from '../pages/Weather/Weather'
import Profile from '../pages/Profile/Profile'
import About from '../pages/About/About'
import Contacts from '../pages/Contacts/Contacts'

export enum RouteNames {
  WEATHER = '',
  LOGIN = 'login',
  REGISTER = 'register',
  ABOUT = 'about',
  CONTACTS = 'contacts',
  PROFILE = 'profile',
}

export interface IRoute {
  path: string
  element: ReactElement
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: React.createElement(Login) },
  { path: RouteNames.REGISTER, element: React.createElement(Register) },
  { path: RouteNames.WEATHER, element: React.createElement(Weather) },
  { path: RouteNames.ABOUT, element: React.createElement(About) },
  { path: RouteNames.CONTACTS, element: React.createElement(Contacts) },
]

export const privateRoutes: IRoute[] = [{ path: RouteNames.PROFILE, element: React.createElement(Profile) }]
