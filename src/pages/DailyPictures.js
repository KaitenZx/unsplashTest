import React from "react"
import InputSearch from "../components/InputSearch"
import PageTitle from "../components/PageTitle"
import Image from "../components/Image"
import InfiniteScroll from "react-infinite-scroll-component";
import getPhotos from "../utils/getPhotos"
import { useEffect, useState } from "react"
import Column from "../components/Column"

const AllImages = ({ images, setImages }) => {
    const [page, setPage] = useState(2)
    // images.filter(image => {
    //     const index = images.indexOf(image)
    //     return (
    //         index % 3 === 0
    //             ? zeroLeft.push(image)
    //             : index % 3 === 1
    //                 ? oneLeft.push(image)
    //                 : twoLeft.push(image)
    //     )
    // })
    const zeroLeft = images.filter((image, index) => index % 3 === 0)
    const oneLeft = images.filter((image, index) => index % 3 === 1)
    const twoLeft = images.filter((image, index) => index % 3 === 2)

    const fetchMoreData = () => {
        getPhotos(page).then(response => {
            setImages([ ...images, ...response ])
            setPage(page + 1)
        })
    }

    return (
        <InfiniteScroll
            dataLength={images.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
        <div className="allImages">
            <Column urls = {zeroLeft} />
            <Column urls = {oneLeft} />
            <Column urls = {twoLeft} />
            
        </div>
        </InfiniteScroll>
    )
}

const DailyPictures = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        if (images.length === 0 ) {
        getPhotos(1).then(response => setImages(response))
        }
    }, [])
    
    return(
        <React.Fragment>
            <InputSearch  setImages = {setImages} />
            <PageTitle title="Daily pictures"/>
            {images.length > 0 ? <AllImages  images={images} setImages={setImages} /> : ''}

              
        </React.Fragment>
    )
}
export default DailyPictures