import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: ()=> null}}>
          {/* <Stack.Screen name = "SignIN" component = {SignInScreen} /> */}
          <Stack.Screen name = "SignUP" component = {SignUpScreen} />
         
        </Stack.Navigator>
      </NavigationContainer>
  );
}