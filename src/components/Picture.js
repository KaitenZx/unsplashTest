import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { goToFavorites, getFavorites } from '../utils/goToFavorites'
import { useHistory } from "react-router-dom"

const IconHeart = ({ like, onClick }) => {
    return (
        <div className="one-picture__icon" onClick={(event) => onClick(event)}>
            {like 
                ? <FontAwesomeIcon className="one-picture__icon--heart" icon={solidHeart} />
                : <FontAwesomeIcon  className="one-picture__icon--heart" icon={regularHeart} /> 
            }
        </div>
    )
}

const isLike = picture => {
    const  favorites = getFavorites()
    return favorites.filter(pic => pic.id === picture.id).length > 0
}

const Picture = ({ picture }) => {
    const [like, setLike] = useState(isLike(picture))
    let history = useHistory()

    const handleClick = event => {
        event.stopPropagation()
        setLike(!like)
        goToFavorites(picture, like)
    }

    const goToDetailes = () => history.push(`/detailes/${picture.id}`)

    return (
        <div className="one-picture" onClick={() => goToDetailes()}>
            <img className="one-picture__image" src={picture.url} alt="here is the pic"/>
            <IconHeart like={like}  onClick={(event) => handleClick(event)} />
            
        </div>
    )
}

export default Picture