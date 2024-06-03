import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store' // Adjust the import path as necessary

const initialState: string = ''

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      return action.payload
    },
    clearError: () => {
      return initialState
    },
  },
})

export const { setError, clearError } = errorSlice.actions

export const selectErrorMessage = (state: RootState): string => state.error

export default errorSlice.reducer
