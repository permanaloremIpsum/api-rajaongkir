import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export default function FormLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleLogin = (e) => {
    e.preventDefault()
    if(username == 'admin' && password == 123456){
        auth.login(username)
        navigate(redirectPath, {replace : true})
    }else{
        alert('Username dan Password salah!!')
    }
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
        <div className='space-input'>
            <label>Username</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Input Username"></input>
        </div>
        <div className='space-input'>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Input Password"></input>
        </div>
        <button type='submit' className='btn-login'>Login</button>
    </form>
  )
}
