import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from "./AppReducer";

const initialState = {
    searchTerm: "",
    results: [],
    nominations: localStorage.getItem('nominations') ? JSON.parse(localStorage.getItem('nominations')) : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('nominations', JSON.stringify(state.nominations))
    }, [state])

    // actions
    const updateSearchTerm = searchTerm => {
        dispatch({type: "UPDATE_SEARCH_TERM", payload: searchTerm})
    }

    const addMoviesToResults = movies => {
        dispatch({type: "ADD_MOVIES_TO_RESULTS", payload: movies})
    }

    const addMovieToNominations = movie => {
        dispatch({type: "ADD_MOVIE_TO_NOMINATIONS", payload: movie})
    }

    const removeMovieFromNominations = id => {
        dispatch({type: "REMOVE_MOVIE_FROM_NOMINATIONS", payload: id})
    }

    return (
        <GlobalContext.Provider value={{searchTerm: state.searchTerm, results: state.results, nominations: state.nominations, updateSearchTerm, addMoviesToResults, addMovieToNominations, removeMovieFromNominations}}>
            {props.children}
        </GlobalContext.Provider>
    )

}