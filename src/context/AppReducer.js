export default (state, action) => {
    switch (action.type) {
      case "UPDATE_SEARCH_TERM":
          return {
              ...state,
              searchTerm: action.payload
          }
      case "ADD_MOVIES_TO_RESULTS":
          return {
              ...state,
              results: action.payload
          }  
      case "ADD_MOVIE_TO_NOMINATIONS":
        return {
          ...state,
          nominations: [action.payload, ...state.nominations],
        };
      case "REMOVE_MOVIE_FROM_NOMINATIONS":
        return {
          ...state,
          nominations: state.nominations.filter(
            (movie) => movie.id !== action.payload
          ),
        };
      default:
        return state;
    }
}
