import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import {
  addFilteredCountries,
  getAllCountries,
} from '../redux/actions/countries'
import { AppState } from '../types/types'

const useCountries = () => {
  const dispatch = useDispatch()

  // getting values from AppState (i.e : searchKeyword, sort, filterOption)
  const searchKeyword = useSelector((state: AppState) => state.ui.searchKeyWord)
  const sort = useSelector((state: AppState) => state.ui.sorting.sort)
  const filterOption = useSelector(
    (state: AppState) => state.ui.sorting.filterOption
  )

  // getting countries data from appState
  const data = useSelector((state: AppState) => state.countries.countries)
  const countries = useSelector(
    (state: AppState) => state.countries.filteredCountries
  )

  // dispatching action for fetching data from Api
  useEffect(() => {
    dispatch(getAllCountries())
  }, [])


  // filtering when searchKeyword is changed
  useEffect(() => {
    const filteredcountries = data.filter((country) =>
      country.name.toLowerCase().includes(searchKeyword.toLowerCase())
    )
    dispatch(addFilteredCountries(filteredcountries))
  }, [searchKeyword])

  // sorting by ascending or descending order
  // sorting by given filter options (i.e name, languages, population, regions)
  useEffect(() => {
    if (sort === 'Ascending') {
      const sortedCountries = _.orderBy(countries, [filterOption], ['asc'])
      dispatch(addFilteredCountries(sortedCountries))
    } else if (sort === 'Descending') {
      const sortedCountries = _.orderBy(countries, [filterOption], ['desc'])
      dispatch(addFilteredCountries(sortedCountries))
    }
  }, [sort, filterOption])

}

export default useCountries
