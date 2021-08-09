import { all } from 'redux-saga/effects'

import cartSagas from './cart'
import uiSagas from './ui'

// combining all saga actions to root saga
export default function* rootSaga() {
  yield all([...cartSagas, ...uiSagas])
}
