import React from "react"
import Picture from "./Picture"

const OneColumn = ({ picArray }) => {
    return(
        <div className="one-column">
            {picArray.map((picture, index) => {
                return (
                    <Picture picture={picture} key={index} />
                )
            })}
        </div>
    )
}

export default OneColumn
