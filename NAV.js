import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
let  NAV = () => {
  return (
    <div className='navbar'>
        <Link to="/">HOME</Link>
        <Link to="/cart">CART</Link>
    </div>
  )
}

export default NAV