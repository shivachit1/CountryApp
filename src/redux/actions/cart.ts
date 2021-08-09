import {
  ADD_ALL_COUNTRIES_TO_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartActions,
  Country,
} from '../../types/types'

// action for adding all countries to the cart from localStorage
export function addAllCountriesToCart(countries: Country[]): CartActions {
  return {
    type: ADD_ALL_COUNTRIES_TO_CART,
    payload: {
      countries,
    },
  }
}

// action for adding country to the cart
export function addToCart(country: Country): CartActions {
  return {
    type: ADD_TO_CART,
    payload: {
      country,
    },
  }
}

// action for removing country from the cart
export function removeFromCart(countryName: string): CartActions {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      countryName,
    },
  }
}

