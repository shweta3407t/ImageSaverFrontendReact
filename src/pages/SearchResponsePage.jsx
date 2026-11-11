import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SearchResponsePage = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasPrevious, sethasPrevious] = useState([false])
  const [hasNext, sethasNext] = useState([false])
  const [isLoading, setIsLoading] = useState(true);

  const size = 10

  const [data, setData] = useState([])



  useEffect(() => {
    setIsLoading(true)
    const searchImage = async (keyword) => {


      const url = `http://localhost:8080/api/image/search/keyword`;


      const searchResponse = await axios.get(url, {
        params: {
          keyword: keyword,       // Axios  
          page: currentPage,
          size: size
        }
      });

      const apiResult = searchResponse.data;
      setData(apiResult.content || []);

      setData(apiResult.data);
      setTotalPages(apiResult.totalPages)
      sethasPrevious(apiResult.hasPrevious)
      sethasNext(apiResult.hasNext)


      setIsLoading(false);


    }

    searchImage(currentPage);
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


  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='  text-4xl   flex flex-wrap flex-col  '  >
      <div className='  text-6xl '>

        {(data.map((singleData) => {
          <Images
            key={singleData.id}
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

      <div className='  bg-mauve-950  fixed bottom-0 left-0 w-full h-16    flex items-center justify-center gap-4 z-40 shadow-inner '>
        <button onClick={handlePrevPage} disabled={currentPage === 1 || isLoading}
          className='bg-amber-500  w-72  text-amber-50 border-radi rounded-4xl  
        font-semibold   items-center'>
          <i className="ri-arrow-left-double-fill"></i>
          Previous </button>


        {pages.map((number) => (
          <button

            key={number}
            onClick={() => handlePageClick(number)}
            className={`  $currentPage === number ? 'active' : '  ' bg-amber-500 h-11  w-40 
               text-amber-50 border-radi rounded-4xl   font-semibold   items-center`}

            disabled={isLoading}
          >
            {number}
          </button>
        ))}


        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || isLoading}
          className='bg-amber-500 h-11  w-72  text-amber-50 border-radi rounded-4xl  
        font-semibold   items-center'
        >
          Next
          <i className="ri-arrow-right-double-fill"></i>
        </button>



      </div>


    </div>
  )
}

export default SearchResponsePage



