import axios from "axios"

const getPhotos = (page) => {
    return (
        axios({
            method: "get",
            url: `https://api.unsplash.com/photos?page=${page}`,
            headers: {
                Accept: "text/plain",
                Authorization: "Client-ID bl06CguFjbta5yPXldLE11DgmJqUHw5ZYOPJvJdHhus"
            },
        })
        .then(response => {
            const data = response.data
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
export default getPhotos
