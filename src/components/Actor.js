import React from 'react'

const Actor = (props) => {
    let moviesArray = props.actor.movies.map(movie => <li>{movie}</li>)
    return (
        <div className="actor">
            <h1>{props.actor.name}</h1>
            <ul>
                {moviesArray}
            </ul>
        </div>
    )
}

export default Actor