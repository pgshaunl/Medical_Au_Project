import React, {useContext} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import {TouchableHighlight} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';


const list = [
  {
    date: '12/06/2019',
    hospital: 'Southbank Hospital',
    doctor: 'shuan'
  },
  {
    date: '06/07/2020',
    hospital: 'Higgg Hospital',
    doctor: 'shuan'
  },
  {
    date: '06/07/2020',
    hospital: 'Higgg Hospital',
    doctor: 'shuan'
  },
  {
    date: '06/07/2020',
    hospital: 'Higgg Hospital',
    doctor: 'shuan'
  },
  {
    date: '06/07/2020',
    hospital: 'Higgg Hospital',
    doctor: 'shuan'
  },
]


class MRScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: '',
  }

  state = {
    modalVisible: false,
    doctor: "111",
    isAvailable: false,
    gender: null,
    language: null,
    unWork:[-1,-2]
  };

  setName = (name) => {
    this.setState({ name: name });
  }

  componentDidMount() {
    database().ref(`/user/${firebase.auth().currentUser.uid}`).once('value', snapshot => {
      this.setName(snapshot.val().name);
    });
  }

  render() {
   
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
        <Text style={{fontSize:25, margin:10, fontWeight:"bold"}} >{this.state.name}</Text>
        <Text style={{fontSize:20, margin:7, color:"#13C7DC"}}>{firebase.auth().currentUser.email}</Text>
      </View>
      </View>

      <View style = {{ height:230, borderBottomColor:"black", borderBottomWidth:1} }>
          <Text style={styles.headline}>My Appointment</Text>
          <ScrollView>
            {
              list.map((item, i) => (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content >
              <ListItem.Title style={{fontWeight:"bold"}}>{item.date}</ListItem.Title>
              <ListItem.Subtitle><Text style={{fontWeight:"bold" }}>    Hospital:</Text> {item.hospital}</ListItem.Subtitle>
              <ListItem.Subtitle><Text style={{fontWeight:"bold"}}>    Doctor:</Text> {item.doctor}</ListItem.Subtitle>
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
          <Text style={styles.ifText}>Favourite Doctors   {list.length}</Text>
          </View>

          <View style={styles.ifContainer}>
          <Icon name="rotate-right" color="black" size={30} />
          <Text style={styles.ifText}>Appointment time   {list.length}</Text>
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

export default MRScreen;