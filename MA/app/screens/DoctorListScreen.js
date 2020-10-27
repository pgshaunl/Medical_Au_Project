import React from 'react';
import Header from '../components/Header';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import database from '@react-native-firebase/database';
import { windowHeight } from '../utils/Dimensions';




class DLScreen extends React.Component {
    constructor(props) {
      super(props);
    }
  
  
  state = {
    modalVisible: false,
    doctor: "",
    isAvailable: false,
    gender: null,
    language: null,
    doctorList: [],
    hospital: [],
    hospitalName:"",
    hospitalID : this.props.route.params.hospitalID,
    doctorID: "",
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  setDoctor = (name) => {
    this.setState({ doctor: name});
  }

  setDoctorID = (id) => {
    this.setState({ doctorID: id});
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

  setHospitalName = (name) => {
    this.setState({ hospitalName: name});
  }

  componentDidMount() {
    database().ref(`/Doctor`).once('value', snapshot => {
      this.setState({doctorList: snapshot.val()})
    });
    database().ref(`/Hospital/${this.state.hospitalID}`).once('value', snapshot => {
      this.setState({hospital: snapshot.val()})
    });
  }

  render() {
    const { modalVisible, doctor, isAvailable, gender, language , doctorList, doctorID, hospital, hospitalName} = this.state;
    const { weekDay, date, hospitalID } = this.props.route.params;

    return (
      <View>
          <Header/>
          <View style = {{height: windowHeight - 130}}>
          <ScrollView persistentScrollbar = {true}>
        {
          doctorList.map((l, i) => (
            hospital.hospital_name  === l.hospital_name ? 
             <ListItem key={i} bottomDivider onPress={() => 
              {this.setAvailable(l.work_day.includes(weekDay));
                this.setGender(l.gender);
                this.setLanguage(l.language);
                this.setHospitalName(l.hospital_name);
                this.setDoctorID(i);
              this.setModalVisible(true); this.setDoctor(l.doctor_name);}} >
              <Avatar source={{uri: l.image}} />
              <ListItem.Content>
                <ListItem.Title  >{l.doctor_name}</ListItem.Title>
                <ListItem.Subtitle >{l.title}</ListItem.Subtitle>
                <View>{l.work_day.includes(weekDay) ? <Text style={{color:"green"}}>Available</Text> :<Text style={{color:"red"}}>Unavailable</Text>}</View>
              </ListItem.Content>
              <ListItem.Chevron />
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
              <View style = {styles.modalDes}>
              <Text style ={{fontSize:19}}>Gender: <Text style ={{fontSize:17}}>{gender}</Text></Text>
              <Text style ={{fontSize:19}}>Language:  <Text style ={{fontSize:17}}>{language}</Text></Text>
              <Text style ={{fontSize:19}}>Hospital:  <Text style ={{fontSize:17}}>{hospitalName}</Text></Text>
              </View>
              
              <TouchableHighlight
                style={{ ...styles.modalButton, backgroundColor: isAvailable? "#2196F3":"grey" }}
                onPress={()=>{
                  if(isAvailable === true) {
                    this.setModalVisible(!modalVisible);
                    this.props.navigation.navigate("ChooseTime",{doctor:doctor,date:date, doctorID: doctorID, hospitalID: hospitalID});
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
      fontSize: 23,
      fontWeight:"bold",
    },
    modalDes: {
      justifyContent:"space-evenly",
      height: 150,
    }
  });

  
export default DLScreen;