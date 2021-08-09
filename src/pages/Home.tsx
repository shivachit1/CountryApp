import React from 'react'

import CountriesList from '../components/CountriesList/CountriesList' // importing countries components
import SearchBar from '../components/SearchBar/SearchBar' // importing SearchBar Component
import Filters from '../components/FilterButtons/Filters' // importing Filters Component for Sorting

export default function Home() {

  return (
    <div>
      <div className="filters-div">
        <SearchBar />
        <Filters />
      </div>
      <CountriesList />
    </div>
  )
}
