import React, { useState } from 'react'
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp"

const Weather = ({ weatherInfo }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    }
    return (

        <section className='text-center grid gap-6'>
            
            <form className='max-w-max mx-auto p-10 ' >
            <h2 className='text-1xl p-2'>Search City</h2>

                <div className='flex justify-center rounded-md overflow-hidden'>
                    <input type="text" className='text-black p-2 outline-none' />
                    <button className='bg-black-200 p-1'>Search</button>
                </div>
            </form>

            <h2 className='font-bold text-4xl'>{weatherInfo.name}, {weatherInfo?.sys.country}</h2>

            <section className='grid gap-4 sm:grid-cols-[1fr_auto]'>
                {/*Sección arriba */}

                <article className="bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center">

                    <h3 className='col-span-2 capitalize'>{weatherInfo?.weather[0].description}</h3>

                    <span className='text-4xl'> {isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) :
                        kelvinToFahrenheit(weatherInfo?.main.temp)} </span>

                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt='' />
                    </div>

                </article>
                {/*Sección abajo */}

                <section className="bg-white/70 p-2 py-6 rounded-3xl grid grid-cols-3 
                justify-items-center sm:grid-cols-1 sm:items-center">
                    <article className='flex gap-2 sm:items-center'>
                        <div>
                            <img src='/images/wind.png' alt='' />
                        </div>
                        <span className=''>{weatherInfo?.wind.speed} m/s</span>
                    </article>


                    <article className='flex gap-2'>
                        <div>
                            <img src='/images/humidity.png' alt='' />
                        </div>
                        <span>{weatherInfo?.main.humidity} %</span>
                    </article>


                    <article className='flex gap-2'>
                        <div>
                            <img src='/images/pressure.png' alt='' />
                        </div>
                        <span>{weatherInfo?.main.pressure} hPa</span>
                    </article>

                </section >
            </section>

            <button onClick={handleChangeTemp}>Change F / C</button>

        </section>
    )
}
export default Weather