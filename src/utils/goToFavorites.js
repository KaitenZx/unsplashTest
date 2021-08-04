export const getFavorites = () => { 
    const unserialFavorites = localStorage.getItem('favorites')
    const favorites = unserialFavorites ? JSON.parse(unserialFavorites) : []

    return favorites

}

export const goToFavorites = (picture, like) => {
    const favorites = getFavorites()
    let newFavorites = [...favorites]

    if (like) {
        newFavorites = newFavorites.filter(pic => pic.id !== picture.id)
    } else {
        newFavorites.push(picture)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }   
}