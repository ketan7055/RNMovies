import axios from 'axios';
import { Alert } from 'react-native';

const API_KEY = 'AIzaSyB9gFyuNGzUwOnEILauBHXVpGVsJiCylBw';
export const MOVIE_API_KEY = "cff60d236329dee831119e52ab5686a3";
export const MOVIE_BASE_URL = "https://api.themoviedb.org/";
export const MOVIE_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w440_and_h660_face";


export async function createUser(email, password) {
    console.log('email: ', email);
    console.log('password: ', password);
    console.log('uri::   ', 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY);

    try {
        const response = await axios.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );

        const token = response.data.idToken;
    }
    catch (error) {
        console.log('error:: ', error);
    }
}


async function authenticateUser(mode, email, password) {


    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    console.log('email: ', email);
    console.log('password: ', password);
    console.log('uri::   ', url);

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });
    const token = response.data.idToken;
    console.log('response token: ', token);
    return token;


}



export function userLogin(email, password) {

    return authenticateUser('signInWithPassword', email, password);

}

export function createUserNew(email, password) {

    return authenticateUser('signUp', email, password);
}

export function getMovies() {
    const uri = `${MOVIE_BASE_URL}3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US&page=1`;
    console.log('uri:::', uri);
    return axios.get(uri);
}


export function getMovieDetails(movieId) {
    const uri = `https://www.themoviedb.org/movie/${movieId}`;
    console.log('getMovieDetails uri:::', uri);
    return axios.get(uri);
}