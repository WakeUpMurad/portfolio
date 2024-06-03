import { FC, useEffect, useState, useCallback } from 'react'
import { Select } from 'antd'

// interface ISearch {
//   onChange: (searchData: string) => void
//   cities: string[]
// }

const Search = ({ onChange, cities }) => {
  const [searchValue, setSearchValue] = useState('')
  const [options, setOptions] = useState([])
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    const newOptions = cities.map((city) => ({
      value: `${city.letitude}, ${city.longitude}`,
      label: `${city.name} ${city.countryCode}`,
      key: city.id,
    }))
    setOptions(newOptions)
  }, [cities])

  const handleSearch = (val) => {
    setSearchValue(val)

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const newTimeoutId = setTimeout(() => {
      onChange(val)
    }, 1000)

    setTimeoutId(newTimeoutId)
  }

  return (
    <Select
      onSearch={handleSearch}
      showSearch
      style={{ width: 200 }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
      options={options}
    />
  )
}

export default Search
