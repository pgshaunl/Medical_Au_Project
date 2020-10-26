import React, { useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert} from 'react-native';
import Header from '../components/Header';

import { Avatar } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";




const TimeScreen = (props) => {
  
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateDisplay, setDate] = useState(new Date());
    const [address] = useState('"259 Wickham Terrace, Brisbane QLD 4000, Australia Hospital in Spring Hill, Australia"');
    const [weekDay, setWeekday] = useState(dateDisplay.getDay());
    const { hospital ,hospitalAddress,picture} = props.route.params;

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        setDate(date);
        setWeekday(date.getDay())
        hideDatePicker();
    };

    function dateGet() {
        var date = new Date();
        var day = date.getDate();
        return day;
    }

    function dateMonthGet() {
        var date = new Date();
        var month = date.getMonth() + 1;
        return month;
    }

    function getDate() {
        var date = dateDisplay;
       

        var year = date.getFullYear().toString();
        var month = (date.getMonth()+1).toString();
        var day = date.getDate().toString();
        var hour =  date.getHours().toString();
        var minute = date.getMinutes().toString();
        var weekday = weekDay.toString();

        return day+'/'+month+'/'+year +' 星期'+ weekday + ' '+hour+':'+(date.getMinutes()<10?'0':'') + minute;
        };

  return (
    <View>
      <Header/>
      
      {/* <Text style ={styles.testText}>{getDate()}</Text>
      <Text style={styles.testText}>{picture}</Text> */}
      {/* <Text>{dateGet()}</Text>
      <Text>{dateMonthGet()}</Text>
  <Text>{dateDisplay.getDay()}</Text>
  <Text>{dateDisplay.getHours()}</Text> */}
  <Text  style={[styles.infsStyle,{paddingLeft:100,color:"blue"}]}>Average price:</Text>
  <Text style={[styles.infsStyle,{paddingLeft:100,color:"black"}]}>76</Text>
 
  <Text  style={[styles.infsStyle,{paddingLeft:100,color:"blue"}]}>Area :</Text>
  <Text style={[styles.infsStyle,{paddingLeft:100,color:"black"}]}>South Brisban</Text>
      <Text style={[styles.infsStyle,{paddingLeft:100,color:"blue"}]}>Hospital Name: </Text>
      <Text style={[styles.infsStyle,{paddingLeft:100,color:"black"}]}>{hospital}</Text>
      <Text style={[styles.infsStyle,{paddingLeft:100,color:"blue"}]}>Hospital Address: </Text>
      
      <Text style={[styles.infsStyle,{paddingLeft:20,color:"black"}]}>{hospitalAddress}</Text>
      <Avatar style={styles.imageStyle} source={{uri:'https://i.ibb.co/y0pkj2M/hospital-3.jpg'}}></Avatar>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Button title="Doctor List" onPress={()=>{
          if(dateDisplay.getMonth() > dateMonthGet() || dateDisplay.getDate() >= dateGet()){
            props.navigation.navigate('DoctorList', {weekDay: weekDay, date: dateDisplay.toDateString(), hospital: hospital,hospitalAddress:hospitalAddress});
          } else {
             
              Alert.alert("Invalid date","Sorry, you can only choose the date after today.")
          }
          
                                            //    props.navigation.navigate('DoctorList', {weekDay: weekDay, date: dateDisplay.toDateString(), hospital: hospital,hospitalAddress:hospitalAddress});
                                          }}></Button>
    <View>
        <Text>  </Text>
        {/* <Text> Address: {address} </Text> */}
    </View>
    </View>
  );
  };

const styles = StyleSheet.create({
    hitText: {
        marginTop:60,
        textAlign:"center",
        fontSize:20
    },
    testText:{
        backgroundColor:"lightgreen",
    },
    infsStyle:{
        fontSize:20,
        backgroundColor:"lightblue",
    },
    imageStyle:{
        marginTop:10,
        marginLeft:65,
        width:250,
        height:200,

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

export default TimeScreen;
