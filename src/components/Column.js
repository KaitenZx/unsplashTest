import React from "react"
import Image from "../components/Image"

const Column = ({ urls }) => {
    return(
        <div className="column">
            {urls.map((url, index) => {
                return (
                    <Image url={url} key={index} />
                )
            })}
        </div>
    )
}

export default Column
