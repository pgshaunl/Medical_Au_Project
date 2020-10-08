import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderScreen from './HeaderScreen';
import LinearGradient from "react-native-linear-gradient";


class TimeScreen extends React.Component {
    render() {
        return (
            <View>
                <HeaderScreen/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hitText: {
        marginTop:60,
        textAlign:"center",
        fontSize:20
    },
    container: {
        flex: 1,
        flexDirection:"row",
        marginTop: 40
    },
    rowItem:{
        flex: 1,
        flexDirection:"column",
        backgroundColor:"white",
        alignItems:"center"
    },
    image:{
        width:180,
        height:300,
        borderWidth:2,
        borderRadius:8,
        borderColor:"#E5E5E5",
    },
    imgText: {
        textAlign:"center",
        fontSize:20,
        color:"white"
    },
});

export default TimeScreen;
