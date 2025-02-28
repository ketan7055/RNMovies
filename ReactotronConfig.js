import Reactotron from "reactotron-react-native";

if (__DEV__) { // Only enable in development mode
  Reactotron.configure({ name: "React Native App" }) // App name
    .useReactNative() // Add React Native support
    .connect(); // Connect to Reactotron

  console.tron = Reactotron; // Enable console.tron
  Reactotron.clear(); // Clear Reactotron on every app reload
}
