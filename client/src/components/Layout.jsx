import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AIHelper from './AIHelper'


const Layout = ({children}) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div>
      <Header cartCount={5}/>
      <main style={{minHeight:'80vh'}}>{children}</main>
      <Footer/>
      <AIHelper/>
    </div>
  )
}

export default Layout