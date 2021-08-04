import React from "react"
import InputSearch from "../components/InputSearch"
import PageTitle from "../components/PageTitle"
import getPictures from "../utils/getPictures"
import { useEffect, useState } from "react"
import PicsContainer from "../components/PicsContainer"

const DailyPictures = () => {
    const [text, setText] = useState('')
    const [pictures, setPictures] = useState([])
    const [showedPictures, setShowedPictures] = useState('dailyPic')

    useEffect(() => {
        if (pictures.length === 0 ) {
            getPictures(1).then(response => setPictures(response) ) 
        }
    })

    return(
        <div className="page">
            <InputSearch 
                setPictures={setPictures}
                setShowedPictures={setShowedPictures}
                text={text}
                setText={setText}
            />
            <PageTitle title={ showedPictures === 'searchedPic' ? "Searched photos" : "Daily pictures" } />
            {pictures.length > 0 
                ? <PicsContainer  
                    pictures={pictures} 
                    setPictures={setPictures} 
                    showedPictures={showedPictures} 
                    text={text}
                /> 
                : ''
            }  
        </div>
    )
}

export default DailyPictures