import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './slices/weatherSlice'
import userReducer from './slices/userSlice'
import errorReducer from './slices/errorSlice'

const store = configureStore({
  reducer: { weather: weatherReducer, user: userReducer, error: errorReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
