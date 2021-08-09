import React from 'react'

import AlphabeticOptions from './AlphabeticOptions'
import FilterOptions from './FilterOptions'
import './index.css'

const Filters = () => {
  return (
    <div>
      <div className="filter-buttons">
        <AlphabeticOptions />
        <FilterOptions />
      </div>
    </div>
  )
}

export default Filters
