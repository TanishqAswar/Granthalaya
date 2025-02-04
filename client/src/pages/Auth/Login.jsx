import React, { useState } from 'react'
import { toast } from 'react-toastify'
import '../Pages Css/Login.css'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'

//http://localhost:5173/
const Login = () => {
  const [auth, setAuth] = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('Login form submitted:', formData)

      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      )

      if (res.data.success) {
        toast.success('Login Successful! 🙏')
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })

        localStorage.setItem('auth', JSON.stringify(res.data))
        
        navigate('/')
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
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
              required
            />
          </div>

          <button type='submit' className='login-button'>
            Login
          </button>
          <button type='submit' className='back-button'>
            Back
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login
