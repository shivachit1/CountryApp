import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TiArrowRightThick } from 'react-icons/ti'

import ThemeContext from '../../ThemeContext'
import CartItem from './CartItem'
import { toggleCartView } from '../../redux/actions/ui'
import { AppState } from '../../types/types'
import './index.css'

const CartView = () => {
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)

  const cartCountries = useSelector((state: AppState) => state.cart.cartCountries)
  const showCart = useSelector((state: AppState) => state.ui.showCartView)

  // toggling cartview
  const changeCartView = () => {
    if (showCart === 'none') {
      dispatch(toggleCartView('inline'))
    } else {
      dispatch(toggleCartView('none'))
    }
  }

  return (
    <div style={{ display: showCart }}>
      <div className="cartView" style={{ backgroundColor: theme.color }}>
        <div className="header">
          <h3>Your shopping cart</h3>
          <TiArrowRightThick className="react-icon" onClick={() => changeCartView()} />
        </div>
        <div className="cart-items-container">
          {cartCountries.map((country) => (
            <CartItem
              key={country.name}
              flag={country.flag}
              name={country.name}
              languages={country.languages}
              population={country.population}
              region={country.region}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CartView
