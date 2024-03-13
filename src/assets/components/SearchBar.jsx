import React from 'react'


export default function SearchBar(props) {

  

  return (
    <div className='w-[100%] h-[80px] flex justify-center gap-[50%] items-center bg-gray-100 '>
        <input placeholder="🔎 Search..." className='h-[60%] w-[250px] p-4 shadow-gray-500 shadow-lg' onChange={(e)=> {props.inputHandler(e)}} type="text" />

        <select name="" id="" onChange={(e)=> {e.target.value, props.setRegion(e.target.value)}}>
            <option value="">Filter by Region</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Americas">America</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
        </select>
    </div>

    

  )
}
