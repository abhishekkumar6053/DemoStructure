import React from "react";
import {StyleSheet, Text,View} from "react-native";

const Header=({title}:{title:string})=>{
    return(
        <View style={styles.parent}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    parent:{

    },
    text:{
        fontSize:24,
        color:'darkgrey',
        padding:12,
    }
})
export default Header;