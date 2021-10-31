
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <View>
      <NavigationContainer>
         <Stack.Navigator screenOptions = {{header:()=>null}}>
            <Stack.Screen name = "Home" component = {SignInScreen} />
            <Stack.Screen name = "SignUP" component = {SignUpScreen} />
         </Stack.Navigator>
      </NavigationContainer>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
