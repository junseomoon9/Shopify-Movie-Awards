import React from 'react'
import {FaTimes} from 'react-icons/fa'

const MovieCard = ({data, trigger, setTrigger}) => {
    
    return (
        (trigger) ? (
            <div className="movieCardContainer">
                <div className="movieCard">
                    <div className="close-icon-container">
                        <FaTimes className="close-icon" onClick={() =>setTrigger(!trigger)}/>
                    </div>
                    <div className="data-container">
                        <img className="poster-img" src={data.Poster} alt="Poster of Movie"/>
                        <div className="detailed-movie-info-container">
                            <p><b>Title</b>: {data.Title}</p>
                            <p><b>Released</b>: {data.Released}</p>
                            <p><b>Runtime</b>: {data.Runtime}</p>
                            <p><b>Genre</b>: {data.Genre}</p>
                            <p><b>Director</b>: {data.Director}</p>
                            <p><b>Plot</b>: {data.Plot}</p>
                            <p><b>Box Office</b>: {data.BoxOffice}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : ""
        
    )
}

export default MovieCard
