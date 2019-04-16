import { combineReducers } from 'redux';
import { createReducer, createAsyncReducer } from '../common/redux.helpers';

const movieModalReducer = createReducer({ isOpen: false }, {

});

const moviesSuccessReducer = (state, action) => {
  const existingMovies = state.response ? state.response.results : [];

  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [
        ...existingMovies,
        ...action.response.results
      ]
    }
  };
}

const movieBrowserReducer = combineReducers({
  movieModal: movieModalReducer
});

export default movieBrowserReducer;
