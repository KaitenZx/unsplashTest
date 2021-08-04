import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as solidUser } from '@fortawesome/free-solid-svg-icons'
import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { useHistory, useLocation } from "react-router-dom"

const Footer = () => {
    let history = useHistory();
    let location = useLocation().pathname.substring(1) ?? 'home'
    const handleClick = path => {history.push(path)}

    return (
        <div className="footer" >
            <div className="footer__section" onClick={() => handleClick('/home')}>
                {location === 'home' 
                    ? <FontAwesomeIcon className="footer__icon" icon={solidUser} /> 
                    : <FontAwesomeIcon className="footer__icon"  icon={regularUser} />
                }
                <div className="footer__text">Home</div>
            </div>
            <div className="footer__section" onClick={() => handleClick('/favorites')}>
                {location === "favorites"
                    ? <FontAwesomeIcon className="footer__icon" icon={solidHeart} />
                    : <FontAwesomeIcon className="footer__icon" icon={regularHeart} />
                }   
                <div className="footer__text">Favorites</div>
            </div>
        </div>
    )
}

export default Footer