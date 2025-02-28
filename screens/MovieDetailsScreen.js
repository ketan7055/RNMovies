
import { Text, View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { GlobalStyle } from "../component/GlobalStyle";
import { Colors } from "react-native/Libraries/NewAppScreen";

function MovieDetailsScreen({ props, route }) {
    console.log('MovieDetailsScreen movieDetails:::', route.params.movieDetails);
    const details = route.params.movieDetails;
    return (
        <ScrollView style={styles.container}>
            <View >
                <ImageBackground
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${route.params.movieDetails.poster_path}` }}
                >
                    <View style={styles.textContainer}>
                    <Text style={styles.text}>{details.title}</Text>
                    </View>

                </ImageBackground>
                <View style={{ padding: 5 }}>

                    <Text>
                        <Text style={styles.textTitle}>Overview: </Text>
                        {details.overview}
                    </Text>
                    <Text>
                        <Text style={styles.textTitle}>Language: </Text>
                        {details.original_language}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default MovieDetailsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: GlobalStyle.colors.white
    },
    text: {
        fontSize: 20,
        color: GlobalStyle.colors.darkRed100
    },
    title: {
        fontSize: 16,
        color: GlobalStyle.colors.darkRed100
    },
    image: {
        width: '100%', height: 300,
        resizeMode: 'cover',
        justifyContent: "center", 
    },
    textTitle: {
        color: GlobalStyle.colors.darkRed100, fontSize: 18,
        fontWeight: 'bold'
    },
    textContainer: {
        alignSelf: "center", // 👈 Centers text horizontally
        backgroundColor: "rgba(255, 255, 255, 0.5)", // 👈 Adds a semi-transparent background
        padding: 10,
        borderRadius: 5,
        marginBottom: 10, // 👈 Adds space from bottom
      },
});