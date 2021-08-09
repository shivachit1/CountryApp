import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ThemeContext from '../../ThemeContext' // importing context
import { doSearching } from '../../redux/actions/ui'
import { AppState } from '../../types/types'
import './index.css'

const SearchBar = () => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const searchKeyWord = useSelector((state: AppState) => state.ui.searchKeyWord)

  const style = { 
    color: theme.color,
    boxShadow: `0 0 2px 2px ${theme.color}`
  };

  return (
    <form>
      <input
        style={style}
        value={searchKeyWord}
        placeholder="Search Country"
        onChange={(e) => dispatch(doSearching(e.currentTarget.value))}
      />
    </form>
  )
}

export default SearchBar
