import React, { useEffect, useState } from 'react'
import Images from '../components/Images'
import axios from 'axios';
import { data } from 'react-router-dom';


//bg-[url("")]  //
const DisplayImages = () => {



    let  currentPage 
    let totalPages
    const size=4
    let hasPrevious
    let hasNext

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([])
    const [imageContainer, setImageContainer] = useState([]);

    //function
    // useEffect(() => {
    const displayImg = async () => {
        const url = `http://localhost:8080/api/image/search?page=${currentPage}&size=${size}`;

        try {
            const response = await axios.get(url)

            setData(response.data)

        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }

        setTotalPage = Number(data.totalPages);
        setHasPrevious = Boolean(data.hasPrevious);
        setHasNext = Boolean(data.hasNext);

        setData.push(imageContainer)

        data.forEach((singleData) => {

            setImageContainer.push(<Images id={singleData.id} title={singleData.title}
                description={singleData.description}
                tag={singleData.tag} category={singleData.category} image={singleData.file}
                originalUrl={singleData.originalUrl} thumbnailUrl={singleData.thumbnailUrl} />
            )

        })



    }
    displayImg()
    // }, [])

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            imageContainer 
         </div>

    )
}

export default DisplayImages