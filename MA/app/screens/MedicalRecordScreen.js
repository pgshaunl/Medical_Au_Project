import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import {TouchableHighlight} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import {timeSlot} from '../components/TimeSlot';


class MRScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: '',
    hospital:[],
    doctor: [],
    favourite: '',
    appointment: [],
  }


  setName = (name) => {
    this.setState({ name: name });
  }

  componentDidMount() {
    database().ref(`/user/${firebase.auth().currentUser.uid}`).on('value', snapshot => {
      this.setName(snapshot.val().name);
    });
   
    database().ref(`/Appointment/${firebase.auth().currentUser.uid}`).on('value', snapshot => {
      if (snapshot.exists()) {
        var date = Object.keys(snapshot.val());
        var value = Object.values(snapshot.val());
        var list = [];

        for (var i =0; i < date.length; i++) {
          list.push(
            {
              date: date[i],
              hid: value[i].hospitalID,
              tid: value[i].timeID,
              did: value[i].doctorID,
            }
          )
          }

       this.setState({appointment: list});
      }});

    database().ref(`/Favourite/${firebase.auth().currentUser.uid}/`).on('value', snapshot => {
      if (snapshot.exists()) {
        var hID = Object.keys(snapshot.val());
        var bookCount = Object.values(snapshot.val());
        var list =[];
        var flag = 0;
        var fav = '';

        for (var i =0; i < hID.length; i++) {
         var id = hID[i].split('DID')[1];

          if (bookCount[i].bookCount > flag) {

            fav = id;
            flag = bookCount[i].bookCount;
          }
          
        }

        this.setState({favourite: fav})
      }});
      
        database().ref(`/Doctor/`).on('value', snapshot => {
          var list =[];
          var value = Object.values(snapshot.val());

          for (var i =0; i < value.length; i++) {
            list.push(
              
                value[i].doctor_name,
                
              
            )
          }
          
          this.setState({doctor: list})
        });
    
        database().ref(`/Hospital/`).on('value', snapshot => {
          
          var list =[];
          var value = Object.values(snapshot.val());

          for (var i =0; i < value.length; i++) {
            list.push(
              
                value[i].hospital_name,
                
              
            )
          }

          this.setState({hospital: list})
        });




  }

  


  render() {
    const {name, hospital, doctor, favourite, appointment} = this.state;
    return (
      <View>
        <View>
        <Header/>
      </View>

      <View style = {{flexDirection:"row", alignItems:"center",  height:150, borderBottomColor:"black", borderBottomWidth:1} }>
      <View style={{ margin:10}}>
      <TouchableHighlight onPress={() => this.props.navigation.navigate('Profile')} style = {styles.profileContainer}>
          <View style={styles.profile}>
          <Icon name="user-circle" color="grey" size={98}  />
          </View>
        </TouchableHighlight>
     </View>
      <View style={{justifyContent:"center" , margin:10, width:250}}>
        <Text style={{fontSize:25, margin:10, fontWeight:"bold"}} >{name}</Text>
        <Text style={{fontSize:20, margin:7, color:"#13C7DC"}}>{firebase.auth().currentUser.email}</Text>
      </View>
      </View>

      <View style = {{ height:230, borderBottomColor:"black", borderBottomWidth:1} }>
          <Text style={styles.headline}>My Appointment</Text>
          <ScrollView>
            {
              appointment.map((item, i) => (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content >
              <ListItem.Title style={{fontWeight:"bold"}}>{dateDisplayHelper(item.date)}</ListItem.Title>
              <ListItem.Subtitle><Text style={{fontWeight:"bold" }}>    Hospital:</Text> {hospital[item.hid]}</ListItem.Subtitle>
              <ListItem.Subtitle><Text style={{fontWeight:"bold"}}>    Doctor:</Text> {doctor[item.did]}</ListItem.Subtitle>
              <ListItem.Subtitle><Text style={{fontWeight:"bold"}}>    Time:</Text> {timeSlot[item.tid]}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))
            }
          </ScrollView>
      </View>

      <View>
          <Text style={styles.headline}>My Basic Information</Text>
          <View style={styles.ifContainer}>
            <Icon name="heart" color="red" size={30} />
          <Text style={styles.ifText}>Favourite Doctor:   {doctor.length === 0 ? "No record" : doctor[favourite]}</Text>
          </View>

          <View style={styles.ifContainer}>
          <Icon name="rotate-right" color="black" size={30} />
          <Text style={styles.ifText}>Appointment time   {appointment.length}</Text>
          </View>
          
      </View>
      



      </View>
      
    );
  }
}



const styles = StyleSheet.create({
    ifContainer: {
      flexDirection:"row",
      backgroundColor:"#D3D3D3",
      marginTop:20,
      height: 50,
      alignItems:"center",
      paddingLeft: 10,
      justifyContent:"center"
    },
    profileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      borderRadius: 100,
    },

    profile: {
      flex: 1,
      backgroundColor: "#fff",
      width: 100,
      height: 100,
      borderRadius: 100,
      justifyContent: "center",
      alignItems:"center",
    },
    headline: {
      fontSize:20,
      margin:20,
    },
    ifText: {
      fontSize:20,
      padding: 5,
      marginLeft:20,
      
      width:300,
    },
  });

  const dateDisplayHelper = (dateString) => {
    var list = dateString.split("");
    return list[0] + list[1]  +"/"+ list[2] + list[3] +"/"+ list[4] + list[5] + list[6] + list[7];
}

export default MRScreen;