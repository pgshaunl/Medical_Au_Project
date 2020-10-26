import React from 'react';
import { StyleSheet, Text, View, Button,TouchableHighlight,Alert } from 'react-native';
import Header from '../components/Header';

class ConfirmScreen extends React.Component  {
       
  render() {
    var {doctor,TimeChoosed,hospital,date,hospitalAddress,slotChoosed} = this.props.route.params;
    
    return (
      <View>
        <Header/>
        
        
        {/* <Button onPress ={this.getData} title="get Data"></Button> */}
        <Text>Doctor: {doctor}</Text>
        <Text>Hospital:{hospital}</Text>
        <Text>Address: {hospitalAddress}</Text>
        <Text>Date: {date}</Text>
        <Text>Choosed Time:{slotChoosed}</Text>
        <TouchableHighlight
                style={{  backgroundColor:"red"}}
                onPress={()=>{Alert.alert("Congratulations!","Successfully booked!")}}
                
              >
                <Text >Confirm</Text>
              </TouchableHighlight>
         
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
  });

export default ConfirmScreen;
