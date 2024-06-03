import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setError } from './errorSlice'
import { RootState } from '../store'
import { WeatherResponse } from 'models/WeatherResponse'

export const getWeatherInfo = createAsyncThunk('weather/getWeatherInfo', async (options, thunkAPI) => {
  console.log(options, thunkAPI)
  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

// interface WeatherState {
//   weather: {}
//   isLoading: boolean
// }

// const initialState: WeatherState = {
//   weather: {},
//   isLoading: false,
// }

const initialState = {
  cities: [],
  isLoading: false,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.cities = action.payload
    },
    removeWeather: (state) => {
      state.cities = {}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherInfo.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getWeatherInfo.fulfilled, (state, action) => {
      state.isLoading = false
      state.cities = [...new Set(action.payload.data)]
    })
    builder.addCase(getWeatherInfo.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { setWeather, removeWeather } = weatherSlice.actions

// export const selectWeather = (state: RootState): WeatherState => state.weather
export const selectWeather = (state) => state.weather
export const selectCities = (state) => state.weather.cities

export default weatherSlice.reducer
