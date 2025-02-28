import { View, Text, StyleSheet } from "react-native";
import { GlobalStyle } from "../GlobalStyle";
import Input from "./Input";
import FlatButton from "./FlatButton";
import LinkText from "./LinkText";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function AuthForm({ onSubmit }) {
    const [email, setEmail] = useState('saini@yopmail.com');
    const [password, setPassword] = useState('123456');
    const nacigation = useNavigation();

    function onLoginHandler() {
        onSubmit({ email: email, password: password });

    }

    function singnUpHandler() {
        nacigation.replace('Signup');

    }

    return (
        <View style={styles.container}>

            <Input style={styles.inputContainer} label='Email Address'
                onUpdateValue={setEmail}
                value={email}
            />
            <Input style={styles.inputContainer} label='Password' securityText={true}
                onUpdateValue={setPassword}
                value={password}
            />
            <FlatButton
                text='Login'
                onPress={onLoginHandler}
                style={{ marginTop: 20 }}
            />
            <LinkText onPress={singnUpHandler}>Dont have an account, Signup Now</LinkText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: GlobalStyle.colors.darkRed100,
        width: '90%',
        margin: 20,
        padding: 20,
        borderRadius: 8
    },
    text: {
        color: GlobalStyle.colors.black,
        fontSize: 24
    },

    inputContainer: {
        color: GlobalStyle.colors.yellow100,
        marginTop: 20
    }
});

export default AuthForm;