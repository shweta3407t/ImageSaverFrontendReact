import React, { useState } from 'react'
import axios from 'axios';

const Image = ({ id, title, description, tag, category, image, originalUrl, thumbnailUrl }) => {


  const [isDeleted, setIsDeleted] = useState(false);


  const handleDownload = async () =>{
    const downloadResponse = await axios.get( thumbnailUrl )
 
    const blobImage = new Blob([downloadResponse.data] , {type : downloadResponse.headers['content-type']})

             const downloadUrl = URL.createObjectURL(blobImage);


            const fileName = originalUrl.substring(originalUrl.lastIndexOf("/") + 1);

            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download' , fileName)

            document.body.appendChild(link);
            link.click();

           link.remove()
           URL.revokeObjectURL(downloadUrl)

  }

  const handleDelete = async () => {
    const url = `http://localhost:8080/api/image/delete`;

    const deleteResponse = await axios.delete(url, {
      params: {
        id: id
      },
    })

    setIsDeleted(true);

  };

  if (isDeleted) return null;

  return (
    <div className="flex p-7">
      <div className="flex h-64  w-64 flex-col items-center rounded-3xl border-4 border-gray-600 ">

        {/* delete */}
        <button className="w-11 pt-1 self-start rounded-2xl z-10 absolute text-center text-3xl text-red-700   transition-all duration-150  active:scale-95  active:bg-mauve-500"
          onDoubleClick={handleDelete}
        > <i className="ri-delete-bin-6-line"></i>
        </button>

          {/* image */}
          <img src={thumbnailUrl} className="m-3\  relative rounded-t-2xl h-full w-full  bg-cover bg-center bg-no-repeat" />

          {/* //title */}
          <div className="flex h-12 w-full  rounded-b-3xl items-center justify-between p-2  ">
            <div className="truncate text-2xl text-black">Title: {title}</div>


            {/* download */}
            <div className="w-11 rounded   h-11 text-center text-3xl  text-olive-950 shadow-md transition-all duration-150  active:scale-95  active:bg-black active:shadow-inner"
            onClick={handleDownload}
            >
              <i className="ri-download-2-line"></i>
            </div>
            
      </div>
    </div>
    </div >
  )
}

export default Image