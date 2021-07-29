import React from 'react'
import useCurrentWidth from '../utils/useCurrentWidth'
import OneColumn from './OneColumn'

const Columns = ({ pictures }) => {
    const width = useCurrentWidth()
    const columns = width >= 600 ? 3 : 2
    let zeroLeft = []
    let oneLeft = []
    let twoLeft = []
    

    
    if (columns === 3) {
         zeroLeft = pictures.filter((pic, index) => index % 3 === 0)
         oneLeft = pictures.filter((pic, index) => index % 3 === 1)
         twoLeft = pictures.filter((pic, index) => index % 3 === 2)
    } else {
        zeroLeft = pictures.filter((pic, index) => index % 2 === 0)
        oneLeft = pictures.filter((pic, index) => index % 2 === 1)
    }



    return (
        <div className="allPictures">
            <OneColumn picArray = {zeroLeft} />
            <OneColumn picArray = {oneLeft} />
         { columns === 3 ? <OneColumn picArray = {twoLeft} /> : ''}
         </div>
    )
}
export default Columns