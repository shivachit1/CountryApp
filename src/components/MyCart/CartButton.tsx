import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiCart } from 'react-icons/bi'

import ThemeContext from '../../ThemeContext'

import CartView from './CartView'
import { toggleCartView } from '../../redux/actions/ui'
import { AppState } from '../../types/types'
import './index.css'

const CartButton = () => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  const cartCountries = useSelector((state: AppState) => state.cart.cartCountries)
  const showCart = useSelector((state: AppState) => state.ui.showCartView)

  // dispatching to hide cartview if cart doesnt contains any country
  if (cartCountries.length === 0) {
    //dispatch(toggleCartView('none'))
  }

  // toggling the cart view
  const changeCartView = () => {
    if (showCart === 'none') {
      dispatch(toggleCartView('inline'))
    } else {
      dispatch(toggleCartView('none'))
    }
  }

  const style = { 
    color: theme.color
  };

  return (
    <div>
      <div className="cart">
        <BiCart 
          className="icon"
          height="lg" 
          tabIndex={0}
          onClick={() => changeCartView()}
          onKeyDown={() => changeCartView()}
        />
        <span style={style} >{cartCountries.length}</span>
      </div>
      <CartView />
    </div>
  )
}

export default CartButton
