import { StyleSheet, Text, Pressable } from "react-native";
import { GlobalStyle } from "../GlobalStyle";
export default LinkText;
function LinkText({ children, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    text: {
        color: GlobalStyle.colors.yellow100,
        marginTop: 20,
        fontSize: 14,
        padding: 5
    }
});