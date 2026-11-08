import React from 'react'
import SearchTab from './SearchTab'
import { Link, useNavigate } from 'react-router-dom'
 


//react router dom
//axios

const Nevbar = () => {

 
  const navigate = useNavigate();



  return (
    <div className=' h-22 w-full flex justify-between p-8 border-b-2  place-items-center fixed  '>
      <div className=' bg-black h-11  w-11  text-amber-50 border-radi rounded-full font-semibold '>logo</div>
      <SearchTab />


      <button className=' bg-black h-11  w-72  text-amber-50 border-radi rounded-4xl  
        font-semibold flex   justify-center items-center '
        onClick={() =>{

          navigate('/post')

        }} >  Post Image 
      </button>

       

    </div>
    


  )
}

export default Nevbar