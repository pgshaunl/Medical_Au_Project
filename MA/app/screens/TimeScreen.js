import React, { useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import Header from '../components/Header';
import DateTimePickerModal from "react-native-modal-datetime-picker";




const TimeScreen = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateDisplay, setDate] = useState(new Date());
    const [weekDay, setWeekday] = useState(dateDisplay.getDay());
    const { hospital ,hospitalAddress} = props.route.params;

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDate(date);
        setWeekday(date.getDay())
        hideDatePicker();
    };

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
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text>{getDate()}</Text>
      <Text>Hospital: {hospital}</Text>
      {/* <Text>Hospital: {hospitalAddress}</Text> */}
      <Button title="Doctor List" onPress={()=>{
                                              props.navigation.navigate('DoctorList', {weekDay: weekDay, date: dateDisplay.toDateString(), hospital: hospital,hospitalAddress:hospitalAddress});
                                          }}></Button>
    </View>
  );
  };

const styles = StyleSheet.create({
    hitText: {
        marginTop:60,
        textAlign:"center",
        fontSize:20
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
