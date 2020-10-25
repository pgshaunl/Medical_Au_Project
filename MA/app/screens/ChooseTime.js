import React from 'react';
import { StyleSheet, Text, View, Button,TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

class ChooseTimeScreen extends React.Component {
  render() {
    var {doctor,hospital,date,unWork,hospitalAddress} = this.props.route.params;
    var unWorkTime = unWork;
    var isChoosed = false;
    var slotChoosed = null;
    const TimeZone = ["9:00 -- 9:30","9:30 -- 10:00","10:00 -- 10:30","10:30 -- 11:00","11:00 -- 11:30","11:30-- 12:00","12:00 -- 12:30","12:30 -- 13:00","13:00 -- 13:30",
    "13:30-- 14:00","14:00 -- 14:30","14:30 -- 15:00","15:00 -- 15:30","15:30 -- 16:00","16:00 -- 16:30","16:30 -- 17:00"];

    
    
    return (
      <View>
           <Header/>
          <Text>Doctor: {doctor}</Text>
        <Text>Hospital:{hospital}</Text>
        <Text>Address: {hospitalAddress}</Text>
        <Text>Date: {date}</Text>
        
        
        <Text>UnWork: {unWork}</Text>
        <Text>UnWorkTime: {unWorkTime}</Text>
        <Text>TimeZone:{TimeZone.length}</Text>
        
        <Text style={{marginLeft:180}}>Morning</Text>
              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(1) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(1)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[0]);
                        slotChoosed = TimeZone[0];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[0]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(2) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(2)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[1]);
                        slotChoosed = TimeZone[1];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[1]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(3) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(3)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[2]);
                        slotChoosed = TimeZone[2];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[2]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(4) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(4)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[3]);
                        slotChoosed = TimeZone[3];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[3]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(5) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(5)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[4]);
                        slotChoosed = TimeZone[4];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[4]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(6) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(6)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[5]);
                        slotChoosed = TimeZone[5];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[5]}</Text>
              </TouchableHighlight>

              <Text style={{marginLeft:180}}> Afternoon</Text>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(7) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(7)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[6]);
                        slotChoosed = TimeZone[6];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[6]}</Text>
              </TouchableHighlight>

           

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(8) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(8)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[7]);
                        slotChoosed = TimeZone[7];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[7]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(9) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(9)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[8]);
                        slotChoosed = TimeZone[8];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[8]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(10) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(10)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[9]);
                        slotChoosed = TimeZone[9]
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[9]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(11) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(11)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[0]);
                        slotChoosed = TimeZone[10];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[10]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(12) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(12)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[11]);
                        slotChoosed = TimeZone[11];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[11]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(13) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(13)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the "+ TimeZone[12]) ;
                        slotChoosed = TimeZone[12];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[12]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(14) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(14)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[13]);
                        slotChoosed = TimeZone[13];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[13]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(15) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(15)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[14]);
                        slotChoosed = TimeZone[14];
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[14]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(16) ? "grey" : "green"}}
                onPress={()=>{
                    if(unWorkTime.includes(16)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        alert("You have choosed the " + TimeZone[15]);
                        slotChoosed = TimeZone[15];
                        
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[15]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: "red"}}
                onPress={()=>{
                    if(slotChoosed == null) {
                        alert("Sorry, Please select a time")
                    }else {
                        this.props.navigation.navigate("Confirm",{doctor:doctor,date:date,hospital:hospital,hospitalAddress:hospitalAddress,unWork:unWork,slotChoosed:slotChoosed})
                        
                        
                    }
                
                
                }}
                
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
    timeButton:{
        
        marginLeft:150,
        height:20,
        width:100,
        backgroundColor:"grey",
    }
  });

export default ChooseTimeScreen;