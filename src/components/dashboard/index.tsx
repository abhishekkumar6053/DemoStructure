import React from 'react';
import {View,Text, Pressable} from 'react-native';
import routes from '../../assets/routes';
const Dashboard=({navigation})=>{
    return(
       <Pressable onPress={()=>navigation.navigate(routes.onboading.NAME)}>
  <Text>I'm pressable!</Text>
</Pressable>
    
    )}
export default Dashboard;