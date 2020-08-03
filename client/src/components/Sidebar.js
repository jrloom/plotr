import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks as links } from '../constants/navLinks'
import { Button } from './Button'
import logo from '../assets/300.svg' // ! replace

const Sidebar = () => {
  return (
    <header className='sidebar'>
      <Link to='/' className='sidebar__logobox'>
        <img src={logo} alt='Plotr logo' className='sidebar__logo' />
      </Link>
      <nav className='sidebar__nav'>
        {links.map(link => (
          <Button
            key={link.id}
            type={'nav'}
            path={link.path}
            text={link.name}
          />
        ))}
      </nav>
    </header>
  )
}

export default Sidebar
