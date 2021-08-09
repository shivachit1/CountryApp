import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CardView from '../components/CardView/CardView'
import { AppState } from '../types/types'

export default function Product() {
  const { id } = useParams<{ id: string }>()

  const countriesList = useSelector(
    (state: AppState) => state.countries.filteredCountries
  )
  const country = countriesList.find(
    (country) => country.name.toLowerCase() === id.toLowerCase()
  )

  if (country) {
    return (
      <div className="flex-container">
        <CardView
          flag={country.flag}
          name={country.name}
          languages={country.languages}
          population={country.population}
          region={country.region}
        />
      </div>
    )
  } else {
    return <div>Invalid path. Country with given Name {id} doesn't exist.</div>
  }
}
