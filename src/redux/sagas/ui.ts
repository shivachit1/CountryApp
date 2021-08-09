import { takeLatest } from 'redux-saga/effects'

import { CHANGE_APP_THEME, ThemeChangeAction } from '../../types/types'

// saving theme to localStorage
function* saveThemeToLocalStorage(action: ThemeChangeAction) {
  yield localStorage.setItem('currentTheme',JSON.stringify(action.payload.theme))
}

// gets the latest dispatch on CHANGE_APP_THEME
export default [
  takeLatest(CHANGE_APP_THEME, saveThemeToLocalStorage)
]
