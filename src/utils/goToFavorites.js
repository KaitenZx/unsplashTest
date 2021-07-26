


export const getFavorites = () => { 
    const unserialFavorites = localStorage.getItem('favorites')
    const favorites = unserialFavorites ? JSON.parse(unserialFavorites) : []

    return favorites

}

// export   const goToFavorites = (picture, like) => {
//        const favorites = getFavorites()

//         if (!like) {
//             favorites.push(picture)
//         } else {
//             const index = favorites.indexOf(picture);
//             favorites.splice(index, 1)
//         }

//         localStorage.setItem('favorites', JSON.stringify(favorites))
        
//     }

export const goToFavorites = (picture, like) => {
    const favorites = getFavorites()
    let newFavorites = [...favorites]

    if (!like){
        newFavorites.push(picture)
    } else {
        newFavorites = newFavorites.filter(pic => pic.id !== picture.id)
    }

    localStorage.setItem('favorites', JSON.stringify(newFavorites))
}

     

