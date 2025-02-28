import { View, Text, StyleSheet, Alert } from "react-native";
import { GlobalStyle } from "../component/GlobalStyle";
import AuthForm from "../component/UI/AuthForm";
import { userLogin } from "../utils/Auth";
import { useState, useContext } from "react";
import Loader from "../component/UI/Loader";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
    const authCtx = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async function onLoginHandler({ email, password }) {
        console.log('email11: ', email == null );
        if(!isValidEmail(email) || password == null || password.trim().length === 0 || password.trim().length < 6){
            Alert.alert('Authenticatoin Error', 'Please check your credential.')

            return;
        }
        console.log('Login email: ', email);
        console.log('Login password: ', password);
      
        setIsLoading(true);
        try {
           const token = await userLogin(email, password);
        //    console.log('Login token: ', token);
      
            authCtx.authenticate(token);
            setIsLoading(false);
        }
        catch (error) {
            setIsLoading(false);
            console.log('error login:: ', error);
            Alert.alert('Authenticatoin Error', 'Please check your credential.')

        }

    }

    if (isLoading) {
        return (
            <Loader />
        );
    }

    return (
        <View style={styles.container}>
            <AuthForm onSubmit={onLoginHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: GlobalStyle.colors.black,
        fontSize: 24
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoginScreen;