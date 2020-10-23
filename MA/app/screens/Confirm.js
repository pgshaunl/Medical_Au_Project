import React from 'react';
import { StyleSheet, Text, View, Button,TouchableHighlight } from 'react-native';
import Header from '../components/Header';




const a =344445;
console.log(a);

// const {userId} = this.props.route.params;
// console.log(JSON.stringify(userId));

// function getData( {route,navigation}) {
//     return
// }

class ConfirmScreen extends React.Component  {
    
    getData = () =>{
        // let idUser = this.props.route.params.idUser;
        
    // var {doctor,TimeChoosed,hospital,date,hospitalAddress} = this.props.route.params;
    // // var {TimeChoosed} = this.props.route.params;
    // // userInfsProfile = 1;
    // console.log(doctor);
    // console.log(TimeChoosed);
    // console.log(date);
    // console.log(hospital);
    // console.log(hospitalAddress);
    
    // console.log(JSON.stringify("dd"+userInfsProfile.userName));
    }
    
    
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
                onPress={()=>{alert("Successfully booked!")}}
                
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
