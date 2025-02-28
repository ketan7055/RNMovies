import { View, StyleSheet, Text, FlatList, Image, Pressable } from "react-native";
import { GlobalStyle } from "../component/GlobalStyle";
import { use, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../store/auth-context";
import { getMovieDetails, getMovies, MOVIE_API_KEY, MOVIE_BASE_URL, MOVIE_IMAGE_BASE_URL } from "../utils/Auth";
import Loader from "../component/UI/Loader";
import { fetchMovieStart, fetchMovieSuccess, fetchMovieFailure, fetchMovideWithReduxNew } from "../redux/MovieSlice";
import { useDispatch, useSelector } from "react-redux";


function WelcomeScreen({ navigation }) {


    const { movies, loading, error } = useSelector((state) => {
        return state.movie
    });

    const dispatch = useDispatch();


    function onItemPressHandler(movieData) {
        navigation.navigate('MovieDetailsScreen', { movieDetails: movieData.movieDetails });
    }


    function renderItemView(movie) {
        return (
            <Pressable onPress={onItemPressHandler.bind(this, { movieDetails: movie.item })}

                style={({ pressed }) => [styles.itemContainer, pressed ? styles.onPressed : null]}

            >
                <View >
                    <Image
                        style={styles.image}
                        source={{ uri: `${MOVIE_IMAGE_BASE_URL}${movie.item.poster_path}` }}
                    />

                    <Text style={styles.title}>{movie.item.title}</Text>
                </View>
            </Pressable>

        );
    }

    useEffect(() => {
        dispatch(fetchMovideWithRedux());
       
    }, [dispatch]);


 const fetchMovideWithRedux = () => async (dispatch) => {
    console.log('fetchMovideWithRedux calling111:::', movies);

    dispatch(fetchMovieStart());
    try {      
        fetchMovies().then((movies) => {
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

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={renderItemView}
                keyExtractor={(movie) => movie.id.toString()}
                numColumns={2}
                bounces={false}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyle.colors.primary200
    },
    text: {
        color: GlobalStyle.colors.black
    },
    itemContainer: {
        marginTop: 5,
        backgroundColor: GlobalStyle.colors.white,
        marginHorizontal: 3,
        borderRadius: 8,
        marginVertical: 3,
        padding: 5,
        width: '49%'
    },
    image: {
        width: '100%', height: 200,
        borderTopEndRadius: 4,
        borderTopLeftRadius: 4
    },
    title: {
        fontSize: 16,
        padding: 5,
        textAlign: 'center',
    },
    listWrapper: {
        gap: 10,
    },
    onPressed: {
        backgroundColor: 'white',
        opacity: 0.7,
    },
});

export default WelcomeScreen;
