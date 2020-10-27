import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Header from '../components/Header';
import {timeSlot} from '../components/TimeSlot';
import { windowHeight } from '../utils/Dimensions';

class TimeSlotScreen extends React.Component {
  constructor(props) {
    super(props);
  
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
              if(1!==1) {
                  alert("Sorry, the period has been booked")
              }else {
                
                  this.props.navigation.navigate("Confirm",{date:date, doctorID: doctorID, hospitalID: hospitalID, timeIndex: i})

              }
          
          
          }}>
              <ListItem.Content>
                <ListItem.Title  >{l}</ListItem.Title>
                <ListItem.Subtitle >{1===1 ? <Text style={{color:"green"}}>Tap to book</Text> :<Text style={{color:"red"}}>Booked</Text>}</ListItem.Subtitle>
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