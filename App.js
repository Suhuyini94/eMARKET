import React from "react";
import 'react-native-gesture-handler';
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
// import SignInScreen from "./screens/SignInScreen";
// import SignUpScreen from './screens/SignUpScreen';
import COLORS from "./screens/const/color";

export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <StatusBar backgroundColor = {COLORS.white} barStyle = 'dark-content' />
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
          <Stack.Screen name = 'DetailsScreen' component = {DetailsScreen} />
          {/* <Stack.Screen name = "SignUP" component = {SignUpScreen} />
          <Stack.Screen name = "SignIN" component = {SignInScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}