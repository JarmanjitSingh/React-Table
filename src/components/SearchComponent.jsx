import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

const SearchComponent = ({filter, setFilter}) => {
  return (
    <span>
      Search:{' '}
      <input
        value={filter || ''}
        onChange={(e)=> setFilter(e.target.value)}
      />
    </span>
  )
}

export default SearchComponent

//For column filtering

export const SearchColumnFilter = ({column}) => {

    const {filterValue, setFilter} = column
    return (
      <span>
        Search:{' '}
        <input
          value={filterValue || ''}
          onChange={(e)=> setFilter(e.target.value)}
        />
      </span>
    )
  }

  //for debouncing we can modify above function as that

 export const SearchDebounceComponent = ({filter, setFilter}) => {

    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
    return (
      <span>
        Search:{' '}
        <input
          value={value || ''}
          onChange={(e)=> {
            setValue(e.target.value)
            onChange(e.target.value)
          }}
        />
      </span>
    )
  }