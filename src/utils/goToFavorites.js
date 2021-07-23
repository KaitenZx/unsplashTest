import React from 'react'

    const goToFavorites = (url, like) => {
        const unserialFavorites = localStorage.getItem('favorites')
        
        const favorites = unserialFavorites ? JSON.parse(unserialFavorites) : []

        if (like) {
            favorites.push(url)
        } else {
            const index = favorites.indexOf(url);
            favorites.splice(index, 1)
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))
        console.log(favorites)
    }

    export default goToFavorites