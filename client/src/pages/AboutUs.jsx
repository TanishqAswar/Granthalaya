import React from 'react'
import Layout from '../components/Layout'
import './Pages Css/AboutUs.css'


const AboutUs = () => {
  return (
    <Layout>
      <div className='about-us'>
        <div className='about-header'>
          <h1>About Granthalaya</h1>
          <p>"Enlightening minds through spiritual wisdom."</p>
        </div>
        <div className='about-content'>
          <section className='about-section'>
            <h2>Who We Are</h2>
            <p>
              Welcome to Granthalaya, your trusted source for spiritual
              knowledge. We offer a wide collection of timeless spiritual books
              that inspire, enlighten, and guide individuals on their path to
              self-realization and inner peace.
            </p>
          </section>
          <section className='about-section'>
            <h2>Our Mission</h2>
            <p>
              Our mission at Granthalaya is to make spiritual wisdom accessible
              to all. Through our carefully curated collection, we aim to help
              individuals explore deeper connections with themselves, the world,
              and the divine.
            </p>
          </section>
          <section className='about-section'>
            <h2>Our Vision</h2>
            <p>
              We envision a world where spiritual knowledge empowers individuals
              to live with purpose, compassion, and understanding. Granthalaya
              strives to inspire positive change and a deeper connection to
              higher values through our books.
            </p>
          </section>
        </div>
        <div className='about-footer'>
          <h3>Contact Us</h3>
          <p>Email: info@granthalaya.com</p>
          <p>Phone: +91 123 456 7890</p>
          <p>Address: Granthalaya HQ, Vrindavan, India</p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
