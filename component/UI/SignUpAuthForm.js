import { View, Text, StyleSheet,Alert } from "react-native";
import { GlobalStyle } from "../GlobalStyle";
import Input from "./Input";
import FlatButton from "./FlatButton";
import LinkText from "./LinkText";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


function SignUpAuthForm({ onSubmit }) {
    const [emailId, setEmialId] = useState();
    const [confirmEmailId, setConfirmEmialId] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const nacigation = useNavigation();
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function signupHandler() {
        console.log('email:::', emailId);

        console.log('confirmEmailId:::', confirmEmailId);
        console.log('password:::', password);
        console.log('confirmPassword:::', confirmPassword);
        console.log('condition1:::',  isValidEmail(emailId) );
        console.log('condition2:::', !isValidEmail(emailId) || password == null || password.trim().length >5
        || confirmEmailId !== emailId || password !== password);
        if (!isValidEmail(emailId) ||  password.trim().length <5
            || confirmEmailId !== emailId || password !== password

        ) {
            Alert.alert('Authenticatoin Error', 'Please check your credential.')

            return;
        }
        onSubmit({ email: emailId, password: password });
    }

    function updateInputValueHandler(inputType, value) {
        switch (inputType) {
            case 'Email':
                setEmialId(value);
                break;
            case 'ConfirmEmail':
                setConfirmEmialId(value);
                break;
            case 'Password':
                setPassword(value);
                break;
            case 'ConfirmPassword':
                setConfirmPassword(value);
                break;

        }
    }

    function loginLinkHandler() {
        nacigation.replace('Login');

    }

    return (
        <View style={styles.container}>

            <Input style={styles.inputContainer} label='Email Address'
                value={emailId}
                onUpdateValue={updateInputValueHandler.bind(this, 'Email')}
            />

            <Input style={styles.inputContainer} label='Confirm Email Address'

                securityText={true}
                value={confirmEmailId}
                onUpdateValue={updateInputValueHandler.bind(this, 'ConfirmEmail')}
            />

            <Input style={styles.inputContainer} label='Password' securityText={true}
                value={password}
                onUpdateValue={updateInputValueHandler.bind(this, 'Password')}
            />

            <Input style={styles.inputContainer} label='Confirm Password' securityText={true}
                value={confirmPassword}
                onUpdateValue={updateInputValueHandler.bind(this, 'ConfirmPassword')}
            />

            <FlatButton
                text='SignUp'
                onPress={signupHandler}
                style={{ marginTop: 20 }}
            />
            <LinkText onPress={loginLinkHandler}>Login Now</LinkText>
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

export default SignUpAuthForm;