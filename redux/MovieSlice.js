import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getMovies, MOVIE_API_KEY, MOVIE_BASE_URL } from '../utils/Auth';

// Initial State
const initialState = {
    movies: [],
    loading: false,
    error: null,
  };
const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        setMovies: (state, action) => {
            console.log('setMovies action.payload:::', action.payload);
            state.movies = action.payload;
        },
        fetchMovieStart(state) {
            console.log('fetchMovieStart::', state);
            state.loading = true;
        },
        fetchMovieSuccess(state, action) {
            console.log('fetchMovieSuccess.payload:::', action.payload);
            state.loading = false;
            console.log('action.payload:::', action.payload);
            state.movies = action.payload;
        },
        fetchMovieFailure(state, action) {
            console.log('fetchMovieFailure.payload:::', action.payload);

            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { setMovies, fetchMovieFailure, fetchMovieStart, fetchMovieSuccess } = movieSlice.actions;

export const fetchMovideWithReduxNew = () => async (dispatch) => {
    console.log('fetchMovideWithReduxNew calling111:::', movies);

    dispatch(fetchMovieStart());
    try {
      
        await fetchMovies().then((movies) => {
            console.log('response movies:::', movies.data.results);
            dispatch(fetchMovieSuccess(movies.data.results));
        })
    }
    catch (error) {
        dispatch(fetchMovieFailure(error.message));
    }
}


async function fetchMovies() {
    return await getMovies();
}

export default movieSlice.reducer;