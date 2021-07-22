import axios from "axios"

const searchPhotos = (page, text) => {
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
            console.log(response)
            const data = response.data.results
            const urls = []
            
            data.map(image => urls.push(image.urls.small))
            return urls
        })
        .catch(error => {
            console.error(error)
            return []
        })
    )
}   
export default searchPhotos