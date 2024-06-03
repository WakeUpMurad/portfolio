import { FC } from 'react'
import Search from '../../components/UI/Search/Search'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { getWeatherInfo, selectCities } from '../../redux/slices/weatherSlice'
import { GEO_API_URL, geoApiOptions } from 'api/api'
import classes from './Weather.module.css'

// type Params = {
//   url: string
//   method: string
//   headers: {
//     'x-rapidapi-key': string
//     'x-rapidapi-host': string
//   }
// }

const Weather = () => {
  const dispatch = useAppDispatch()
  const cities = useAppSelector(selectCities)

  const handleSearch = (searchData) => {
    const params = {
      url: `${GEO_API_URL}/cities?namePrefix=${searchData}`,
      ...geoApiOptions,
    }
    console.log(searchData)
    dispatch(getWeatherInfo(params))
  }

  return (
    <div className={classes.container}>
      <h1>Weather</h1>
      <Search
        onChange={handleSearch}
        cities={cities}
      />
    </div>
  )
}
export default Weather
