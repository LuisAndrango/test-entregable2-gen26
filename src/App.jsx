import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loader from './components/Loader.jsx'
import images from './images/bg1.jpg'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const APY_KEY = "51b9c744e28b812060344aae4985b4fd"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APY_KEY}`

    axios.get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    
    <main className='bg-amber-500  min-h-screen text-white flex justify-center items-center font-principal-font p-2'>
  
           
      {
        weatherInfo ? <Weather weatherInfo={weatherInfo} /> : <Loader />}
      
    </main>
  )
}

export default App
