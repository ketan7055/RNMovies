import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyle } from "../GlobalStyle";
export default Loader;
function Loader({message}) {
    return (<View style={styles.container}>

        <ActivityIndicator size='large' color="white" />

    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyle.colors.primary200
    }
});