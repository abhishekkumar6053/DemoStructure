import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {View,Text} from 'react-native';
import routes from '../../assets/routes';
import forgotPassword from './forgotPassword';
import Login from './login';
const Stack = createStackNavigator();
const Onboarding=()=>{
    return(
  <Stack.Navigator >
     <Stack.Screen name={routes.onboading.login.NAME} component={Login}/>
       <Stack.Screen name={routes.onboading.forgotPassword.NAME} component={forgotPassword}/>
  </Stack.Navigator>
        )}
export default Onboarding;