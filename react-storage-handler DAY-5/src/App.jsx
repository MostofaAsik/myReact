import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cosmetics from './components/Cosmetics/Cosmetics'
import Shoes from './components/Shoes/Shoes'
import Countries from './components/Countries/Countries'

function App() {


  return (
    <div className="App">

      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      {/* <Countries></Countries> */}

    </div>
  )
}

export default App
