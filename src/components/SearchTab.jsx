import React from 'react'
import 'remixicon/fonts/remixicon.css'

const SearchTab = () => {
  return (

    <div className='h-14 w-3xl   p-2  border-2 rounded-4xl  flex  flex-row place-items-center   justify-between ' >
      <div> <i className="ri-search-line"></i>   </div>
      <div>Quick Search Image </div>
      


      <button className=' h-11 w-28 bg-amber-500  text-amber-50 rounded-4xl '>Search</button>


    </div>
  )
}

export default SearchTab