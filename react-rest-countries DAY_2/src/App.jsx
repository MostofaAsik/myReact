// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'


function App() {


  return (
    <div className="App">
      <Countries></Countries>


      {/* <LoadCountries></LoadCountries> */}
    </div>
  )
}







// function LoadCountries() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Visit All country</h1>
//       <h2>Available countries:{countries.length}</h2>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h1>countryName:{props.name}</h1>
//       <h4>Population:{props.population}</h4>
//     </div>
//   )
// }

export default App
