import React from 'react'
import { useDispatch } from 'react-redux'
import { TiBackspace } from 'react-icons/ti'

import { Country } from '../../types/types'
import { removeFromCart } from '../../redux/actions'
import './index.css'

const CartItem = ({ flag, name, languages, population, region }: Country) => {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
      <img className="image" src={flag} alt="" />
      <p>{name}</p>
      <TiBackspace className="react-icon" onClick={() => dispatch(removeFromCart(name))} />
    </div>
  )
}

export default CartItem
