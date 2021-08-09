import React from 'react'

import { FlagProps } from '../../types/types'
import './index.css'

const Flag = ({ flag }: FlagProps) => {
  return (
    <div>
      <img className="img" src={flag} alt="" />
     
    </div>
  )
}

export default Flag
