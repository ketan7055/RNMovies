import { View, Alert } from "react-native";
import SignUpAuthForm from "../component/UI/SignUpAuthForm";
import { createUser, createUserNew } from "../utils/Auth";
import { useContext, useState } from "react";
import Loader from "../component/UI/Loader";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {

    const authContext = useContext(AuthContext);

    const [isLoding, setIsLoading] = useState(false);

    async function signupHandler({ email, password }) {
        console.log('email:::', email);
        console.log('email:::', password);

        try{
        setIsLoading(true);
       const token = await createUserNew(email, password);
       console.log('Signup token:::', token);
        authContext.authenticate(token);
        setIsLoading(false);
    }
    catch (error) {
        setIsLoading(false);
        console.log('error:: ', error);
        Alert.alert('Authenticatoin Error', 'Something wen wrong')

    }

    }
    if (isLoding) {
        return (
            < Loader message='Not working '/>
        );
    }

    return (
        <SignUpAuthForm onSubmit={signupHandler} />
    );
}

export default SignupScreen;