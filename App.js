import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './screens/home';
import login from './screens/login';
import register from './screens/register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="register" component={register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}