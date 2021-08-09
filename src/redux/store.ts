import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { AppState } from '../types/types'
import createRootReducer from './reducers'
import rootSaga from './sagas'

// initializing App state for store creation
const initState: AppState = {
  countries: {
    countries: [],
    filteredCountries: [],
  },
  cart: {
    cartCountries: [],
  },
  ui: {
    theme: {
      color: '',
    },
    showCartView: 'none',
    searchKeyWord: '',
    sorting: {
      sort: 'Ascending',
      filterOption: 'name',
    },
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()

  // combining middleware using Redux saga and redux thunk
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  // using redux dev tools when the project is in development phase
  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // creating store using all reducers, initial appState and applying middleware
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  // running saga
  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
