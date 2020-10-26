import React from 'react';
import { StyleSheet, Text, View, Button,TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

class ChooseTimeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalSlot:null,
      slot1:false,
      slot2:false,
      slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:null,

      }
  }
  

  changeColor1() {
    this.setState({
    slot1:true,
    slot2:false,
    slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"9:00 -- 9:30",
  });

};

changeColor2() {
  this.setState({
   slot1:false,
   slot2:true,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"9:30 -- 10:00",
 });

};

changeColor6() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:true,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"11:30 -- 12:00",
 });

};

changeColor3() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:true,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"10:00 -- 10:30",
 });

};
changeColor4() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:true,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"10:30 -- 11:00",
 });

};
changeColor5() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:true,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"11:00 -- 11:30",
 });

};
changeColor7() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:true,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"12:00 -- 12:30",
 });

};
changeColor8() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:true,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"12:30-- 13:00",
 });

};
changeColor9() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:true,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"13:00 -- 13:30",
 });

};
changeColor10() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:true,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"13:00 -- 14:00",
 });

};
changeColor11() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:true,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"14:00 -- 14:30",
 });

};
changeColor12() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:true,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"14:30 -- 15:00",
 });

};
changeColor13() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:true,
      slot14:false,
      slot15:false,
      slot16:false,
      finalSlot:"15:00 -- 15:30",
 });

};
changeColor14() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:true,
      slot15:false,
      slot16:false,
      finalSlot:"15:30 -- 16:00",
 });

};
changeColor15() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:true,
      slot16:false,
      finalSlot:"16:00 -- 16:30",
 });

};
changeColor16() {
  this.setState({
   slot1:false,
   slot2:false,
   slot3:false,
      slot4:false,
      slot5:false,
      slot6:false,
      slot7:false,
      slot8:false,
      slot9:false,
      slot10:false,
      slot11:false,
      slot12:false,
      slot13:false,
      slot14:false,
      slot15:false,
      slot16:true,
      finalSlot:"16:30 -- 17:00",
 });
 

};



  render() {
    
    var {doctor,hospital,date,unWork,hospitalAddress} = this.props.route.params;
    var unWorkTime = unWork;
    // var isChoosed = false;
    var slotChoosed = null;
    var TimeZone = ["9:00 -- 9:30","9:30 -- 10:00","10:00 -- 10:30","10:30 -- 11:00","11:00 -- 11:30","11:30-- 12:00","12:00 -- 12:30","12:30 -- 13:00","13:00 -- 13:30",
    "13:30-- 14:00","14:00 -- 14:30","14:30 -- 15:00","15:00 -- 15:30","15:30 -- 16:00","16:00 -- 16:30","16:30 -- 17:00"];


    
    return (
      <View>
           <Header/>
          <Text style={styles.mainInfs}>Doctor: {doctor}</Text>
        <Text style={styles.mainInfs}>Hospital:{hospital}</Text>
        <Text style={styles.mainInfs}>Address: {hospitalAddress}</Text>
        <Text style={styles.mainInfs}>Date: {date}</Text>
        
        
        <Text style={styles.mainInfs}>UnWork: {unWork}</Text>
        <Text style={styles.mainInfs}>UnWorkTime: {unWorkTime}</Text>
        <Text style={styles.mainInfs}>TimeZone:{TimeZone.length}</Text>
        
        <Text style={styles.titleText}>Morning</Text>
        {/* <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(9) ? "grey" : (this.state.slot1 ? "orange" : "yellow")}}
                onPress={()=>{
                    if(unWorkTime.includes(1)) {
                        // alert("Sorry, this time is unavliable")
                        this.changeColor0();
                
                     
                        // console.log(this.state.singleIsChoosed[0]);
                    }else {
                        alert("You have choosed the " + TimeZone[0]);
                        slotChoosed = TimeZone[0];
                        this.changeColor0();
                        // console.log(this.state.singleIsChoosed[0]);
                    }
                
                
                }}
                
              >
                <Text >test</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(9) ? "grey" : (this.state.slot2 ? "orange" : "yellow")}}
                onPress={()=>{
                    if(unWorkTime.includes(1)) {
                        // alert("Sorry, this time is unavliable")
                        this.changeColor1();
                  
                     
                        // console.log(this.state.singleIsChoosed[1]);
                    }else {
                        alert("You have choosed the " + TimeZone[0]);
                        slotChoosed = TimeZone[0];
                        this.changeColor1();
                        // console.log(this.state.singleIsChoosed[1]);
                    }
                
                
                }}
                
              >
                <Text >test2</Text>
              </TouchableHighlight> */}








              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(1) ? "grey" : (this.state.slot1 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(1)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[0]);
                        slotChoosed = TimeZone[0];
                        this.changeColor1();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[0]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(2) ? "grey" : (this.state.slot2 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(2)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[1]);
                        slotChoosed = TimeZone[1];
                        this.changeColor2();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[1]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(3) ? "grey" : (this.state.slot3 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(3)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[2]);
                        slotChoosed = TimeZone[2];
                        this.changeColor3();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[2]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(4) ? "grey" : (this.state.slot4 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(4)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[3]);
                        slotChoosed = TimeZone[3];
                        this.changeColor4();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[3]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(5) ? "grey" : (this.state.slot5 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(5)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[4]);
                        slotChoosed = TimeZone[4];
                        this.changeColor5();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[4]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(6) ? "grey" : (this.state.slot6 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(6)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[5]);
                        slotChoosed = TimeZone[5];
                        this.changeColor6();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[5]}</Text>
              </TouchableHighlight>

              <Text style={styles.titleText}> Afternoon</Text>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(7) ? "grey" : (this.state.slot7 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(7)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[6]);
                        slotChoosed = TimeZone[6];
                        this.changeColor7();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[6]}</Text>
              </TouchableHighlight>

           

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(8) ? "grey" : (this.state.slot8 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(8)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[7]);
                        slotChoosed = TimeZone[7];
                        this.changeColor8();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[7]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(9) ? "grey" : (this.state.slot9 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(9)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[8]);
                        slotChoosed = TimeZone[8];
                        this.changeColor9();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[8]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(10) ? "grey" : (this.state.slot10 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(10)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[9]);
                        slotChoosed = TimeZone[9];
                        this.changeColor10();

                    }
                
                
                }}
                
              >
                <Text >{TimeZone[9]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(11) ? "grey" : (this.state.slot11 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(11)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[0]);
                        slotChoosed = TimeZone[10];
                        this.changeColor11();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[10]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(12) ? "grey" : (this.state.slot12 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(12)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[11]);
                        slotChoosed = TimeZone[11];
                        this.changeColor12();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[11]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(13) ? "grey" : (this.state.slot13 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(13)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the "+ TimeZone[12]) ;
                        slotChoosed = TimeZone[12];
                        this.changeColor13();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[12]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(14) ? "grey" : (this.state.slot14 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(14)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[13]);
                        slotChoosed = TimeZone[13];
                        this.changeColor14();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[13]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(15) ? "grey" : (this.state.slot15 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(15)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        // alert("You have choosed the " + TimeZone[14]);
                        slotChoosed = TimeZone[14];
                        this.changeColor15();
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[14]}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: unWorkTime.includes(16) ? "grey" : (this.state.slot16 ? "green" : "lightgreen")}}
                onPress={()=>{
                    if(unWorkTime.includes(16)) {
                        alert("Sorry, this time is unavliable")
                    }else {
                        
                        
                        this.changeColor16();
                        // alert("You have choosed the " + TimeZone[15]);
                        slotChoosed = TimeZone[15];
                       
                        
                    }
                
                
                }}
                
              >
                <Text >{TimeZone[15]}</Text>
              </TouchableHighlight>


              <TouchableHighlight
                style={{...styles.timeButton,backgroundColor: "red"}}
                onPress={()=>{
                    if(this.state.finalSlot == null) {
                      // console.log(this.state.slot16)
                        alert("Sorry, Please select a time")
                    }else {
                      // console.log(slotChoosed)
                        this.props.navigation.navigate("Confirm",{doctor:doctor,date:date,hospital:hospital,hospitalAddress:hospitalAddress,unWork:unWork,slotChoosed:this.state.finalSlot})
                        
                        
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
    },
    mainInfs:{
      backgroundColor:"lightblue",
    },
    titleText:{
      fontSize:30,
      marginLeft:120,
      color:"green",
      fontFamily: 'Roboto',
      fontWeight: 'bold',

    }
  });

export default ChooseTimeScreen;