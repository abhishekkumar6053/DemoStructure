import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,Text, StyleSheet, Pressable} from 'react-native';
import routes from '../../../assets/routes';
const nameOfUser = 'abhi';
const Login=()=>{
    const navigation = useNavigation();
    const onPress=()=>{
        navigation.navigate(routes.dashboard.NAME,{name:nameOfUser});
    }
    return(
    <View style={styles.parent}>
        <Pressable onPress={onPress}>
        <Text style={styles.text}>Login</Text>
        </Pressable>    
    </View>
    )}

const styles = StyleSheet.create({
parent:{
    flex:1,
   justifyContent:'center',
   alignItems:'center',
 
},
text:{
    borderRadius:12,   
    borderWidth:1,
    padding:4,
    backgroundColor:'green',
    color:'white',
}
})
export default Login;