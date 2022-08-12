import React from 'react'

const expedition = ['jne', 'pos', 'tiki']

export default function InputSelectExpedition({label, setEkspedisi}) {


  return (
    <div className='space-input'>
        <label>{label}</label>
        <select name="country" onChange={(e) => setEkspedisi(e.target.value)}>
            <option>{`--Pilih ${label}--`}</option>
            {
                expedition.map((exp, idx) => (
                    <option key={idx} value={exp}>{exp}</option>
                ))
            }
        </select>
    </div>
  )
}
