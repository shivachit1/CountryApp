import React from 'react'

// exporting themes values
export const themes = {
  black: {
    color: '#333333',
  },
  green: {
    color: '#3D9F21',
  },
  red: {
    color: '#EA4856',
  },
  blue: {
    color: '#3D70B8',
  },
  orange: {
    color: '#ff8500',
  },
}

// exporting context
export default React.createContext({
  theme: themes.black,
  switchTheme: (themeName: string) => {},
})
