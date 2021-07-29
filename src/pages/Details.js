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
        console.log(picData)

        useEffect(() => {
            getPictureDetails(id).then(response => setPicData(response))
        }, [])

        const handleClick = () => {
            history.goBack()
        }


    return(
        <div className="detailsContainer">
            { picData 
               ? <React.Fragment>
                    <img src={picData.url} alt="here is pic"  className="fullImage"/>
                    <FontAwesomeIcon className="arrow" icon={faLongArrowAltLeft}  onClick={handleClick} />

                    <div className="info">
                        <div className="columnInfo">
                            <div className="titleInfo">Downloads</div>
                            <div className="valueInfo">{picData.downloads ?? "-"}</div>
                            <div className="titleInfo">User</div>
                            <div className="valueInfo">{picData.user ?? "-"}</div>
                        </div>
                        <div className="columnInfo">
                            <div className="titleInfo">Country</div>
                            <div className="valueInfo">{picData.location ?? "-"}</div>
                            <div className="titleInfo">Likes</div>
                            <div className="valueInfo">{picData.likes ?? "-"}</div>
                        </div>
                    </div>
                </React.Fragment> 
                : <MoonLoader size={200} />
            }

        </div>
    )
}

export default Details