const searchReducer = (state={results:[]}, action) => {
  switch(action.type) {
    case 'SEARCH_BY_NAME':
    return {
      ...state,
      results: action.payload.results
    }

    default: 
    return state;
  }
}

export default searchReducer