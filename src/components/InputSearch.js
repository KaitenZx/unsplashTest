import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import searchPhotos from '../utils/searchPhotos'
import { useEffect, useState } from "react"
 
const InputSearch = ({ setImages }) => {
    const [text, setText] = useState('')

    const handleSearch = () => {
      searchPhotos(1, text).then(response => setImages(response))
    }

   return (
        <div className="inputContainer">
            <input 
            className="input" 
            placeholder="Search pictures" 
            value={text} 
            onChange={(event) => setText(event.target.value)}
            />
            <FontAwesomeIcon  className="iconSearch" icon={faSearch} onClick={() => handleSearch()} />
        </div>
    )
}

export default InputSearch