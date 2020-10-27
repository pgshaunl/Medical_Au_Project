import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../components/Header';
import {timeSlot} from '../components/TimeSlot';
import { windowHeight } from '../utils/Dimensions';
import database from '@react-native-firebase/database';

class TimeSlotScreen extends React.Component {
  constructor(props) {
    super(props);
  
  }

  state = {
    occupationList: [],
  }


  componentDidMount() {
    database().ref(`/Occupation/${this.props.route.params.doctorID}/${this.props.route.params.date}`).on('value', snapshot => {
      if (snapshot.exists()) {
        this.setState({occupationList: snapshot.val().timeSlot})
      } 
    });
  }

  isNotAvailable = (slot) => {
    return this.state.occupationList.includes(slot);
  }
  render() {
  const {date,doctorID, hospitalID} = this.props.route.params;
    
    
    return (
      <View>
           <Header/>
          
          <View style = {{height: windowHeight - 130}}>
          <ScrollView persistentScrollbar = {true}>
        {
          timeSlot.map((l, i) => (
             <ListItem key={i} bottomDivider  onPress={()=>{
              if(this.isNotAvailable(i)) {
                  alert("Sorry, the period has been booked")
              }else {
                
                  this.props.navigation.navigate("Confirm",{date:date, doctorID: doctorID, hospitalID: hospitalID, timeIndex: i})

              }
          
          
          }}>
              <ListItem.Content>
                <ListItem.Title  >{l}</ListItem.Title>
                <ListItem.Subtitle >{!this.isNotAvailable(i) ? <Text style={{color:"green"}}>Tap to book</Text> :<Text style={{color:"red"}}>Booked</Text>}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            
          ))
        }
      </ScrollView>
          </View>
                  
         
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

export default TimeSlotScreen;