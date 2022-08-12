import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ListProvinsi() {
    const [provinsi, setProvinsi] = useState([])

    const getProvinsi = () => {
        axios.get('http://localhost:3011/provinsi')
        .then(res => {
            setProvinsi(res.data.rajaongkir.results)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        getProvinsi()
    }, [])
    
    return (
        <div>
            <h1>List Provinsi</h1>
            <table className='table'>
                <tr>
                    <th>ID Provinsi</th>
                    <th>Nama Provinsi</th>
                </tr>
                {
                    provinsi.length ?
                    provinsi.map((prov, idx) => (
                        <tr key={idx}>
                            <td>{prov.province_id}</td>
                            <td>{prov.province}</td>
                        </tr>
                    )) : 'Loading...'
                }
            </table>
        </div>
    )
}
