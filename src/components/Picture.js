import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import goToFavorite from '../utils/goToFavorites'
import goToFavorites from '../utils/goToFavorites'

const IconHeart = ({ like, onClick }) => {
    return (
        <div className="iconContainer" onClick={onClick}>
                { !like 
                    ? <FontAwesomeIcon className="iconHeart " icon={solidHeart} />
                    : <FontAwesomeIcon  className="iconHeart" icon={regularHeart} /> 
                }
        </div>
    )
}

const Picture = ({ url }) => {
    const [like, setLike] = useState(true)

    const handleClick = () => {
        setLike(!like)
        goToFavorites(url, like)
    }
 
    return (
        <div className="pictureContainer">
            <img className="picture" src={url} alt="here is the pic"/>
            <IconHeart like={like}  onClick={handleClick} />
            
        </div>
    )
}

export default Picture