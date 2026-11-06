import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const SearchTab = ({ }) => {
  const [inputValue, setImputValue] = useState([]);
  return (

    <div className='h-14 w-3xl   p-2  border-2 rounded-4xl  flex  
    flex-row place-items-center   justify-between '  >
      <div className='text-4xl'> <i className="ri-search-line"></i>   </div>
      
      <div className=' bg-amber-400 grow'>
        <input
          type='text '
          placeholder='Quick Search Image '
          value={inputValue} onChange={() => {
            setImputValue(e.target.value)
          }}> </input>

      </div>



      <button className=' h-11 w-28 bg-amber-500  text-amber-50 rounded-4xl '>Search</button>


    </div>
  )
}

export default SearchTab