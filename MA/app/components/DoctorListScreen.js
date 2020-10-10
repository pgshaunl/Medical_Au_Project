import React from 'react';
import HeaderScreen from './HeaderScreen';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'General Practioner',
      work_day: [1,3,4],
      hospital: 'Southbank Day Hospital',
      gender: 'Female',
      language: 'English'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'General Practioner',
      work_day: [2,5,6],
      hospital: 'Southbank Day Hospital',
      gender: 'Male',
      language: 'Chinese, English'
    },
    {
      name: 'Emma Watson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'General Practioner',
      work_day: [0,3,6],
      hospital: 'Toowong Hospital',
      gender: 'Female',
      language: 'English'

    },
    {
      name: 'James Bond',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'General Practioner',
      work_day: [1,5],
      hospital: 'AKA Hospital',
      gender: 'Male',
      language: 'English'
    },

    {
      name: 'Yushiko',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'General Practioner',
      work_day: [0,1,3,4,5],
      hospital: 'Southbank Day Hospital',
      gender: 'Female',
      language: 'Japanese'
    },
    {
      name: 'LI',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'General Practioner',
      work_day: [2,5,6],
      hospital: 'Southbank Day Hospital',
      gender: 'Male',
      language: 'Chinese, English'
    },
    
  ]

  


class DLScreen extends React.Component {
    constructor(props) {
      super(props);
    }
  
  state = {
    modalVisible: false,
    doctor: "111",
    isAvailable: false,
    gender: null,
    language: null,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  setDoctor = (name) => {
    this.setState({ doctor: name});
  }

  setAvailable = (available) => {
    this.setState({ isAvailable: available});
  }
  
  setGender = (gender) => {
    this.setState({gender:gender});
  }

  setLanguage = (language) => {
    this.setState({language: language})
  }

  render() {
    const { modalVisible, doctor, isAvailable, gender, language } = this.state;
    const { weekDay, date, hospital } = this.props.route.params;

    return (
      <View>
          <HeaderScreen/>
          <Text>{hospital}</Text>
          <Text>{weekDay}</Text>
          <Text>{date}</Text>
          <View>
          <ScrollView>
        {
          list.map((l, i) => (
            hospital === l.hospital ? 
             <ListItem key={i} bottomDivider onPress={() => 
              {this.setAvailable(l.work_day.includes(weekDay));
                this.setGender(l.gender);
                this.setLanguage(l.language);
              this.setModalVisible(true); this.setDoctor(l.name);}} >
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title style={{fontSize:21}} >{l.name}</ListItem.Title>
                <ListItem.Subtitle style={{fontSize:17}} >{l.subtitle}</ListItem.Subtitle>
                <View>{l.work_day.includes(weekDay) ? <Text style={{color:"green"}}>Available</Text> :<Text style={{color:"red"}}>Unavailable</Text>}</View>
              </ListItem.Content>
            </ListItem> : <View key={i}/>
            
          ))
        }
      </ScrollView>
          </View>
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          isVisible={modalVisible}
        >
          <View style={styles.centeredView}>
          
            <View style={styles.modalView}>

              <Text style={styles.modalText}>{doctor}</Text>
              <Text>Gender: {gender}</Text>
              <Text>Language: {language}</Text>
              <TouchableHighlight
                style={{ ...styles.modalButton, backgroundColor: isAvailable? "#2196F3":"grey" }}
                onPress={()=>{
                  if(isAvailable === true) {
                    this.setModalVisible(!modalVisible);
                  } else {
                    alert("Sorry, this GP cannot be booked today");
                  }
                  
              }}
              >
                <Text style={styles.textStyle}>Book</Text>
              </TouchableHighlight>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", height:10}}>
            <Icon name="close"
                onPress={() => {
                  this.setModalVisible(!modalVisible);}}
                size={17} color="white" style={{}}/>
                <Text onPress={() => {
                  this.setModalVisible(!modalVisible);}} style={{color:'white', fontSize:17, marginLeft:3}} >close</Text>
            </View>
           
          </View>
        </Modal>
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
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    modalButton: {
      backgroundColor: "#2196F3" ,
      borderRadius: 10,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 20,
    }
  });

  
export default DLScreen;