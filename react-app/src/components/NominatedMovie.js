import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'

const NominatedMovie = ({id, title, year, poster}) => {

    const {removeMovieFromNominations} = useContext(GlobalContext);

    const removeMovie = () => {
        removeMovieFromNominations(id);
    }

    return (
        <div className="movie">
            <p className="movie-info">{title} ({year})</p>
            <button className="remove-btn" onClick={removeMovie}>Remove</button>
        </div>
    )
}

export default NominatedMovie
