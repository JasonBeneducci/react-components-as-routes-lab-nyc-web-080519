import React from 'react'

const Movie = (props) => {
    let movieGenres = props.movie.genres
    let genreItems = movieGenres.map(genre => <li>{genre}</li>)
    return (
        <div>
            <h1>{props.movie.title}, {props.movie.time}</h1>
            <ul>
                {genreItems}
            </ul>
        </div>
    )
}
export default Movie