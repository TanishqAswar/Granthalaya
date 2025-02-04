import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section about'>
          <h2 className='footer-logo'>
            <img
              src='../src/assets/morpunk.png' /* Ensure this matches your logo's file location */
              alt='Morpank Logo'
              className='morpank-logo'
            />
            Hari Bol !!!
          </h2>
          <p>
            Spreading joy, love, and devotion. Connect with us and explore the
            divine journey.
          </p>
        </div>
        <div className='footer-section links'>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/services'>Services</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className='footer-section social'>
          <h3>Follow Us</h3>
          <div className='social-links'>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              Facebook
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              Twitter
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              Instagram
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2025 Hare Krishna | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
