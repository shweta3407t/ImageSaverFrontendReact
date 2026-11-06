import React, { useState } from 'react'
import axios from 'axios'
import Image from '../components/Images';

const Post = () => {

    //form data
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [Category, setCategory] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);


    //manage file function
    const manageFiles = (e) => {
          if (e.target.files && e.target.files.length > 0) {
    setSelectedFile(e.target.files[0]);
  }
    }


    //upload function
    const uploadImage = async (event) => {
        event.preventDefault();
 

        if (!selectedFile) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tag', tag);
        formData.append('category', Category);
        formData.append('file', selectedFile)


        const url = "http://localhost:8080/api/image/upload";

        console.log("response k pass")
        try {
            console.log("11111111111111")
            let response = await axios.post(url, formData);

            console.log("sssssssssssss aa gaya ")
            console.log(response.data);

            <Image title={title }  description={description} tag={tag} Category={Category} image={selectedFile} />
 


        } catch (error) {
            console.error('Upload error:', error);
        }


    };


    return (
        <div className='  flex justify-center  flex-col items-center  m-11'>
            <div className='text-center'> <h1 className='text-4xl  bg-amber-950 text-mauve-100 rounded-3xl h-12 w-2xl '>Image Details</h1> </div>
            <div className=' flex  justify-baseline p-7   flex-col   bg-mauve-300  border-pink-50 
             border-4  h-100 rounded-3xl  max-w-11/12 mt-12 '>

                <form className=' flex justify-evenly gap-9 text-2xl flex-col   '
                    onSubmit={async (event) => {
                        console.log("before  upload ")
                        await uploadImage(event);
                                                console.log("after  upload ")

                    }}>



                    <div className='  text-black   rounded-1.5xl'>
                        <label >Title : </label>
                        <input className=' border-solid border-mist-500 border-2'
                            type='text'
                            placeholder='Enter image title'
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }} />
                    </div>

                    <div className='  text-black   rounded-1.5xl'>
                        <label >Description : </label>
                        <input className=' border-solid border-mist-500 border-2'
                            type='text'
                            placeholder='Enter image Description'
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }} />
                    </div>

                    <div className='  text-black   rounded-1.5xl'>
                        <label >Tag : </label>
                        <input className=' border-solid border-mist-500 border-2'
                            type='text'
                            placeholder='Enter image tag'
                            value={tag}
                            onChange={(e) => {
                                setTag(e.target.value)
                            }} />
                    </div>

                    <div className='  text-black   rounded-1.5xl'>
                        <label >Caegory : </label>
                        <input className=' border-solid border-mist-500 border-2'
                            type='text'
                            placeholder='Enter image category'
                            value={Category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }} />
                    </div>

                    <div className='  text-black   rounded-1.5xl'>
                        <label >File : </label>
                        <input className='  border-solid border-mist-500 border-2'
                            type='file'
                            placeholder='Select image file'
                            accept="image/*"
                             onChange={ manageFiles} />
                    </div>

                    <div className='  flex justify-center   m-7 '>
                        <button className=' h-11  w-72   text-mist-50  bg-amber-500 
                        border-radi rounded-4xl  ' >upload Image</button>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default Post