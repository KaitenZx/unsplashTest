import React from 'react'
import OneColumn from './OneColumn'

const Columns = ({ pictures }) => {
    const zeroLeft = pictures.filter((pic, index) => index % 3 === 0)
    const oneLeft = pictures.filter((pic, index) => index % 3 === 1)
    const twoLeft = pictures.filter((pic, index) => index % 3 === 2)
    return (
        <div className="allPictures">
            <OneColumn picArray = {zeroLeft} />
            <OneColumn picArray = {oneLeft} />
            <OneColumn picArray = {twoLeft} />
         </div>
    )
}
export default Columns