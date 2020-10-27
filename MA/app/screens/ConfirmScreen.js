import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,Alert } from 'react-native';
import Header from '../components/Header';
import FormButton from '../components/FormButton';
import {timeSlot} from '../components/TimeSlot';
import database from '@react-native-firebase/database';

class ConfirmScreen extends React.Component  {
  constructor(props) {
    super(props);
    
  }

  state = {
    hospital: [],
    doctor: [],
    
  }
  
  componentDidMount() {
    database().ref(`/Doctor/${this.props.route.params.doctorID}`).once('value', snapshot => {
      this.setState({doctor: snapshot.val()})
    });
    database().ref(`/Hospital/${this.props.route.params.hospitalID}`).once('value', snapshot => {
      this.setState({hospital: snapshot.val()})
    });
  }

  render() {
    const {date,doctorID, hospitalID, timeIndex} = this.props.route.params;
    const {hospital, doctor} = this.state;
    
    return (
      <View>
        <Header/>
        <View>

        <Text>Hospital:{hospital.hospital_name}</Text>
        <Text>Doctor: {doctor.doctor_name}</Text>
        <Text>Date: {date}</Text>
        <Text>Choosed Time:{timeSlot[timeIndex]}</Text>
        
        </View>
        
        <FormButton buttonTitle='Book it!' onPress={
          () => {
              Alert.alert(
                "Message",
                "Are you sure you want to book the appointment?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Ask me later pressed")
                  },
      
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
              );}} />
         
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
