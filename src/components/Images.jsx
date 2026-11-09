import React from 'react'
import DeleteImage from './DeleteImage'

const Image = ({ id, title, description, tag, category, image, originalUrl, thumbnailUrl }) => {
    return (
        <div className='flex p-7'>
            <div className='h-96 w-96  flex items-center p-3  flex-col  border-gray-600
             border-4 rounded-2xl bg-cover bg-center  '>

                <div className='h-72 w-87  m-3   bg-amber-500 rounded-2xl 
                 bg-[url( ${thumbnailUrl })]   '>image here </div>

                <div className='  flex w-87 h-13  justify-between p-2'>

                    <div className=' justify-start w-2xl text-black text-2xl bg-cover bg-center ' >{title}  title</div>
                    {/* <div className=' justify-start w-2xl text-black text-2xl' > {description}</div>
                    <div className=' justify-start w-2xl text-black text-2xl' >{ tag}</div>
                    <div className=' justify-start w-2xl text-black text-2xl' >{category}</div> */}

                    <button className=' bg-red-700 text-amber-50 w-1/5 text-center text-3xl '>
                        <i className="ri-delete-bin-6-line"
                            onDoubleClick={() => {
                                <DeleteImage />
                            }}>

                        </i>

                    </button>
                </div>

            </div>
        </div>

    )
}

export default Image