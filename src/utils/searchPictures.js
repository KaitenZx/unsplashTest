import axios from "axios"

const searchPictures = (page, text) => {
    return (
        axios({
            method: "get",
            url: `https://api.unsplash.com/search/photos?page=${page}&query=${text}`,
            headers: {
                Accept: "text/plain",
                Authorization: "Client-ID bl06CguFjbta5yPXldLE11DgmJqUHw5ZYOPJvJdHhus"
            },
        })

        .then(response => {
            const data = []
            response.data.results.forEach(picture => {
                const picData = {
                    url: picture.urls.small,
                    id: picture.id,
                }
                data.push(picData)
            })
            return data
        })

        .catch(error => {
            console.error(error)
            return []
        })
    )
}   

export default searchPictures