import React from 'react'

const Image = (props) => {
   return (
        <div className='flex p-7'>
            <div className='h-96 w-96  flex  bg-mist-950 items-center p-3  flex-col   border-b-gray-600 border-2 rounded-2xl 
            
             bg-cover bg-center  '>
                
                <div className='h-72 w-87  m-3 border-2 bg-amber-50 border-gray-600 rounded-2xl'> {props.image}</div>
                
                <div className='  flex w-87 h-13  justify-between p-2'>
                   
                    <div className=' justify-start w-2xl text-black text-2xl' >{props.title}</div>
                   
                    <button className=' bg-red-700 text-amber-50 w-1/5 text-center text-3xl '>
                        <i className="ri-delete-bin-6-line"></i>
                    
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Image