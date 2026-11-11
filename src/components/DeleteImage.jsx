import React from 'react'

const DeleteImage = async( {id}) => {

            const url = `http://localhost:8080/api/image/delete?id=${id}`;
             const response = await axios.delete(url);
              console.log(response) 

  return (
    <div> 
    </div>
  )
}

export default DeleteImage