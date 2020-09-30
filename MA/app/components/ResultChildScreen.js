import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderScreen from './HeaderScreen';
import LinearGradient from "react-native-linear-gradient";

class ResultChildScreen extends React.Component {


    render() {
        return (
            <View style={{flex:1, backgroundColor:"white"}}>
                <HeaderScreen/>
                <ScrollView>
                    <Text style={styles.leftLabel}>Result:</Text>

                    <View style={{flexDirection:"row",margin:10}}>
                        <Image style={styles.image} source={require('../img/icons/ic_one.jpg')} resizeMode={"center"}></Image>

                        <Text style={styles.border}>Have a cold</Text>
                    </View>

                    <Text style={styles.leftLabel}>Suggestion:</Text>
                    <View style={{flexDirection:"row",margin:10}}>
                        <Image style={styles.image} source={require('../img/icons/ic_two.jpg')} resizeMode={"center"}></Image>
                        <View style={{flexDirection:"column",marginLeft:20}}>
                            <Text style={styles.label}>1. Drink more water</Text>
                            <Text style={styles.label}>2. Take more rest</Text>
                            <Text style={styles.label}>1. Take cold medicine</Text>
                            <Text style={styles.label}>1. Don‘t eat seafood</Text>
                            <Text style={styles.label}>....</Text>
                        </View>
                    </View>

                    <Text style={styles.hitText}>Do you need an online booking?</Text>
                    <View style={{ alignItems:"center",
                        justifyContent:"center"}}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                        colors={['#2b78d4', '#46bbab']}
                                        style={{
                                            padding:12,
                                            marginTop:20,
                                            borderRadius:8,
                                            width:200,

                                        }}>
                            <Text style={styles.imgText}>Online booking</Text>

                        </LinearGradient>
                    </View>

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    leftLabel: {
        margin:10,
        fontSize:20,
        fontWeight:"bold"
    },
    image:{
        width:30,
        height:40
    },
    border:{
        width:"67%",
        height: 40,
        borderWidth:1.5,
        borderRadius:16,
        borderColor:"#E5E5E5",
        color: "#1ebae3",
        textAlign:"center",
        lineHeight:40,
        fontSize:18,
        marginLeft:15,
        textDecorationLine:"underline"
    },
    label: {
        fontSize:20,
        fontWeight:"bold"
    },
    hitText: {
        marginTop:40,
        textAlign:"center",
        fontSize:20,
    },
    imgText: {
        textAlign:"center",
        fontSize:20,
        color: "white",
    },

});

export default ResultChildScreen;
