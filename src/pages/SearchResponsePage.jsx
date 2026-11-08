import React from 'react'

const SearchResponsePage = () => {
  return (
    <div> sssssssssssssssssssssssssssssssss</div>
  )
}

export default SearchResponsePage



// //  const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [hasPrevious, sethasPrevious] = useState([false])
//   const [hasNext, sethasNext] = useState([false])
//   const [isLoading, setIsLoading] = useState(true);

//    const size = 4 

//   const [data, setData] = useState([])



//   useEffect(() => {
//     const searchImage = async (keyword) => {
//       setIsLoading(true);

//       const url = `http://localhost:8080/api/image/search/keyword`;


//       const searchResponse = axios.get(url, {
//         params: {
//           keyword: keyword,       // Axios  
//           page: currentPage,
//           size: size
//         }
//       });

//       setData(Response.data);
//       setTotalPages(Response.totalPages)
//       sethasPrevious(Response.hasPrevious)
//       sethasNext(Response.hasNext)


//       setIsLoading(false);


//     }

//     searchImage();
//   }, [currentPage])


//   //pagination
//   const handleNextPage = () => {
//     if (currentPage < totalPages || hasNext) {
//       setCurrentPage((prev) => {
//         prev + 1
//       })
//     }
//   }

//   const handlePrevPage = () => {
//     if (currentPage > 1 || hasPrevious) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };


//   //pageSearchResponsePage 
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

//   return (
//     <div className=' bg-blue-500 text-4xl' >
//       {isLoading ?
//         (<p> Loading ......</p>) :
//         (  data.map((singleData)=>{
//           <Images id={singleData.id} title={singleData.title}
//                     description={singleData.description}
//                     tag={singleData.tag} category={singleData.category} image={singleData.file}
//                     originalUrl={singleData.originalUrl} thumbnailUrl={singleData.thumbnailUrl} />
//         }) )}



//         //pagination controll
//       <div>
//         <button onClick={handlePrevPage} disabled={currentPage === 1 || isLoading}>  Previous </button>

//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             onClick={() => handlePageClick(number)}
//             className={currentPage === number ? 'active' : ''}
//             disabled={isLoading}
//           >
//             {number}
//           </button>
//         ))}

//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages || isLoading}
//         >
//           Next
//         </button>
//       </div>

//       shweta 
//     </div>
//   )