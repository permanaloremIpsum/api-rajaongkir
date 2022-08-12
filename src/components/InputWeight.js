import React from 'react'

export default function InputWeight({label, setWeight}) {
  return (
    <div className='space-input'>
        <label>{label}</label>
        <input onChange={(e) => setWeight(e.target.value)} type="number" placeholder="Berat Barang"></input>
    </div>
  )
}
