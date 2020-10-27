import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image} from 'react-native';
import Header from '../components/Header';
import firebase from '@react-native-firebase/app';
var chinese_english = require('../translation/chinese_english.json');


class ITScreen extends React.Component {
   constructor(props) {
       super(props);
       this.state = { 
           input: '' ,
           output: ''
       };
   }
   render() {
       return (
         <View>
             <Header/>
           <View style = { Style.parent } >
           

           <Text style = { Style.chineseLabel } >
               Type something in Chinese:
           </Text>

           <TextInput style = { Style.textInput } 
               onChangeText={(text)=>this._onTextInputChangeText(text)} 
               value={this.state.input} 
               onSubmitEditing = { this.showMeaning.bind(this) }/>
         
           <Text style = { Style.englishLabel } >
              English equivalent is:
           </Text>


         <View style = { Style.textOutput }>
           <Text style = { Style.englishWord } >      
               {this.state.output}          
           </Text>
         </View>
          
       </View>
      </View>

       
       

       );
   }

   _onTextInputChangeText(text) {
       //alert(text);
       this.setState({
           input : text
       })
   }

   showMeaning() {
       var meaning = this.state.input in chinese_english ? 
                       chinese_english[this.state.input] : 
                       "Not Found";
   
       // Update the state
       this.setState({
           output: meaning 
       });
   }
}
var Style = StyleSheet.create({
   container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
 textInput: {
   margin: 15,
   height: 150,
   borderColor: 'black',
   borderRadius: 20 ,
   textAlign: 'center',
   fontSize: 30,

  
   borderWidth: 1
   

 },
 textOutput: {
   margin: 15,
   height: 150,
   borderColor: 'black',
   borderRadius: 20 ,
   textAlign: 'center',
   borderWidth: 1

 },
   parent: {
       padding: 16
   },
   chineseLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
},
   englishLabel: {
       marginTop: 60,
       fontWeight: 'bold',
       fontSize: 25,
       textAlign: 'center',
   },
   englishWord: {
      marginTop: 50,
       fontSize: 30,
       fontStyle: 'italic',
       textAlign: 'center',
     
   }
});
export default ITScreen;