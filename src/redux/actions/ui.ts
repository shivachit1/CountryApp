import {
  CHANGE_APP_THEME,
  TOGGLE_CART_VIEW,
  SEARCH_KEYWORD,
  SORT_COUNTRIES_BY_ALPHABETICAL,
  SORT_COUNTRIES_BY_FILTEROPTION,
  UiActions,
  Theme,
} from '../../types/types'

// action for changing App theme
export function changeAppTheme(theme: Theme): UiActions {
  return {
    type: CHANGE_APP_THEME,
    payload: {
      theme: theme,
    },
  }
}

// action for toggling cart View (i.e payload: {"none" or inline})
export function toggleCartView(display: string): UiActions {
  return {
    type: TOGGLE_CART_VIEW,
    payload: {
      showCartView: display,
    },
  }
}

// action for handling search input
export function doSearching(searchKeyWord: string): UiActions {
  return {
    type: SEARCH_KEYWORD,
    payload: {
      searchKeyWord,
    },
  }
}

// action for handling sorting (i.e Ascending ot Descending)
export function doAlphabeticalSorting(sort: string): UiActions {
  return {
    type: SORT_COUNTRIES_BY_ALPHABETICAL,
    payload: {
      sort: sort,
    },
  }
}

// action for sorting countries data by name, languages, population, or region
export function doFilterOptionSorting(
  filterOption: string
): UiActions {
  return {
    type: SORT_COUNTRIES_BY_FILTEROPTION,
    payload: {
      filterOption: filterOption,
    },
  }
}
