import React, { useState } from 'react'
import '../Pages Css/Register.css'
import { toast } from 'react-toastify'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Layout from '../../components/Layout'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/register`,
        formData
      )

      if (res.data.success) {
        toast.success(`${res.data.message}`)
        setTimeout(() => navigate('/'), 2000) // Delay redirect
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <Layout>
      <div className='register-container'>
        <h2>Welcome</h2>
        <form onSubmit={handleSubmit} className='register-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              aria-label='Enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              aria-label='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              aria-label='Enter your password'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <textarea
              id='address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              placeholder='Enter your address'
              aria-label='Enter your address'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Enter your phone number'
              aria-label='Enter your phone number'
              required
            />
          </div>
          <button type='submit' className='register-button'>
            Register
          </button>
          <NavLink to='/'>
            <button type='button' className='back-button'>
              Back
            </button>
          </NavLink>
        </form>
      </div>
    </Layout>
  )
}

export default Register
