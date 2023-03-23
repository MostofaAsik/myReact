import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {


  return (
    <div className="App">

      {/* <h2>ALL Country Name </h2>
      <Countries></Countries> */}

      <District name='Jhenaidah' speciality='Bambo'></District>
      <District name='Jessore' speciality='Date'></District>
      <District name='Kushtia' speciality='Shirt'></District>


    </div>
  )
}

function District(props) {
  const [power, setPower] = useState(1)
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower)
  }
  return (
    <div style={{ margin: "20px", background: "red", padding: "10px" }}>
      <h1>Name:{props.name}</h1>
      <p>Specility:{props.speciality}</p>
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost Power</button>
    </div>
  )
}


export default App
