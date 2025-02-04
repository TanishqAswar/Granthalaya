import React, { useContext, useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem('auth')
  }

  return (
    <nav className='navbar'>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <div className='navbar-logo'>
          <img
            src='../src/assets/morpunk.png' // Ensure this matches your file location
            alt='Morpank Logo'
            className='morpank-logo'
          />
          Hare Krishna
        </div>
      </NavLink>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        {!auth.user ? (
          <>
            <div className='auth-buttons'>
              <NavLink to='/login' className='auth-link login-link'>
                Login
              </NavLink>
              <NavLink to='/register' className='auth-link register-link'>
                Register
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <NavLink to='/login' className='auth-link logout-link' onClick={handleLogout}>
              Logout
              {/* 1234567890 */}
            </NavLink>
          </>
        )}
      </div>
      <div className='navbar-toggle' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      {/* Floating Cart Icon */}
      <NavLink to='/cart' className='cart-icon'>
        <div className='cart-container'>
          🛒
          {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
        </div>
      </NavLink>
    </nav>
  )
}

export default Header
