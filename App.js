import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalStyle } from './component/GlobalStyle';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import WelcomeScreen from './screens/WelcomeScreen';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import IconButton from './component/UI/IconButton';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from 'expo-app-loading';
import "./ReactotronConfig"; // Import Reactotron config
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import { Provider } from 'react-redux';
import { movieStore } from './redux/movieStore';

const Stack = createNativeStackNavigator();

export default function App() {
  console.tron.log("Reactotron is connected! 🚀"); // Log test

  return (
    <>
      <StatusBar style='light' />
      <Provider store={movieStore}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </Provider>
    </>
  );
}

function AuthenticatedStack() {
  const authContext = useContext(AuthContext);

  function logoutHandler() {
    authContext.logout();
    AsyncStorage.removeItem('token');
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyle.colors.darkRed100 },
        headerTintColor: GlobalStyle.colors.white,
        contentStyle: { backgroundColor: GlobalStyle.colors.primary300 }
      }} >
      <Stack.Screen
        component={WelcomeScreen}
        name='Welcome'
        options={{
          headerRight: () =>
            <IconButton icon='exit' size={24} color={GlobalStyle.colors.white}
              onPress={logoutHandler} />
        }}

      />


      <Stack.Screen
        component={MovieDetailsScreen}
        name='MovieDetailsScreen'

      />
    </Stack.Navigator>
  );
}

function Root() {

  const [isTryingLoading, setIsTryingloading] = useState(true);
  const authContext = useContext(AuthContext);


  useEffect(() => {
    async function fetchToken() {
      const savedToken = await AsyncStorage.getItem('token');

      console.log('useEffect token : ', storedToken);

      if (savedToken) {
        authContext.authenticate(savedToken);
      }
    }

    fetchToken();

  }, []);
  if (isTryingLoading) {
    return <AppLoading />
  }

  return <Navigation />

}

function AuthApp() {

  return (

    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyle.colors.darkRed100 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: GlobalStyle.colors.primary200 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
function Navigation() {
  const authContext = useContext(AuthContext);
  console.log('authContext.isAuthenticated: ', authContext.isAuthenticated);
  return (
    <NavigationContainer>

      {!authContext.isAuthenticated && <AuthApp />}
      {authContext.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}