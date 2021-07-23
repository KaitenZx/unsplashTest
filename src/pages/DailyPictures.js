import React from "react"
import InputSearch from "../components/InputSearch"
import PageTitle from "../components/PageTitle"
import InfiniteScroll from "react-infinite-scroll-component";
import getPhotos from "../utils/getPictures"
import { useEffect, useState } from "react"
import Column from "../components/Column"
import searchPhotos from "../utils/searchPictures";


const AllPictures = ({ pictures, setPictures, showedPictures, text }) => {
    const [page, setPage] = useState(2)
  
    const zeroLeft = pictures.filter((pic, index) => index % 3 === 0)
    const oneLeft = pictures.filter((pic, index) => index % 3 === 1)
    const twoLeft = pictures.filter((pic, index) => index % 3 === 2)

    const fetchMoreData = () => {
        if (showedPictures === 'dailyPic') {
     
            getPhotos(page).then(response => {
                setPictures([ ...pictures, ...response ])
                setPage(page + 1)
            })         
        }
        if (showedPictures === 'searchedPic') {
            searchPhotos(page, text).then(response => {
                setPictures([ ...pictures, ...response ])
                setPage(page + 1)
            })         
            }
    }


    return (
        <InfiniteScroll
            dataLength={pictures.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
        <div className="allPictures">
            <Column urls = {zeroLeft} />
            <Column urls = {oneLeft} />
            <Column urls = {twoLeft} />
            
        </div>
        </InfiniteScroll>
    )
}

const DailyPictures = () => {
    const [text, setText] = useState('')
    const [pictures, setPictures] = useState([])
    const [showedPictures, setShowedPictures] = useState('dailyPic')

    useEffect(() => {
        if (pictures.length === 0 ) {
        getPhotos(1).then(response => setPictures(response))
        }
    }, [])
    
    return(
        <React.Fragment>
            <InputSearch 
                setPictures={setPictures}
                setShowedPictures={setShowedPictures}
                text={text}
                setText={setText}
            />
            <PageTitle 
                  title={ showedPictures === 'searchedPic' ? "Searched photos" : "Daily pictures" }
            />
            {pictures.length > 0 
            ? <AllPictures  
                pictures={pictures} 
                setPictures={setPictures} 
                showedPictures={showedPictures} 
                text={text}
            /> 
            : ''
            }

              
        </React.Fragment>
    )
}
export default DailyPictures