import {
  CHANGE_APP_THEME,
  TOGGLE_CART_VIEW,
  SEARCH_KEYWORD,
  UiState,
  UiActions,
  SORT_COUNTRIES_BY_FILTEROPTION,
  SORT_COUNTRIES_BY_ALPHABETICAL,
} from '../../types/types'

// initial state for handling UI state
const defaultState: UiState = {
  theme: {
    color: '',
  },
  showCartView: 'none',
  searchKeyWord: '',
  sorting: {
    sort: 'Ascending',
    filterOption: 'name',
  },
}

export default function ui(state = defaultState, action: UiActions): UiState {
  switch (action.type) {
  // changing App theme
  case CHANGE_APP_THEME: {
    return {
      ...state,
      theme: action.payload.theme,
    }
  }
  // changing UI state for togglling Cart view (i.e value: "none" or "inline")
  case TOGGLE_CART_VIEW: {
    return {
      ...state,
      showCartView: action.payload.showCartView,
    }
  }
  // changing UI state on search input
  case SEARCH_KEYWORD: {
    return {
      ...state,
      searchKeyWord: action.payload.searchKeyWord,
    }
  }

  // changing UI state if user choose sorting (i.e Ascending or Descending)
  case SORT_COUNTRIES_BY_ALPHABETICAL: {
    return {
      ...state,
      sorting: {
        sort: action.payload.sort,
        filterOption: state.sorting.filterOption,
      },
    }
  }

  // changing UI state if user choose sorting filterOption (i.e name, population, languages or region)
  case SORT_COUNTRIES_BY_FILTEROPTION: {
    return {
      ...state,
      sorting: {
        sort: state.sorting.sort,
        filterOption: action.payload.filterOption,
      },
    }
  }

  default:
    return state
  }
}
