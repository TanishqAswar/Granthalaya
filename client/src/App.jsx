import { Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import HomePage from './pages/HomePage'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Auth/Register'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Login from './pages/Auth/Login'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
