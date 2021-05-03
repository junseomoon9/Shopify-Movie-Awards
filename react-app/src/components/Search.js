import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Search = () => {

    return (
        <div className="search">
            <h2>Movie Title</h2>
            <input type="text" className="searchBar"/>
            <div className="search-icon">
                <FaSearch/>
            </div>
        </div>
    )
}

export default Search
