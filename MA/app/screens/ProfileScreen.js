import React, { useContext, useState, useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import Header from '../components/Header';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';
import Modal from 'react-native-modal';
import { ListItem, Icon } from 'react-native-elements';

export default function ProfileScreen()  {
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [input, setInput] = useState('');
  const [stakeHolder, setStakeHolder] = useState('');
  const [headline, setHeadline] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    database().ref(`/user/${user.uid}`).once('value', snapshot => {
      setDob(snapshot.val().dob);
      setGender(snapshot.val().gender);
      setAddress(snapshot.val().address);
      setName(snapshot.val().name);
    });
  }, 
  [])

  
  
  
  

    const update =() => {
      

    }
    
    const list = [
      {
        title: "Name",
        icon: 'person-outline',
        subtitle: name,
      },
      {
        title: "Email",
        icon: 'mail-outline',
        subtitle: user.email,
      },
      {
        title: "Date of Birth",
        icon: 'av-timer',
        subtitle: dob
      },
      {
        title: "Gender",
        icon: 'wc',
        subtitle: gender
      },
      {
        title: "Address",
        icon: 'pin-drop',
        subtitle: address
      },
    ]

    return (
      <View>
        <Header/>
        <View>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider onPress={()=>{
        if (item.title === "Email") {
          alert("Sorry, your email cannot be changed");
        } else {
          setHeadline(item.title);
          setModalVisible(true);
          setStakeHolder(item.subtitle);
        }
      }}>
        <Icon name={item.icon}/>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>
      <FormButton buttonTitle='Logout' onPress={() => logout()} />
      <FormButton buttonTitle='testModal' onPress={() => setModalVisible(true)} />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          isVisible={modalVisible}
        >
          <View style={styles.centeredView}>
          
            <View style={styles.modalView}>

              <Text style={styles.modalText}>{headline}</Text>
              <Input
                placeholder = {stakeHolder}
                onChangeText={value => setInput(value)}
                style={styles.input}
              />
              <TouchableHighlight
                style={{ ...styles.modalButton, backgroundColor: "#2196F3" }}
                onPress={()=>{
                  alert("111");
                  this.setModalVisible(!modalVisible);
              }}
              >
                <Text style={styles.textStyle}>Confirm</Text>
              </TouchableHighlight>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", height:10}}>
            <Icon name="close"
                onPress={() => {
                  setModalVisible(!modalVisible);}}
                size={17} color="white" style={{}}/>
                <Text onPress={() => {
                  setModalVisible(!modalVisible);}} style={{color:'white', fontSize:17, marginLeft:3}} >close</Text>
            </View>
           
          </View>
        </Modal>
      </View>
      </View>
    );
    
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
      height:230,
      width:300,
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
    },
    input: {
      width: 100,
    }
  });

