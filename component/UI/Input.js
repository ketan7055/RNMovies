import { View, Text, StyleSheet, TextInput } from "react-native";
import { GlobalStyle } from "../GlobalStyle";
export default Input;


function Input({ label, onUpdateValue , value, securityText}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} 
                onChangeText={onUpdateValue}
                value={value}
                secureTextEntry={securityText} 
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: GlobalStyle.colors.primary300,
        height: 35,
        justifyContent: 'center',
        paddingHorizontal: 5,
        fontSize: 30,
        marginTop: 5,
        borderRadius: 5


    },
    label: {
        color: GlobalStyle.colors.primary300,
        fontSize: 15
    },
    container: {
        width: '100%',
        marginBottom: 10
    },
    textInput: {
        fontSize: 20
    }
});