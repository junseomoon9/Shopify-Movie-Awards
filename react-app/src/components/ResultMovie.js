import React, {useContext, Alert} from 'react'
import {GlobalContext} from '../context/GlobalContext'


const ResultMovie = ({id, title, year, poster}) => {

    const {addMovieToNominations, nominations} = useContext(GlobalContext);

    const addMovie =  () => {
        const movie = {id: id, title: title, year: year, poster: poster}
        addMovieToNominations(movie)
    }

    const movie = nominations.find(movie => movie.id === id)
    const alreadyInNominations = movie ? true : false
    const maximumNominationsFilled = (nominations.length === 5) ? true: false

    return (
        
        <div className="movie">
            <p className="movie-info">{title} ({year})</p>
            <button disabled={alreadyInNominations || maximumNominationsFilled} className="nominate-btn" onClick={() => addMovie()}>Nominate</button>
        </div>
    )
}

export default ResultMovie
