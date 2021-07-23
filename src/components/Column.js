import React from "react"
import Picture from "./Picture"

const Column = ({ urls }) => {
    return(
        <div className="column">
            {urls.map((url, index) => {
                return (
                    <Picture url={url} key={index} />
                )
            })}
        </div>
    )
}

export default Column
