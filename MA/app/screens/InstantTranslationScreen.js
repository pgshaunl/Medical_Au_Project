import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image} from 'react-native';
import Header from '../components/Header';
import {Picker} from '@react-native-community/picker';


class ITScreen extends React.Component {
  state = {
    input: '',
    output: '',
    language_input: 'English',
    language_output: 'Japanese'
   }

 handleInput = (text) => {
    this.setState({ input: text })
 }
 handlePOutput = (text) => {
    this.setState({ output: text })
 }
 submit = (input, output) => {
    alert('English: ' + input + ' 英语: ' + output)
 }

   render() {
   
    return (
      <View>
        <Header/>
         
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Put your text here"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleinput}/>
            
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Translated text appears here"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleoutput}/>


               
         <View style={{flexDirection: 'row', justifyContent: 'space-evenly',margin: 20}}>              

            <Picker
               selectedValue={this.state.language_input}
               style={{height: 50, width: 100}}
               onValueChange={(itemValue, itemIndex) =>
               this.setState({language_input: itemValue})
            }>
            <Picker.Item label="English" value="En" />
            <Picker.Item label="Chinese" value="Cn" />
            <Picker.Item label="Japanese" value="Jp" />
            </Picker>
            
            <Image
               source={require('../img/icons/Arrow.png')}
               style={styles.image}
            />
          
            <Picker
            selectedValue={this.state.language_output}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language_output: itemValue})
            }>
            <Picker.Item label="English" value="En" />
            <Picker.Item label="Chinese" value="Cn" />
            <Picker.Item label="Japanese" value="Jp" />
            </Picker>
         </View>
        

        
         <TouchableOpacity
            style = {styles.submitButton}
               onPress = {
                  () => this.submit(this.state.input, this.state.output)
               }>
            <Image 
               style={{width: 50, height: 50}}
               source={require("../img/icons/microphone.png")}
            />
         </TouchableOpacity>

         

            
   </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
      input: {
         margin: 15,
         height: 150,
         borderColor: 'black',
         borderRadius: 20 ,
         textAlign: 'center',
         borderWidth: 1
      },
      submitButton: {
   
         alignItems: 'center',
         margin: 25

      },
     
      image: {
         tintColor: "#000000",
         resizeMode: "contain",
         height: 40,
         width: 40,
         alignItems: 'center'
         
       },
    
   

   })


export default ITScreen;