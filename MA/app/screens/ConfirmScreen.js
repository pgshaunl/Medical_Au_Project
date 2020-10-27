import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,Alert } from 'react-native';
import Header from '../components/Header';
import FormButton from '../components/FormButton';
import {timeSlot} from '../components/TimeSlot';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { ListItem, Icon } from 'react-native-elements';

class ConfirmScreen extends React.Component  {
  constructor(props) {
    super(props);
    
  }

  state = {
    hospital: [],
    doctor: [],
    occupationList: [],
    favourite: 0,
    
  }
  
  // Get data from the Host
  componentDidMount() {
    database().ref(`/Doctor/${this.props.route.params.doctorID}`).once('value', snapshot => {
      this.setState({doctor: snapshot.val()})
    });

    database().ref(`/Hospital/${this.props.route.params.hospitalID}`).once('value', snapshot => {
      this.setState({hospital: snapshot.val()})
    });

    database().ref(`/Occupation/${this.props.route.params.doctorID}/${this.props.route.params.date}`).once('value', snapshot => {
      if (snapshot.exists()) {
        this.setState({occupationList: snapshot.val().timeSlot})
      }});

    database().ref(`/Favourite/${firebase.auth().currentUser.uid}/${this.props.route.params.doctorID}`).once('value', snapshot => {
         if (snapshot.exists()) {
          this.setState({favourite: snapshot.val().bookCount})
         }});
  }

  update =() => {

    database().ref(`/Appointment/${firebase.auth().currentUser.uid}/${this.props.route.params.date}/`).once('value', snapshot => {
      if (snapshot.exists()) {
        alert('Sorry, you cannot make appointments at the same day');
      } else {
        // Set appointment
        database().ref(`/Appointment/${firebase.auth().currentUser.uid}/${this.props.route.params.date}/`).set({
          hospitalID: this.props.route.params.hospitalID ,
          doctorID: this.props.route.params.doctorID,
          timeID: this.props.route.params.timeIndex,
        });
        
        // Set doctor's schedule
        if (this.state.occupationList.length !== 0) {
          var tempList = this.state.occupationList;
          tempList.push(this.props.route.params.timeIndex);
          database().ref(`/Occupation/${this.props.route.params.doctorID}/${this.props.route.params.date}/`).update({
            timeSlot: tempList,
           });
        } else {
          database().ref(`/Occupation/${this.props.route.params.doctorID}/${this.props.route.params.date}/`).set({
            timeSlot: [this.props.route.params.timeIndex, ],
          });
        };

        // Use doctorID as index to set bookcourt
      if (this.state.favourite !== 0) {
        var tempNum = this.state.favourite + 1;

          database().ref(`/Favourite/${firebase.auth().currentUser.uid}/${this.props.route.params.doctorID}`).update({
            bookCount: tempNum
            
          });
      } else {
        database().ref(`/Favourite/${firebase.auth().currentUser.uid}/${this.props.route.params.doctorID}`).update({
          bookCount: 1,
          
        });
      };

      Alert.alert(
        "Message",
        "Your appointment has been booked",
        [
          {
            text: "OK",
            onPress: () => console.log("OK")
          },
        ],
      );
      }
    });
  }

  


  render() {
    const {hospital, doctor, doctorName} = this.state;
    const list = [
      {
        title: "Doctor",
        icon: 'doctor',
        subtitle: doctor.doctor_name,
        type:"fontisto"
      },
      {
        title: "Hospital",
        icon: 'local-hospital',
        subtitle: hospital.hospital_name,
        type:"material"
      },
      {
        title: "Address",
        icon: 'pin-drop',
        subtitle: hospital.address,
        type:"material"
      },
      {
          title: "Date",
          icon: 'today',
          subtitle: dateDisplayHelper(this.props.route.params.date),
          type:"ionicons"
        },
        {
          title: "Time",
          icon: 'clock-o',
          subtitle: timeSlot[this.props.route.params.timeIndex],
          type:"font-awesome"
        },
    ]
    return (
      <View>
        <Header/>
        <View>

        {
            list.map((item, i) => (
            <ListItem key={i} bottomDivider >
            <Icon name={item.icon} type= {item.type}/>
            <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
            ))
            }
        </View>
        <View style = {styles.container}>
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
      
                  { text: "OK", onPress: () => this.update() }
                ],
              );}} />
        </View>
       
         
      </View>
    );
  }
}

const dateDisplayHelper = (dateString) => {
    var list = dateString.split("");
    return list[0] + list[1]  +"/"+ list[2] + list[3] +"/"+ list[4] + list[5] + list[6] + list[7];
}


const styles = StyleSheet.create({
    container: {
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ConfirmScreen;
