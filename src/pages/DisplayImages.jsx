import React, { useEffect, useState } from 'react'
import Images from '../components/Images'
import axios from 'axios';
import { data } from 'react-router-dom';


//bg-[url("")]  //
const DisplayImages = () => {



    let currentPage
    let totalPages
    const size = 4
    let hasPrevious
    let hasNext

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([])
    const [imageContainer, setImageContainer] = useState([]);



    //function
    useEffect(() => {
        const displayImg = async (currentPage) => {
            const url = `http://localhost:8080/api/image/search`;

            try {
                const response = await axios.get(url, {
                  // Axios encodes this automatically!
                    page: currentPage,
                    size: size
                })

                setData(response.data)

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }

            totalPages = Number(data.totalPages);
            hasPrevious = Boolean(data.hasPrevious);
            hasNext = Boolean(data.hasNext);

            // setData.push(imageContainer)
            setData(prevData => [...prevData,  imageContainer]);

            data.forEach((singleData) => {

                setImageContainer.push(<Images id={singleData.id} title={singleData.title}
                    description={singleData.description}
                    tag={singleData.tag} category={singleData.category} image={singleData.file}
                    originalUrl={singleData.originalUrl} thumbnailUrl={singleData.thumbnailUrl} />
                )
            })
        }
        displayImg(1)
    }, [])

    if (loading) return <p>Loading...</p>;

    return (
        <div >
            {imageContainer}
        </div>





    )
}

export default DisplayImages