/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{ Component }from 'react';

import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class LanguageScreen extends React.Component{
 
   render() {
   return(
     <View style={styles.container}>
       
       <LinearGradient start={{x: 0.25, y: 0.25}} end={{x: 0.75, y: 0.75}}
          colors={['#2b78d4','#46b6a6']}>
       <View style={styles.topCard}>
       <Text style={{fontSize:20,color:'white',marginTop:30,marginLeft:8,textDecorationLine:'underline'}}>cancel</Text>
         <Text style={{fontSize:40,color:'white',textAlign:'center',marginTop:15,}}>Language</Text>
         <TouchableOpacity style={styles.button}
         onPress={()=>{alert(1)}}>
           
           <Text style={styles.buttonText}>Done</Text>
         </TouchableOpacity>
      
        


       </View>
       </LinearGradient>
       <View style={styles.card}>
         <Image source={require('./src/auth/images/china.png')} style={styles.imgStyle}></Image>
         <Text style={styles.languageStyle}>CHINESE</Text>
       </View>
       <View style={[styles.card]}>
       <Image source={require('./src/auth/images/australia.png')} style={styles.imgStyle}></Image>
         <Text style={styles.languageStyle}>ENGLISH</Text>
         <Image source={require('./src/auth/images/yesFlag.jpg')} style={{width:50,height:50,marginTop:15,marginRight:-100,marginLeft:50,}}></Image>
       </View>
       <View style={[styles.card]}>
       <Image source={require('./src/auth/images/japan.png')} style={[styles.imgStyle,{marginLeft:-80}]}></Image>
         <Text style={[styles.languageStyle,{marginLeft:-30}]} >JAPANESE</Text>
       </View>
       <View style={[styles.endView]}>
       <LinearGradient start={{x: 0.25, y: 0.25}} end={{x: 0.75, y: 0.75}}
          colors={['#2b78d4','#46b6a6']} style={{borderRadius:25}}>
       <TouchableOpacity style={styles.button2}
         onPress={()=>{alert(1)}}>
           
           <Text style={styles.buttonText2}>CONTINUE</Text>
         </TouchableOpacity>
         </LinearGradient>
         
         
       </View>
     </View>
     
     

  
     
   )
     
   }
 

    }

 const buttonClick =()=>{
   Alert.alert("hello");
 }
       
   

 const styles = StyleSheet.create({
   button:{
     marginTop:25,
     marginRight:10,

     height:40,
     width:50,
     borderRadius:25,
     backgroundColor:'green',
     justifyContent:'center',
     
   },
   button2:{
 

    height:75,
    width:175,

    
    justifyContent:'center',
    
  },
   buttonText:{
    justifyContent:'center', 
    textAlign:'center',
    color:'white',

   },
   buttonText2:{
     fontSize:30,
    justifyContent:'center', 
    textAlign:'center',
    color:'white',

   },
   topCard:{
    justifyContent:'space-between',
     flexDirection:'row',
     height:100,
     

   },
   container:{
     flex:1,
     
     backgroundColor:'white'
   },
   card:{
    justifyContent:'center',
    flexDirection:'row',
     height:100,
     backgroundColor:'white',
     borderColor:'black',
     borderBottomWidth:2
  
   },

   endView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',

   },

   imgStyle:{
     marginTop:25,
     marginLeft:-80,
     
     width:40,
     height:40,
     

   },
   languageStyle:{
     marginTop:15,
     fontSize:40,
     color:'black',
     paddingLeft:50,

   }

   
 })
 export default LanguageScreen;
