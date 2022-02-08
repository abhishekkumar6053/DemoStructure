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
const Dashboard= (props) =>{
    //receiving params from navigation
    console.log(props.route.params.name);
    return(
       <Tab.Navigator screenOptions={{headerShown: false}}>
           <Tab.Screen name={routes.dashboard.tabs.home.NAME} options={{title:'Home'}} component={Home}/>
           <Tab.Screen name={routes.dashboard.tabs.profile.NAME} options={{title:'Profile'}} component={Profile}/>
           <Tab.Screen name={routes.dashboard.tabs.settings.NAME} options={{title:'Settings'}} component={Settings}/>
       </Tab.Navigator>
    )}
export default Dashboard;