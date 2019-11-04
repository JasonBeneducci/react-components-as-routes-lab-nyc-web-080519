import React from 'react'

const Director = (props) => {
    let movies = props.director.movies.map(movie => <li>{movie}</li>)
    return (
        <div>
            <h1>{props.director.name}</h1>
            <ul>
                {movies}
            </ul>
        </div>
    )
}

export default Director