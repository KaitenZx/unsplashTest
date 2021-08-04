import React from "react"
import InputSearch from "../components/InputSearch"
import PageTitle from "../components/PageTitle"
import { useState } from "react"
import { getFavorites } from "../utils/goToFavorites";
import PicsContainer from "../components/PicsContainer";

const Favorites= () => {
    const [text, setText] = useState('')
    const [pictures, setPictures] = useState(getFavorites)
    const [showedPictures, setShowedPictures] = useState('favorites')
    
    return(
        <div className="page">
            <InputSearch 
                setPictures={setPictures}
                setShowedPictures={setShowedPictures}
                text={text}
                setText={setText}
            />
            <PageTitle title={ showedPictures === 'searchedPic' ? "Searched photos" : "Favorites" } />
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

export default Favorites