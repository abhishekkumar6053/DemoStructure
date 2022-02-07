import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View,Text, Pressable, StyleSheet} from 'react-native';
import routes from '../../assets/routes';
import Home from './home';
import Profile from './profile';
import Settings from './settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Dashboard=()=>{
    return(
       <Tab.Navigator headerMode='none'>
           <Tab.Screen name={routes.dashboard.tabs.home.NAME} component={Home}/>
           <Tab.Screen name={routes.dashboard.tabs.profile.NAME} component={Profile}/>
           <Tab.Screen name={routes.dashboard.tabs.settings.NAME} component={Settings}/>
           
       </Tab.Navigator>
    )}

 
export default Dashboard;

