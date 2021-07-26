import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as solidUser } from '@fortawesome/free-solid-svg-icons'
import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { useHistory } from "react-router-dom"

const savePage = page => localStorage.setItem('page', page)

 

const Footer = ({ page, setPage }) => {
    let history = useHistory();

    const handleClick = path  => {
        setPage(path.substring(1))
        savePage(path.substring(1))
        history.push(path)
    }

    return (
        <div className="footer" >
            <div className="footerSection" onClick={() => handleClick('/home')}>
                {page === 'home' 
                    ? <FontAwesomeIcon icon={solidUser} /> 
                    : <FontAwesomeIcon icon={regularUser} />
                }
                <div className="footerText">Home</div>
            </div>
            <div className="footerSection" onClick={() => handleClick('/favorites')}>
                {page === "favorites"
                    ? <FontAwesomeIcon className="iconHeart" icon={solidHeart} />
                    : <FontAwesomeIcon className="iconHeart" icon={regularHeart} />
                }   
                <div className="footerText">Favorites</div>
            </div>
        </div>
    )
}

export default Footer