import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import ResultMovie from './ResultMovie'

const Results = () => {
    const {results, searchTerm, nominations} = useContext(GlobalContext)

    return (
        <div className="results">
            <h3>Results for "{searchTerm}"</h3>
            <div className="results-container">
                {results.map( movie => (
                    <ResultMovie id={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster}/>
                ))}
            </div>
        </div>
    )
}

export default Results
