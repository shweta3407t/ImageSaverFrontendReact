import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SearchResponsePage = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasPrevious, sethasPrevious] = useState([false])
  const [hasNext, sethasNext] = useState([false])
  const [isLoading, setIsLoading] = useState(true);

  const size = 4

  const [data, setData] = useState([])



  useEffect(() => {
    const searchImage = async (keyword) => {
      setIsLoading(true);

      const url = `http://localhost:8080/api/image/search/keyword`;


      const searchResponse = await axios.get(url, {
        params: {
          keyword: keyword,       // Axios  
          page: currentPage,
          size: size
        }
      });



      setData(searchResponse.data);
      setTotalPages(searchResponse.totalPages)
      sethasPrevious(searchResponse.hasPrevious)
      sethasNext(searchResponse.hasNext)


      setIsLoading(false);


    }

    searchImage();
  }, [currentPage])


  //pagination
  const handleNextPage = () => {
    if (currentPage < totalPages || hasNext) {
      setCurrentPage((prev) => {
        prev + 1
      })
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1 || hasPrevious) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  //pageSearchResponsePage 
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className='  text-4xl bg-cyan-500  flex flex-wrap flex-col'  >
      <div className=' bg-amber-400 text-6xl  h-200 mt-22'>

        {isLoading ?
          (<p> Loading ......</p>) :
          (data.map((singleData) => {
            <Images
              id={singleData.id}
              title={singleData.title}
              description={singleData.description}
              tag={singleData.tag}
              category={singleData.category}
              image={singleData.file}
              originalUrl={singleData.originalUrl}
              thumbnailUrl={singleData.thumbnailUrl} />
          }))}

      </div>
      <div>
        <hr></hr>
      </div>

      <div className=' flex justify-center items-center flex-row  h-18  '>
        
        <button onClick={handlePrevPage} disabled={currentPage === 1 || isLoading} className='bg-lime-900'>  Previous </button>

 {pages.map((number) => (
          <button
            key={number}
            onClick={() => handlePageClick(number)}
            className={`bg-fuchsia-600 $currentPage === number ? 'active' : '  '`}

            disabled={isLoading}
          >
            {number}
          </button>
        ))}
        

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || isLoading}
          className='bg-blue-400'
        >
          Next
        </button>
      </div>


    </div>
  )
}

export default SearchResponsePage



