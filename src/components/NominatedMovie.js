import React, {useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import Banner from './Banner';
import MovieCard from './MovieCard'

const NominatedMovie = ({id, title, year, poster}) => {

    const [trigger, setTrigger] = useState(false);
    const [data, setData] = useState({});

    const {removeMovieFromNominations} = useContext(GlobalContext);

    const removeMovie = () => {
        removeMovieFromNominations(id);
    }

    const popupMoreInfo = async () => {
        let response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API}`)
        let data = await response.json()
        setData(data);
    }

    const toggleTrigger = () => {
        setTrigger(!trigger)
    }

    return (
        <div className="movie">
            <p onClick={() => {popupMoreInfo(); toggleTrigger();}} className="movie-info">{title} ({year})</p>
            <button className="remove-btn" onClick={removeMovie}>Remove</button>
            <MovieCard data={data} trigger={trigger} setTrigger={setTrigger}/>
        </div>
    )
}

export default NominatedMovie
