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

    const handleClick = path  => {history.push(path)}
    

    return (
        <div className="footer" >
            <div className="footerSection" onClick={() => handleClick('/home')}>
                {location === 'home' 
                    ? <FontAwesomeIcon icon={solidUser} /> 
                    : <FontAwesomeIcon icon={regularUser} />
                }
                <div className="footerText">Home</div>
            </div>
            <div className="footerSection" onClick={() => handleClick('/favorites')}>
                {location === "favorites"
                    ? <FontAwesomeIcon className="iconHeart" icon={solidHeart} />
                    : <FontAwesomeIcon className="iconHeart" icon={regularHeart} />
                }   
                <div className="footerText">Favorites</div>
            </div>
        </div>
    )
}

export default Footer