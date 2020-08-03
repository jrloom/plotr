import React from 'react'
import Pages from './Pages'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Pages />
    </div>
  )
}

export default Layout
