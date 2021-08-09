import { combineReducers } from 'redux'

import cart from './cart'
import ui from './ui'
import countries from './countries'

// combining all reducer to root reducer (i.e root reducer is used for store creation)
const createRootReducer = () =>
  combineReducers({
    countries,
    cart,
    ui,
  })

export default createRootReducer
