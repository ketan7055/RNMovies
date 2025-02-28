import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
export default IconButton;

function IconButton({ icon, color, size, onPress }) {

    return (
        <Pressable onPress={onPress}
            style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        ><View style={styles.container}>

                <Ionicons name={icon} size={size} color={color}
                    // onPress={() => { }}
                     />
            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    buttonPressed: {
        opacity: .7
    }
});
