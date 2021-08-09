import { Dispatch } from 'redux' // type for Dispatch object

// types import
import {
  ADD_ALL_COUNTRIES,
  ADD_FILTERED_COUNTRIES,
  CountriesAction,
  Country,
} from '../../types/types'

// action for adding all countries data after fetch
export function addAllCountries(countries: Country[]): CountriesAction {
  return {
    type: ADD_ALL_COUNTRIES,
    payload: {
      countries,
    },
  }
}

// action for adding all countries data after fetch
// same as above action but this appState can be used when altering data on filtering and sorting
export function addFilteredCountries(countries: Country[]): CountriesAction {
  return {
    type: ADD_FILTERED_COUNTRIES,
    payload: {
      countries,
    },
  }
}

// action for fetching countries data from api endPoint
export const getAllCountries = () => {
  return async (dispatch: Dispatch) => {
    try {
      const baseUrl = 'https://restcountries.eu/rest/v2/all'
      const res = await fetch(baseUrl)
      const data = await res.json()
      dispatch(addAllCountries(data))
      dispatch(addFilteredCountries(data))
    } catch (error) {
      console.log(error)
    }
  }
}

