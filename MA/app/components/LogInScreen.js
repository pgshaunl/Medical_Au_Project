import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import HeaderScreen from './HeaderScreen';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const {width,height} = Dimensions.get("window");
const buttonClick =()=>{
  Alert.alert("hello");
}

class LogInScreen extends React.Component {
  render() {
    return (
      <View style={{width,height}}>
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        colors={['#2b78d4', '#46bbab']} 
        style={{flex: 1,
      paddingLeft: 15,
      paddingRight: 15,}}>


<TouchableOpacity style={styles.buttonTitle}
         onPress={()=>{alert(1)}}>
           
           <Text style={styles.buttonTextTitle}>BG</Text>
         </TouchableOpacity>
         <Text style={{fontSize:35,justifyContent:'center',marginLeft:105,color:"white",marginTop:10}}>Bubble Guys</Text>
        

<Input
  placeholder='User Name'
  placeholderTextColor='white'
 
  marginLeft={40}
 
  
  leftIcon={
    <Icon
      name='user'
      size={30}
      color='white'
      
    />
    
  }
  inputContainerStyle={{borderBottomColor:'white',marginTop:60,paddingLeft:20}}
  
  
  
/>


<Input
  placeholder='Password'
  placeholderTextColor='white'
  marginLeft={40}
  
 
  

  leftIcon={
    <Icon
      name='user'
      size={30}
      color='white'
      
    />}
    inputContainerStyle={{borderBottomColor:'white',paddingLeft:20}}
    secureTextEntry={true}
/>

<TouchableOpacity style={styles.button2}
         onPress={()=>{alert(1)}}>
           
           <Text style={styles.buttonText2}>Sign In</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button3}
         onPress={()=>{alert(1)}}>
           
           <Text style={styles.buttonText3}>Forgot Password</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.button2,{width:300,marginLeft:40,backgroundColor:'#2b78d4'}]}
         onPress={()=>{alert(1)}}>
           
           <Text style={styles.buttonText2}>Login via Facebook</Text>
         </TouchableOpacity>
         <Text style={{color:'white',marginLeft:100,marginTop:15}}>Don't have an account?  Sign Up</Text>
         

 </LinearGradient>

 
     



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

    titleView:{
      
      height:20,
      backgroundColor:'red',
    },

    buttonTitle:{
      
      height:110,
      width:110,
      borderRadius:400,
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      borderColor:'white',
      borderWidth:1,
      backgroundColor:'transparent',
      marginLeft:145,
      marginTop:30,
  },
    buttonTextTitle:{
      justifyContent:'center', 
    textAlign:'center',
    fontSize:35,

    color:'white',

    },

    button2:{
      width:200,
      height:50,
      borderRadius:400,
      backgroundColor:'red',
      justifyContent:'center',
      alignContent:'center',  
      alignItems:'center',
       marginLeft:90,
      marginTop:10,
      backgroundColor:'#46bbab'


    },
    buttonText2:{
      fontSize:25,
      color:'white',
    },
    button3:{
      backgroundColor:'transparent',
      marginLeft:135,
      marginTop:20,

    },
    buttonText3:{
      color:'white'
      
    }
  });

export default LogInScreen;