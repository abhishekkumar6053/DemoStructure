import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../components/dashboard';
import routes from '../assets/routes';
import onboarding from '../components/onboarding';

const Stack = createNativeStackNavigator();

const Root=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.onboading.NAME} component={onboarding} /> 
      <Stack.Screen name={routes.dashboard.NAME} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Root;