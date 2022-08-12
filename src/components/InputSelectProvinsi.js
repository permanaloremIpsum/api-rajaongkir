import React from 'react'

export default function InputSelectProvinsi({label, provinsi, setProvinsi}) {
  return (
    <div className='space-input'>
        <label>{label}</label>
        <select name="country" onChange={(e) => setProvinsi(e.target.value)}>
            <option>{`--Pilih ${label}--`}</option>
            {
                provinsi.map((prov, idx) => (
                    <option key={idx} value={prov.province_id}>{prov.province}</option>
                ))
            }
        </select>
    </div>
  )
}
