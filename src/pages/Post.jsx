import React from 'react'

const Post = () => {
    return (
        <div className=' flex justify-center  flex-col items-center  m-11'>
            <div className='text-center'> <h1 className='text-4xl  '>Image Details</h1> </div>
            <div className=' flex  justify-baseline p-7 pt-15 flex-col  bg-amber-600 text-cyan-50 h-160 rounded-3xl  w-5/12'>

                <form className=' flex justify-evenly gap-9 text-2xl flex-col' >

                    <div className=' bg-amber-50 text-black   rounded-1.5xl'>
                        <label >Title : </label>
                        <input type='text' placeholder='Enter image title' >
                        </input>

                    </div>

                    <div className=' bg-amber-50 text-black   rounded-1.5xl'>

                        <label >Description : </label>
                        <input type='text' placeholder='Enter image Description' >
                        </input>
                    </div>

                    <div className=' bg-amber-50 text-black   rounded-1.5xl'>
                        <label >Tag : </label>
                        <input type='text' placeholder='Enter image tag' >
                        </input>
                    </div>

                    <div className=' bg-amber-50 text-black   rounded-1.5xl'>

                        <label >Caegory : </label>
                        <input type='text' placeholder='Enter image category' >
                        </input>
                    </div>

                    <div className=' text-amber-600  items-center   '>
                        <button className=' h-11  w-72 bg-amber-50  border-radi rounded-4xl  
        font-semibold flex   justify-center items-center  ' >upload Image</button>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default Post