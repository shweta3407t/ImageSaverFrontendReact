import React, { useState } from 'react'
import axios from 'axios';

const Image = ({ id, title, description, tag, category, image, originalUrl, thumbnailUrl }) => {


  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    const url = `http://localhost:8080/api/image/delete`;

    const response = await axios.delete(url, {
      params: {
        id: id
      },
    })
    console.log("response k bad")
    console.log(response.data);

    setIsDeleted(true);

  };

  if (isDeleted) return null;

  return (
    <div className="flex p-7">
      <div className="flex h-64  w-64 flex-col items-center rounded-3xl border-4 border-gray-600 ">

        <img src={thumbnailUrl}
          className="m-3\ h-full w-full  rounded-2xl  bg-cover bg-center bg-no-repeat" />

        <div className="flex h-12 w-full items-center justify-between p-2">
          <div className="truncate text-2xl text-black">Title: {title}</div>


          <button
            className="w-1/5 rounded bg-red-700 text-center text-3xl text-amber-50
            shadow-md transition-all duration-150  active:scale-95
             active:bg-blue-800 active:shadow-inner"
            onDoubleClick={handleDelete}
          >
            <i className="ri-delete-bin-6-line"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Image