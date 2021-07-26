import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import getPictureDetails from '../utils/getPictureDetails'

const Details = () => {
    const [picData, setPicData] = useState({})
        let history = useHistory()
        const id = history.location.pathname.substring(9)
        console.log(picData)

        useEffect(() => {
            getPictureDetails(id).then(response => setPicData(response))
        }, [])


    return(
        <div>poippfpff</div>
    )
}

export default Details