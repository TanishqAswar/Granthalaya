import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext() // has Provider and Consumer->alternative useContext

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
  })

  useEffect(()=>{
    const parsedData = JSON.parse(localStorage.getItem('auth'));
    if(parsedData){
      setAuth({
        ...auth,
        user: parsedData.user,
        token: parsedData.token,
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
      {/* This is used to wrap the whole application so to make  */}
    </AuthContext.Provider>
  )
}

// custom hook
const useAuth = () =>  useContext(AuthContext)

export { useAuth, AuthProvider }
