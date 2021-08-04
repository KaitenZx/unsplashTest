import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import searchPictures from '../utils/searchPictures'


const InputSearch = ({ setPictures, setShowedPictures, text, setText }) => {
   
    const handleSearch = () => {
        if (text.length !== 0) {
         searchPictures(1, text).then(response => setPictures(response))
         setShowedPictures('searchedPic')
        }
    }

    const handleKeyDown = event => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }

   return (
        <div className="search">
            <input 
                className="search__input" 
                placeholder="Search pictures" 
                value={text} 
                onChange={(event) => setText(event.target.value)}
                onKeyDown={(event) => handleKeyDown(event)}
            />
            <FontAwesomeIcon  className="search__icon" icon={faSearch} onClick={() => handleSearch()} />
        </div>
   )
}

export default InputSearch