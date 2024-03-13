import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Info() {
const {id}= useParams()
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all')
      .then(response=>setData(response.data))
      .catch(error => {
        console.error(error)
      })
  
    }, [])

  return (
    <div className='w-[100%] h-[100vh]'>
        <Navbar 


        />
        <Link to={"/"} className=' ps-[130px] '>
            <button className="w-[120px] h-[50px] relative  shadow-slate-500 shadow-md mt-6 rounded-md">⏪Back</button>
        </Link>
    
        {data.map((value, index) => {

                return (
                    value.cca3 == id ?
                    <div key={index} id='bottom' className='w-[100%] h-[70%] flex justify-around items-center '>

        <div className='w-[50%] h-[100%]  flex justify-center items-center'>
            <img className='w-[90%] h-[400px] border-[2px] border-black' src={value.flags.png} alt="" />
        </div>

        <div className='w-[50%] p-12 h-[100%] '>
            <p id='title' className='text-gray-800 text-[30px] font-bold'>{value.name.common}</p>
            <div className='flex mt-7 justify-between'>
                <div className='flex flex-col gap-[50px]'>
                    <p className='text-[18px] text-gray-900 font-medium'> <span className='text-[20px] font-bold'>Native Name:</span> {value.name.official}</p>
                    <p className='text-[18px] text-gray-900 font-medium'><span className='text-[20px] font-bold'>Population:</span> {value.population}</p>
                    <p className='text-[18px] text-gray-900 font-medium'><span className='text-[20px] font-bold'>Region:</span> {value.region ? value.region : "No Region"}</p>
                    <p className='text-[18px] text-gray-900 font-medium'><span className='text-[20px] font-bold'>Sub Region:</span> {value.subregion ? value.subregion : "No SubRegion"}</p>
                    <p className='text-[18px] text-gray-900 font-medium'><span className='text-[20px] font-bold'>Capital:</span> {value.capital? value.capital : "No Capital"}</p>
                </div>
                <div className='flex flex-col gap-[70px]'>
                    <p className='text-[18px] text-gray-900 font-medium'><span className='text-[20px] font-bold'>Top Level Domain:</span> {value.tld.join(" - ")} </p>
                    <p className='text-[18px] text-gray-900 font-medium'><span className='text-[20px] font-bold'>Currencies: </span> {value.currencies ? Object.values(value.currencies)[0].name : "No Currencies"}</p> 
                    <p className='text-[18px] text-gray-900 font-medium'><span className='text-[20px] font-bold'>Languages:</span> {value.languages ?   Object.values(value.languages).join(", ") : "No Languages"}</p>
                </div>
                
            </div>
            
            <div className='flex flex-wrap items-center gap-7 mt-7'>
              <span className='text-[20px] font-bold'>Borders:</span> 
                {
                  value.borders ? 
                  value.borders.map((border,key)=> {
                    return(
                      value.cca3 == id &&
                    <Link key={key} to={`/api-pays/${(Object.values(border).join(""))}`} className='text-[18px] text-center text-gray-900 font-medium'>
                      
                        {Object.values(border)}
                        
                    </Link> 
                    )
                  })
                  : <p className='text-[18px] text-gray-900 font-medium'>NO BORDERS</p>
                  
                }
              </div>

     

        </div>

        </div>: ''
                )
                    })}
       

        
    </div>
  )
}
