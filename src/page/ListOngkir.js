import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InputSelectProvinsi from '../components/InputSelectProvinsi'
import InputSelectCity from '../components/InputSelectCity'
import InputWeight from '../components/InputWeight'
import InputSelectExpedition from '../components/InputSelectExpedition'

export default function ListOngkir() {
  const [provinsi, setProvinsi] = useState([])
  const [kotaAsal, setKotaAsal] = useState([])
  const [kotaTujuan, setKotaTujuan] = useState([])
  const [getProvAsal, setGetProvAsal] = useState()
  const [getProvTujuan, setGetProvTujuan] = useState()
  const [getIdKotaAsal, setGetIdKotaAsal] = useState()
  const [getIdKotaTujuan, setGetIdKotaTujuan] = useState()
  const [getWeight, setGetWeight] = useState(0)
  const [getEkspedisi, setGetEkspedisi] = useState()
  const [cost, setCost] = useState([])

  const getProvinsi = () => {
      axios.get('http://localhost:3011/provinsi')
      .then(res => {
          setProvinsi(res.data.rajaongkir.results)
      })
      .catch(function (error) {
          console.log(error);
      })
  }

  const getKotaAsal = () => {
    axios.get(`http://localhost:3011/kota/${getProvAsal}`)
    .then(res => {
      setKotaAsal(res.data.rajaongkir.results)
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  const getKotaTujuan = () => {
    axios.get(`http://localhost:3011/kota/${getProvTujuan}`)
    .then(res => {
      setKotaTujuan(res.data.rajaongkir.results)
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  const getCost = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3011/ongkir', {
      origin: getIdKotaAsal,
      destination: getIdKotaTujuan ,
      weight: getWeight,
      courier: getEkspedisi
    })
    .then(res => {
      setCost(res.data.rajaongkir.results[0].costs)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
      getProvinsi()
  }, [])

  useEffect(() => {
    getKotaAsal()
  }, [getProvAsal])

  useEffect(() => {
    getKotaTujuan()
  }, [getProvTujuan])

  return (
    <div>
      <h1>Cek Ongkir</h1>
      <form onSubmit={(e) => getCost(e)} className="space-form">
        <InputSelectProvinsi label={'Provinsi Asal'} provinsi={provinsi && provinsi} setProvinsi={setGetProvAsal}/>
        <InputSelectCity label={'Kota Asal'} city={kotaAsal && kotaAsal} setCity={setGetIdKotaAsal}/>
        <InputSelectProvinsi label={'Provinsi Tujuan'} provinsi={provinsi && provinsi} setProvinsi={setGetProvTujuan}/>
        <InputSelectCity label={'Kota Tujuan'} city={kotaTujuan && kotaTujuan} setCity={setGetIdKotaTujuan}/>
        <InputWeight label={"Berat barang"} setWeight={setGetWeight}/>
        <InputSelectExpedition label={"Ekspedisi"} setEkspedisi={setGetEkspedisi}/>
        <button 
          type="submit" 
          disabled={getProvAsal && getIdKotaAsal && getProvTujuan && getIdKotaTujuan && getWeight && getEkspedisi ? false : true}
        >
          Cek Ongkir
        </button>
      </form>
      {
        cost.length !=0 &&
        <table className='table'>
          <tr>
              <th>Service</th>
              <th>Deskripsi</th>
              <th>Biaya Ongkir</th>
              <th>Estimasi Waktu</th>
          </tr>
          {
              cost.length ?
              cost.map((item, idx) => (
                  <tr key={idx}>
                      <td>{item.service}</td>
                      <td>{item.description}</td>
                      <td>{`Rp ${item.cost[0].value}`}</td>
                      <td>{`${item.cost[0].etd} hari`}</td>
                  </tr>
              )) : 'Loading...'
          }
        </table>
      }
    </div>
  )
}
