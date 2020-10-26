import React, { useState, useEffect } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert} from 'react-native';
import Header from '../components/Header';
import FormButton from '../components/FormButton';
import database from '@react-native-firebase/database';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ListItem, Icon } from 'react-native-elements';




const TimeScreen = (props) => {
    const { hospitalID } = props.route.params;
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateDisplay, setDate] = useState(new Date());
    const [weekDay, setWeekday] = useState(dateDisplay.getDay());
    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        database().ref(`/Hospital/${hospitalID}`).once('value', snapshot => {
        setAddress(snapshot.val().address); 
        setArea(snapshot.val().area);
        setPrice(snapshot.val().average_price);
        setImageUrl(snapshot.val().image);
        setName(snapshot.val().hospital_name);
        setDescription(snapshot.val().description);
        });
      }, 
      [])

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
    
        const list = [
            {
              title: "Name",
              icon: 'person-outline',
              subtitle: name,
            },
            {
                title: "Area",
                icon: 'wc',
                subtitle: area
              },
            {
              title: "Date",
              icon: 'av-timer',
              subtitle: getDate(),
            },
           
            {
              title: "Address",
              icon: 'pin-drop',
              subtitle: address
            },
            {
                title: "Reference price",
                icon: 'pin-drop',
                subtitle: "$" + price
              },
          ]
          

  return (
    <View>
      <Header/>
      {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider >
        <Icon name={item.icon}/>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }

      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <FormButton buttonTitle='Next step' onPress={()=>{
          if(dateDisplay.getMonth() > dateMonthGet() || dateDisplay.getDate() >= dateGet()){
            props.navigation.navigate('DoctorList', {weekDay: weekDay, date: dateDisplay.toDateString(), hospitalID: hospitalID });
          } else {
              Alert.alert("Invalid date","Sorry, the date in the past cannot be booked.")
          }}} />


          <View>
           
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
    infsStyle:{
        fontSize:20,
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
