import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({ type, text, path }) => {
  switch (type) {
    case 'nav':
      return (
        <Link to={path} className='nav-link'>
          {text}
        </Link>
      )
    default:
      return `Button has an invalid type prop`
  }
}
