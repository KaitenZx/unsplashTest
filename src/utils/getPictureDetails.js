import axios from "axios"

const getPictureDetails = id => {
    return (
        axios({
            method: "get",
            url: `https://api.unsplash.com/photos/${id}`,
            headers: {
                Accept: "text/plain",
                Authorization: "Client-ID bl06CguFjbta5yPXldLE11DgmJqUHw5ZYOPJvJdHhus"
            },
        })
        .then(response => {
            const pic = response.data
            const picInfo = {
                likes: pic.likes,
                location: pic.location.country ?? pic.location.title,
                downloads: pic.downloads,
                user: pic.user.name,
                url: pic.urls.full,
            }
            return picInfo
        })
        .catch(error => {
            console.error(error)
            return {}
        })
    )
}   

export default getPictureDetails
