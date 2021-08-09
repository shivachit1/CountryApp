import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ThemeContext from '../../ThemeContext' // importing context
import { AppState } from '../../types/types'
import { doAlphabeticalSorting } from '../../redux/actions/ui'

const AlphabeticOptions = () => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const sort = useSelector((state: AppState) => state.ui.sorting.sort)

  const style = { 
    color: theme.color,
    border: `1px solid ${theme.color}`
  };

  return (
    <select
      style= {style}
      value={sort}
      onChange={(e) => dispatch(doAlphabeticalSorting(e.target.value))}
    >
      <option value="Ascending">Ascending</option>
      <option value="Descending">Descending</option>
    </select>
  )
}

export default AlphabeticOptions
