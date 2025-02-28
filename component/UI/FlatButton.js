import { View, Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyle } from "../GlobalStyle";
export default FlatButton;
function FlatButton({ text, onPress, style }) {


    return (
        <View style={[styles.buttonContainer, style]}>

            <Pressable onPress={onPress}
                style={({ pressed }) => pressed && styles.onPressButton}>

                <View style={styles.container}>
                    <Text style={styles.text}>{text}</Text>
                </View>

            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: GlobalStyle.colors.yellow100,
        borderRadius: 4,
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 8,

    },
    onPressButton: {
        opacity: .75,
        backgroundColor: GlobalStyle.colors.blue200


    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }
});