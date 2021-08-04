import React from 'react'
import { useState } from 'react'
import getPictures  from '../utils/getPictures'
import Columns from '../components/Columns'
import searchPictures from '../utils/searchPictures'
import InfiniteScroll from "react-infinite-scroll-component";

const PicsContainer = ({ pictures, setPictures, showedPictures, text }) => {
    const [page, setPage] = useState(2)
  
    const fetchMoreData = () => {
        if (showedPictures === 'dailyPic') {
            getPictures(page).then(response => {
                setPictures([ ...pictures, ...response ])
                setPage(page + 1)
            })         
        }

        if (showedPictures === 'searchedPic') {
            searchPictures(page, text).then(response => {
                setPictures([ ...pictures, ...response])
                setPage(page + 1)
            })         
        }
    }

    return (
        <>
            {showedPictures === 'searchedPic' || showedPictures === 'dailyPic'
                ? <InfiniteScroll
                    dataLength={pictures.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    <Columns pictures={pictures} />
                </InfiniteScroll>
                : <Columns pictures={pictures} />
            }   
        </>
    )
}
   
export default PicsContainer