import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Country } from '../types/types'
import { addAllCountriesToCart } from '../redux/actions/cart';

const useCart = () => {
    const dispatch = useDispatch()

    const getDataFromLocalStorage = () => {
        // getting cart list from localStorage
        const cartJson = localStorage.getItem('cart')
        let savedCartCountries: Country[] =
            cartJson !== null ? JSON.parse(cartJson) : []

        // dispatching localSotage cartList to redux store
        dispatch(addAllCountriesToCart(savedCartCountries))
    }

    // dispatching action for getting data from local storage
    useEffect(() => {
        getDataFromLocalStorage()
    }, [dispatch])

   
}

export default useCart
