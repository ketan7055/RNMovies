import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => { },
    logout: () => { },
});


function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();

    async function authenticate(token) {
        AsyncStorage.setItem('token', token);
        setAuthToken(token);

        const storedToken = await AsyncStorage.getItem('token');
    }


    function logout() {
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;