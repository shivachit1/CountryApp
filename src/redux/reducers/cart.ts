import {
  CartState,
  CartActions,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ALL_COUNTRIES_TO_CART,
} from '../../types/types'

// initial state for Cart
const initialState: CartState = {
  cartCountries: [],
}
export default function cart(state = initialState, action: CartActions
): CartState {
  switch (action.type) {
  // returning new state with all cart countries if localstorage has countries in cart
  case ADD_ALL_COUNTRIES_TO_CART: {
    const { countries } = action.payload
    return { ...state, cartCountries: countries }
  }

  // returning new state after country is added to cart
  case ADD_TO_CART: {
    const { country } = action.payload
    // if cart already contains country then returning state without adding country
    if (state.cartCountries.find((p) => p.name === country.name)) {
      return state
    }
    return { ...state, cartCountries: [...state.cartCountries, country] }
  }

  // returning new state whenever country is removed from cart
  case REMOVE_FROM_CART: {
    const { countryName } = action.payload
    const index = state.cartCountries.findIndex((p) => p.name === countryName)
    if (index >= 0) {
      state.cartCountries.splice(index, 1)
      return { ...state, cartCountries: [...state.cartCountries] }
    }
    return state
  }

  default:
    return state
  }
}
