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
            const data = response.data.results
            const urls = []
            
            data.map(picture => urls.push(picture.urls.small))
            return urls
        })
        .catch(error => {
            console.error(error)
            return []
        })
    )
}   
export default searchPictures