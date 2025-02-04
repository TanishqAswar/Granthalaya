import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom'
import './Pages Css/PageNotFound.css'

const PageNotFound = () => {
  return (
    <Layout>
      <div className='page-not-found'>
        <div className='namaste-icon'>🙏</div>
        <h1>404 - Page Not Found</h1>
        <p className='vedic-quote'>
          "Do not be discouraged. Every step forward is a step closer to the
          goal." <br />
          <span>— Bhagavad Gita</span>
        </p>
        <NavLink to='/' className='try-again-button'>
          Try Again
        </NavLink>
      </div>
    </Layout>
  )
}

export default PageNotFound