import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

export default function Navbar() {
  const navigate = useNavigate()
  const auth = useAuth()
  // const [active, setActive] = useState('')

  const [active, setActive] = useState('/')

  const goToPage = (to) => {
    navigate(to)
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  useEffect(() => {
    setActive(window.location.pathname)
  }, [navigate])

  return (
    <div>
        <div className="topnav">
            <span className={(active == '/' ? 'active' : '')} onClick={() => goToPage('/')}>Home</span>
            <span className={(active == '/ongkir' ? 'active' : '')} onClick={() => goToPage('/ongkir')}>Cek Ongkir</span>
            {
              !auth.user ?
              (<span className={(active == '/login' ? 'active' : '')} onClick={() => goToPage('/login')}>Login</span>) :
              (<span onClick={() => handleLogout()}>Logout</span>)
            }
        </div>
    </div>
  )
}
