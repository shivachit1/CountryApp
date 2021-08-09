import React, { useState } from 'react'
import Routes from './Routes'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import ThemeContext, { themes } from './ThemeContext'
import useCountries from './Hooks/useCountries'
import useCart from './Hooks/useCart';

import CartButton from './components/MyCart/CartButton'
import { changeAppTheme } from './redux/actions/ui'
import './App.css'
import Themes from './components/Themes/Themes'

export default function App() {
  // using custom hook
  useCountries()
  // using custom hooks to get cart data from localStorage
  useCart()
  const dispatch = useDispatch()

  // assigning default theme
  const currentTheme = {
    color: themes.black.color,
  }

  // getting last saved theme from localstorage
  const themeJson = localStorage.getItem('currentTheme')
  let savedTheme = themeJson !== null ? JSON.parse(themeJson) : ''
  if (savedTheme !== '') {
    currentTheme.color = savedTheme.color
  }

  // context state to pass to children component
  //use for passing theme value and function to switch between different themes
  const [context, setContext] = useState({
    theme: currentTheme,
    switchTheme: (themeName: string) => {
      setContext((current) => ({
        ...current,
        theme: {
          color: themeName,
        },
      }))

      currentTheme.color = themeName
      dispatch(changeAppTheme(currentTheme))
    },
  })

  return (
    <ThemeContext.Provider value={context}>
      <div
        className="fixed-nav"
        style={{ backgroundColor: context.theme.color }}
      >
        <Link className="link" to="/">
          <h3>Countries App</h3>
        </Link>
        <Themes/>
        <CartButton/>
      </div>
      <Routes/>
    </ThemeContext.Provider>
  )
}
