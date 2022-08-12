import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export default function RequireAuth({children}) {
  const auth = useAuth()
  const location = useLocation()

  if(!auth.user){
    alert('Silahkan Login Terlebih Dahulu!!..')
    return <Navigate to={'/login'} state={{path: location.pathname}}/>
  }

  return children
}
