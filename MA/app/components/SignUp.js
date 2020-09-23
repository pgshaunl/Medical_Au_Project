import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,} from 'react-native';
import HeaderScreen from './HeaderScreen';
import {Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


class SignUpScreen extends React.Component {
  render() {
    return (
      <View>
          <HeaderScreen></HeaderScreen>
        <Text style={{fontSize:30,marginLeft:40}}>Create your free account</Text>
        <Text style={{fontSize:20,marginLeft:40,marginTop:20}}>Full name</Text>
        <Input
  placeholder='What is your full name?'
  marginLeft={60}
  inputContainerStyle={{width:350,alignContent:"center",justifyContent:'center',marginLeft:20}}
/>
<Text style={{fontSize:20,marginLeft:40,marginTop:20}}>Email address</Text>
<Input
  placeholder='your@example.com'
  marginLeft={70}
  inputContainerStyle={{width:350,alignContent:"center",justifyContent:'center',marginLeft:20}}
/>
<Text style={{fontSize:20,marginLeft:40,marginTop:20}}>Password</Text>
<Input
  placeholder='Enter 8 characters or more'
  marginLeft={60}
  inputContainerStyle={{width:350,alignContent:"center",justifyContent:'center',marginLeft:20}}
  secureTextEntry={true}
/>
<TouchableOpacity style={[styles.button2,{width:300,marginLeft:60,backgroundColor:'#2b78d4'}]}
         onPress={()=>{alert(1)}}>
           
           <Text style={styles.buttonText2}>Create your free account</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button2:{
        width:200,
        height:50,
        borderRadius:400,
        backgroundColor:'red',
        justifyContent:'center',
        alignContent:'center',  
        alignItems:'center',
         marginLeft:1,
        marginTop:10,
        backgroundColor:'#46bbab'
  
  
      },
      buttonText2:{
        fontSize:25,
        color:'white',
      },
  });

export default SignUpScreen;