import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/views/screens/HomeScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import SignInScreen from './src/views/screens/SignInScreen';
import SignUpScreen from './src/views/screens/SignUpScreen';
import { StatusBar } from 'react-native';
import COLORS from './src/consts/color'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Customise status bar */}
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: true }}
        initialRouteName="SignIn"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product Details" component={DetailsScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
