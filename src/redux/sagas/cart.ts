import { takeEvery } from 'redux-saga/effects'

import {
  ADD_TO_CART,
  AddToCartAction,
  Country,
  REMOVE_FROM_CART,
  RemoveFromCartAction,
} from '../../types/types'

// saving changed cart to localStorage
const makeChangesToLocalStorage = (cartCountries: Country[]) => {
  localStorage.setItem('cart', JSON.stringify(cartCountries))
}

// getting all cart countries from localstorage, adding the country to cart and saving back to localstorage
const saveCountry = (country: Country) => {
  // cart = []
  const cartJson = localStorage.getItem('cart')
  let cartCountries: Country[] = cartJson !== null ? JSON.parse(cartJson) : []
  cartCountries = [...cartCountries, country]

  makeChangesToLocalStorage(cartCountries)
}

// getting all cart countries from localstorage, removing the country and saving back to localstorage
const removeCountry = (countryName: String) => {
  const cartJson = localStorage.getItem('cart')
  let cartCountries: Country[] = cartJson !== null ? JSON.parse(cartJson) : []
  cartCountries = cartCountries.filter(
    (country) => country.name !== countryName
  )
  makeChangesToLocalStorage(cartCountries)
}

// calling saveCart function to save country to cart
function* saveCountryToCart(action: AddToCartAction) {
  yield saveCountry(action.payload.country)
}

// removing country from cart
function* removeCountryFromCart(action: RemoveFromCartAction) {
  yield removeCountry(action.payload.countryName)
}

// calling whenever Country is added or removed from cart
export default [
  takeEvery(ADD_TO_CART, saveCountryToCart),
  takeEvery(REMOVE_FROM_CART, removeCountryFromCart),
]
