import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import LinearGradient from "react-native-linear-gradient";

class SCScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:"white"}}>
                <Header/>
                <Text style={styles.hitText}>Hi, are you an adult or child?</Text>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.rowItem}
                                      onPress={()=>{
                                          this.props.navigation.navigate('Questions', {type: 'adult'})
                                      }}>
                        <View style={styles.rowItem}>
                            <Image style={styles.image} source={require('../img/icons/ic_audlt.jpg')} resizeMode={"center"}></Image>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                            colors={['#2b78d4', '#46bbab']}
                                            style={{
                                                paddingLeft: 15,
                                                paddingRight: 15,
                                                marginTop:20,
                                                borderRadius:4
                                            }}>
                                <Text style={styles.imgText}>Adult</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowItem}
                                      onPress={()=>{
                                          this.props.navigation.navigate('Questions',  {type: 'child'})
                                      }}>
                        <View style={styles.rowItem}>
                            <Image style={styles.image} source={require('../img/icons/ic_child.jpg')} resizeMode={"center"}></Image>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                            colors={['#2b78d4', '#46bbab']}
                                            style={{
                                                paddingLeft: 15,
                                                paddingRight: 15,
                                                marginTop:20,
                                                borderRadius:4
                                            }}>
                                <Text style={styles.imgText}>Child</Text>

                            </LinearGradient>
                        </View>
                    </TouchableOpacity>

                </View>
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

export default SCScreen;
