import React from 'react'
import SearchTab from './SearchTab'

const Nevbar = () => {
  return (
    <div className=' h-22 w-full flex justify-between p-8 border-b-2  place-items-center '>
      <div className=' bg-black h-11  w-11  text-amber-50 border-radi rounded-full font-semibold '>logo</div>
       <SearchTab/>
      <button className=' bg-black h-11  w-72  text-amber-50 border-radi rounded-4xl  font-semibold'> POST IMAGE </button>
       </div>
  )
}

export default Nevbar