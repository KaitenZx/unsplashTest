import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import getPictureDetails from '../utils/getPictureDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import MoonLoader  from "react-spinners/MoonLoader"

const Details = () => {
    const [picData, setPicData] = useState(null)
    let history = useHistory()
    const id = history.location.pathname.substring(9)

    useEffect(() => {
        getPictureDetails(id).then(response => setPicData(response))
    })

    const handleClick = () => history.goBack()

    return(
        <div className="page details">
            { picData 
               ? <>
                    <img src={picData.url} alt="here is pic"  className="details__image"/>
                    <FontAwesomeIcon className="details__icon--arrow" icon={faLongArrowAltLeft}  onClick={handleClick} />

                    <div className="details__info">
                        <div className="details__column">
                            <div className="details__title">Downloads</div>
                            <div className="details__value">{picData.downloads ?? "-"}</div>
                            <div className="details__title">User</div>
                            <div className="details__value">{picData.user ?? "-"}</div>
                        </div>
                        <div className="details__column">
                            <div className="details__title">Country</div>
                            <div className="details__value">{picData.location ?? "-"}</div>
                            <div className="details__title">Likes</div>
                            <div className="details__value">{picData.likes ?? "-"}</div>
                        </div>
                    </div>
                </> 
                : <MoonLoader size={200} />
            }
        </div>
    )
}

export default Details