import React, { useEffect, useState } from 'react'
import Images from '../components/Images'
import axios from 'axios';
import { data } from 'react-router-dom';


//bg-[url("")]  //
const DisplayImages = () => {

    const size = 20
    const page =0
    // const [currentPage, setCurrentPage] = useState([])
    // const [totalPages, setTotalPages] = useState([])
    // const [hasPrevious, setHasPrevious] = useState(false);
    // const [hasNext, setHasNext] = useState(false);

    const [loading, setLoading] = useState(true);
        const [data, setData] = useState([]);

    

    //function
    useEffect(() => {
        setLoading(true)
        console.log("display image kkkkkkkkk yaha haiii");
         const displayImg = async (page) => {
            const url = `http://localhost:8080/api/image/search`;
 
            try {
                const response = await axios.get(url, {
                    params: {
                        page:  page,
                        size: size
                    }
                })

                const apiResult = response.data;
                setData(apiResult.content || []);
 
                //  setTotalPages(apiResult.totalPages);
                // setHasPrevious(apiResult.hasPrevious);
                // setHasNext(apiResult.hasNext);

                

    
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }



        }
        displayImg(page)
    }, [])

    if (loading) return <p>Loading...</p>;

    return (
        <div className='flex   flex-wrap  ' >
           {  data.map((singleData) => (
                    <Images 
                        key={singleData.id}
                        id={singleData.id} 
                        title={singleData.title}
                        description={singleData.description}
                        tag={singleData.tag} 
                        category={singleData.category} 
                        image={singleData.file}
                        originalUrl={singleData.originalUrl} 
                        thumbnailUrl={singleData.thumbnailUrl} 
                    />
                ))}
        </div>





    )
}

export default DisplayImages