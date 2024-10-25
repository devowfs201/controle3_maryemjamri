import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar nav-light'>
       
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/home">home</Link>
             
            </li>
            <li className='nav-item'>
            <Link className="nav-link" to="/">Users List</Link>
            </li>
         
          </ul>
      
        </nav>
      
    </div>
  )
}

export default Navbar
