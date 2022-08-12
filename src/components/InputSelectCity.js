import React from 'react'

export default function InputSelectCity({label, city, setCity}) {
  return (
    <div className='space-input'>
        <label>{label}</label>
        <select name="country" onChange={(e) => setCity(e.target.value)}>
            <option>{`--Pilih ${label}--`}</option>
            {
                city.map((ct, idx) => (
                    <option key={idx} value={ct.city_id}>{ct.city_name}</option>
                ))
            }
        </select>
    </div>
  )
}
