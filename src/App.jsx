import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import Navbar from "./assets/components/Navbar";
import SearchBar from './assets/components/SearchBar';
import { Link } from 'react-router-dom';

function App() {

  const [region, setRegion] = useState("")
  
  const [theme, setTheme] = useState(false)
  
  useEffect(() => {
    
    
    
  
  
  }, [theme,region])
  
  
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response=>setData(response.data))
    .catch(error => {
      console.error(error)
    })

  }, [])
  
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    
    setInputText(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.name.common.toLowerCase().includes(inputText)
    }
})

  return (
    <div>
    <Navbar 
    theme={theme}
    setTheme={setTheme}
  />
  

  <SearchBar
    data={data}
    theme={theme}
    setData={setData}
    inputHandler={inputHandler}
    region={region}
    setRegion={setRegion}
  />

    <div className={theme == false ? 'w-[100%] bg-indigo-200 flex justify-center items-center flex-wrap gap-6':'w-[100%] bg-indigo-900 flex justify-center items-center  flex-wrap gap-6'}>


       {
        filteredData.map((element,index)=>(
          region == "" ?       
            <Link to={`/pays/${element.cca3}`}  style={{backgroundColor: theme==false ? "rgb(254 243 199)" :   "rgb(17 94 89)"}}  key={index} className={theme == false ? 'w-[300px] h-[380px] mt-8 pt-4 bg-teal-800 rounded-xl text-indigo-950 hover:text-indigo-800 duration-500 hover:translate-y-[-10px] hover:bg-lime-200 flex flex-col items-center justify-between shadow-black shadow-xl' :   'w-[300px] h-[380px] mt-8 pt-4 bg-teal-800 rounded-xl text-indigo-950 hover:text-indigo-800 duration-500 hover:translate-y-[-10px] hover:bg-lime-200 flex flex-col items-center justify-between shadow-white shadow-xl'}>
              <div  className='w-[100%] font-bold flex flex-col ps-5 justify-center items-start'>
                <p  style={{color: theme ? "beige" :   "black"}} className='text-[20px] mb-5 w-[100%]' >{element.name.common}</p>
                <p  className='text-sky-300' > {element.translations.rus.common}</p> 
                <p  style={{color: theme ? "beige" :   "black"}} className='text-[15px]' >Population: {element.population} civils</p>
                <p  style={{color: theme ? "beige" :   "black"}} className='text-[15px]' >Region: {element.continents} </p>
                <p  style={{color: theme ? "beige" :   "black"}} className='text-[15px]' >{element.capital ? `Capital: ${element.capital}`:"NO CAPITAL CITY"} </p>
              </div>

              <img className='w-[300px] h-[160px] rounded-b-xl'  src={element.flags.png} alt="" />
              
          </Link> : 

          element.region == region ? 
          <Link to={`/pays/${element.cca3}`}  style={{backgroundColor: theme==false ? "rgb(254 243 199)" :   "rgb(17 94 89)"}}  key={index} className={theme == false ? 'w-[300px] h-[380px] mt-8 pt-4 bg-teal-800 rounded-xl text-indigo-950 hover:text-indigo-800 duration-500 hover:translate-y-[-10px] hover:bg-lime-200 flex flex-col items-center justify-between shadow-black shadow-xl' :   'w-[300px] h-[380px] mt-8 pt-4 bg-teal-800 rounded-xl text-indigo-950 hover:text-indigo-800 duration-500 hover:translate-y-[-10px] hover:bg-lime-200 flex flex-col items-center justify-between shadow-white shadow-xl'}>
            <div  className='w-[100%] font-bold flex flex-col ps-5 justify-center items-start'>
              <p  style={{color: theme ? "beige" :   "black"}} className='text-[20px] mb-5 w-[100%]' >{element.name.common}</p>
              <p  className='text-sky-300' > {element.translations.rus.common}</p> 
              <p  style={{color: theme ? "beige" :   "black"}} className='text-[15px]' >Population: {element.population} civils</p>
              <p  style={{color: theme ? "beige" :   "black"}} className='text-[15px]' >Region: {element.continents} </p>
              <p  style={{color: theme ? "beige" :   "black"}} className='text-[15px]' >{element.capital ? `Capital: ${element.capital}`:"NO CAPITAL CITY"} </p>
            </div>

            <img className='w-[300px] h-[160px] rounded-b-xl'  src={element.flags.png} alt="" />
            
          </Link> : ""
        ))
       }

    </div>
    </div>
  )
}

export default App
