import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
 import { useNavigate } from 'react-router-dom';

const SearchTab = ({ }) => {
  const [inputValue, setImputValue] = useState([]);

 
      const navigate = useNavigate();
 
  return (

    <div className='h-14 w-3xl   p-2  border-2 rounded-4xl  flex  
    flex-row place-items-center   justify-between '  >
      <div className='text-4xl'> <i className="ri-search-line"></i>   </div>

      <div className=' bg-amber-400 grow'>
        <input
          type='text '
          placeholder='Quick Search Image '
          value={inputValue}
          onChange={(e) => {
            // setImputValue(e.target.value); 
            // <SearchResponsePage  inputValue/> 

              navigate('/SearchResponsePage')

             
          }}/> 

      </div>



      <button className=' h-11 w-28 bg-amber-500  text-amber-50 rounded-4xl '>Search</button>


    </div>




    //////////////////////////pagination 

    //  {/* Pagination Controls */}
    //   <div style={{ marginTop: '20px', display: 'flex', gap: '5px' }}>
    //     <button onClick={prevPage} disabled={currentPage === 1}>
    //       Prev
    //     </button>

    //     {/* Generate dynamic page number buttons */}
    //     {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
    //       <button
    //         key={page}
    //         onClick={() => goToPage(page)}
    //         style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
    //       >
    //         {page}
    //       </button>
    //     ))}

    //     <button onClick={nextPage} disabled={currentPage === totalPages}>
    //       Next
    //     </button>
    //   </div>
  )
}

export default SearchTab