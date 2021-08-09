import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ThemeContext from '../../ThemeContext' // importing context
import { doFilterOptionSorting } from '../../redux/actions'
import { AppState } from '../../types/types'

const FilterOptions = () => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const filterOption = useSelector(
    (state: AppState) => state.ui.sorting.filterOption
  )

  const style = { 
    color: theme.color,
    border: `1px solid ${theme.color}`
  };

  return (
    <select
      style= {style}
      value={filterOption}
      onChange={(e) => dispatch(doFilterOptionSorting(e.target.value))}
    >
      <option value="name">Name</option>
      <option value="languages">Languages</option>
      <option value="population">Population</option>
      <option value="region">Region</option>
    </select>
  )
}

export default FilterOptions
