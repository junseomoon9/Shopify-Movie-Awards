import React, {useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import MovieCard from './MovieCard'


const ResultMovie = ({id, title, year, poster}) => {

    const [trigger, setTrigger] = useState(false);
    const [data, setData] = useState({});

    const {addMovieToNominations, nominations} = useContext(GlobalContext);

    const addMovie =  () => {
        const movie = {id: id, title: title, year: year, poster: poster}
        addMovieToNominations(movie)
    }

    const popupMoreInfo = async () => {
        let response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API}`)
        let data = await response.json()
        setData(data);
        
    }

    const toggleTrigger = () => {
        setTrigger(!trigger)
    }

    const movie = nominations.find(movie => movie.id === id)
    const alreadyInNominations = movie ? true : false
    const maximumNominationsFilled = (nominations.length === 5) ? true: false

    return (
        
        <div className="movie">
            <p onClick={() => {popupMoreInfo(); toggleTrigger();}} className="movie-info">{title} ({year})</p>
            <button disabled={alreadyInNominations || maximumNominationsFilled} className="nominate-btn" onClick={() => addMovie()}>Nominate</button>
            <MovieCard data={data} trigger={trigger} setTrigger={setTrigger}/>
        </div>
    )
}

export default ResultMovie
