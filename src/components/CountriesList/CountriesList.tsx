import React from 'react'
import { useSelector } from 'react-redux'

import CardView from '../CardView/CardView'
import { AppState } from '../../types/types'
import './index.css'

const CountriesList = () => {
  const countries = useSelector((state: AppState) => state.countries.filteredCountries)

  return (
    <div className="flex-container">
      {countries.map((country) => (
        <CardView
          key={country.name}
          flag={country.flag}
          name={country.name}
          languages={country.languages}
          population={country.population}
          region={country.region}
        />
      ))}
    </div>
  )
}

export default CountriesList
