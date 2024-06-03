import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { setError } from './errorSlice'
import { RootState } from '../store'
import { IUser } from '../../models/IUser'
import { AuthResponse } from '../../models/AuthResponse'

interface UserState {
  email: string | null
  token: string | null
  id: string | null
  isLoading: boolean
}

const initialState: UserState = {
  email: null,
  token: null,
  id: null,
  isLoading: false,
}

export const getUserData = createAsyncThunk('user/getUserData', async ({ email, password, remember }: IUser, thunkAPI) => {
  try {
    const auth = getAuth()
    const user = await signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      if (remember) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('email', user.email!)
        localStorage.setItem('id', user.uid)
        localStorage.setItem('token', user.refreshToken)
      }

      return {
        email: user.email!,
        id: user.uid,
        token: user.refreshToken,
      }
    })
    return user
  } catch (error: any) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

export const registerUserData = createAsyncThunk<AuthResponse, IUser>('user/registerUserData', async ({ email, password, remember }, thunkAPI) => {
  try {
    const auth = getAuth()
    const user = await createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      if (remember) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('email', user.email!)
        localStorage.setItem('id', user.uid)
        localStorage.setItem('token', user.refreshToken)
      }
      return {
        email: user.email!,
        id: user.uid,
        token: user.refreshToken,
      }
    })
    return user
  } catch (error: any) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthResponse>) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser: (state) => {
      state.email = null
      state.token = null
      state.id = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getUserData.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
      console.log(action)
      state.isLoading = false
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    })
    builder.addCase(getUserData.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(registerUserData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(registerUserData.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
      console.log(action)
      state.isLoading = false
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    })
    builder.addCase(registerUserData.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { setUser, removeUser } = userSlice.actions

export const selectUser = (state: RootState): UserState => state.user

export default userSlice.reducer
