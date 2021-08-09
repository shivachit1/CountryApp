// Action types
export const CHANGE_APP_THEME = 'CHANGE_APP_THEME'
export const ADD_ALL_COUNTRIES = 'ADD_ALL_COUNTRIES'
export const ADD_FILTERED_COUNTRIES = 'ADD_FILTERED_COUNTRIES'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_ALL_COUNTRIES_TO_CART = 'ADD_ALL_COUNTRIES_TO_CART'
export const TOGGLE_CART_VIEW = 'TOGGLE_CART_VIEW'
export const SEARCH_KEYWORD = 'SEARCH_KEYWORD'
export const SORT_COUNTRIES_BY_ALPHABETICAL = 'SORT_COUNTRIES_BY_ALPHABETICAL'
export const SORT_COUNTRIES_BY_FILTEROPTION = 'SORT_COUNTRIES_BY_FILTEROPTION'

// type for theme
export type Theme = {
  color: string
}

// Countries object type
export type Countries = {
  countries: Country[]
}

// Country object Type
export type Country = {
  flag: string
  name: string
  languages: Languages[]
  population: number
  region: string
}

// Languages object Type
export type Languages = {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

// Props for FlagProps type
export type FlagProps = {
  flag: string
}

// Props Type for Sorting
export type SortingOptions = {
  sortByAlphabet: (order: string) => void
  sort: string
  sortByFiterOption: (filterOption: string) => void
  filterOption: string
}

// Props Type for sorting (i.e: ascending or descending)
export type SortOrder = {
  sortByAlphabet: (order: string) => void
  sort: string
}

// Props Type for filterOption (i.e: name, languages, population, region)
export type FilterOption = {
  sortByFiterOption: (filterOption: string) => void
  filterOption: string
}

// Redux Action type for adding all fetched countries to redux store
export type AddAllCountriesAction = {
  type: typeof ADD_ALL_COUNTRIES
  payload: {
    countries: Country[]
  }
}

// Redux Action type for adding all filtered countries to redux store
export type AddFilteredCountriesAction = {
  type: typeof ADD_FILTERED_COUNTRIES
  payload: {
    countries: Country[]
  }
}

// Reducer Union Action type for all countries action
//(ps: needed this for countries reducer )
export type CountriesAction = AddAllCountriesAction | AddFilteredCountriesAction

// Redux Action type for App theme change
export type ThemeChangeAction = {
  type: typeof CHANGE_APP_THEME
  payload: {
    theme: Theme
  }
}

// Redux Action type for adding Country to cart
export type AddToCartAction = {
  type: typeof ADD_TO_CART
  payload: {
    country: Country
  }
}

// Redux Action type for removing country from cart
export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART
  payload: {
    countryName: string
  }
}
// Redux Action type for adding Country to cart
export type AddAllCountriesToCartAction = {
  type: typeof ADD_ALL_COUNTRIES_TO_CART
  payload: {
    countries: Country[]
  }
}

// Reucer Union Action type for adding and removing Country from Cart
export type CartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | AddAllCountriesToCartAction



// Redux Action type for Search Input
export type SearchKeywordAction = {
  type: typeof SEARCH_KEYWORD
  payload: {
    searchKeyWord: string
  }
}

// Redux Action type for sorting (i.e: Ascending or Descending)
export type AlphabeticalSortingAction = {
  type: typeof SORT_COUNTRIES_BY_ALPHABETICAL
  payload: {
    sort: string
  }
}

// Redux Action type for filterOption (i.e: name, languages, population, region)
export type FilterOptionSortingAction = {
  type: typeof SORT_COUNTRIES_BY_FILTEROPTION
  payload: {
    filterOption: string
  }
}

// Redux Action type for toggleing Cart view (i.e: inline or none)
export type ToggleCartViewAction = {
  type: typeof TOGGLE_CART_VIEW
  payload: {
    showCartView: string
  }
}

// Reducer Union Action type for handling UI states (i.e: searchInput, sorting)
export type UiActions =
  | ThemeChangeAction
  | ToggleCartViewAction
  | SearchKeywordAction
  | AlphabeticalSortingAction
  | FilterOptionSortingAction

// type for countries state
// countries -> which value never altered (i.e necessary for filtering out when search input)
export type CountriesState = {
  countries: Country[]
  filteredCountries: Country[]
}

// type for cart State
export type CartState = {
  cartCountries: Country[]
}

// type for Ui state (i.e: handling Ui changes)
export type UiState = {
  theme: {
    color: string
  }
  showCartView: string
  searchKeyWord: string
  sorting: {
    sort: string
    filterOption: string
  }
}

// type for whole App state
export type AppState = {
  countries: CountriesState
  cart: CartState
  ui: UiState
}
