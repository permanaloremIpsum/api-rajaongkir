import './App.css';
import { Routes, Route } from 'react-router-dom'
import ListProvinsi from './page/ListProvinsi';
import ListOngkir from './page/ListOngkir';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Login from './page/Login';
import { AuthProvider } from './components/auth';
import RequireAuth from './components/RequireAuth';

function App() {
  useEffect(() => {
    document.title = 'App Raja Ongkir'
  },[]
  )
  return (
    <AuthProvider>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListProvinsi/>} />
          <Route path='/ongkir' element={<RequireAuth><ListOngkir /></RequireAuth>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
