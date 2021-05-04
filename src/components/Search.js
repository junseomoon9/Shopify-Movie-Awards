import React, {useState, useEffect, useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import {FaSearch} from 'react-icons/fa'
import Movie from './ResultMovie'

const Search = () => {

    const {addMoviesToResults, updateSearchTerm} = useContext(GlobalContext)

    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const fetchSearchData = async (e) => {
        e.preventDefault();
        updateSearchTerm(query);
        let response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API}&s=${query}`)
        let data = await response.json()

        if (data.Response === "True" ) {
            let movies = filterNonMovies(data.Search)
            setResults(movies)
            addMoviesToResults(movies)
        } else {
            setResults([])
            addMoviesToResults([])
        }
        
    }

    const filterNonMovies = (data) => {
        let movies = data.filter(
            (movie) => movie.Type === "movie"
        )
        return movies
    }

    function handleQueryChange(e) {
        setQuery(e.target.value)
    }

    return (
        <div className="search">
            <h2>Movie Title</h2>
            <form onSubmit={fetchSearchData}>
                <input type="text" className="searchBar" onChange={handleQueryChange}/>
                <div className="search-icon" onClick={fetchSearchData}>
                    <FaSearch/>
                </div>
            </form>
            
        </div>
    )
}

export default Search
