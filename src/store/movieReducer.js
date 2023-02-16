import {
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_FAILURE,
} from './types';

export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};