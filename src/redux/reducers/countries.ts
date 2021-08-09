import {
  CountriesState,
  ADD_ALL_COUNTRIES,
  ADD_FILTERED_COUNTRIES,
  CountriesAction,
} from '../../types/types'

// initial state for handling Country state
// contains all countries and Filtered Countries
// only filterCountries values are altered for searching, sorting, and adding country to cart
const initialState: CountriesState = {
  countries: [],
  filteredCountries: [],
}

export default function countries(
  state = initialState,
  action: CountriesAction
): CountriesState {
  switch (action.type) {
  // this is called only once after data is fetched
  case ADD_ALL_COUNTRIES: {
    const { countries } = action.payload
    return { ...state, countries: [...countries] }
  }

  // this is called after data is fetched
  // used for altering data on sorting, searching, and adding product to cart
  case ADD_FILTERED_COUNTRIES: {
    const { countries } = action.payload
    return { ...state, filteredCountries: [...countries] }
  }

  default:
    return state
  }
}
