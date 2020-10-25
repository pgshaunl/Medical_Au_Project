import React, { useContext, useState } from 'react';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import Header from '../components/Header';

export default function ProfileScreen()  {
  const [profile, setProfile] = useState('');
  const { user, logout } = useContext(AuthContext);
  database().ref(`/user/${user.uid}`).once('value', snapshot => {
    setProfile(snapshot.val());
  });
  

    const update =() => {
      
      
    }
    

    return (
      <View>
        <Header/>
        
        <Text>Profile!</Text>
        <Text style={styles.text}>Welcome user {user.email}</Text>
        <Text style={styles.text}>Welcome user {firebase.auth().currentUser.displayName}</Text>
        <Text style={styles.text}>Date of Birth: {profile.dob}</Text>
        <Text style={styles.text}>Gender {profile.gender}</Text>
        
        <Text style={styles.text}>Street {profile.street}</Text>
        <Text style={styles.text}>Suburb {profile.suburb}</Text>
        <Text style={styles.text}>State {profile.state}</Text>
      <FormButton buttonTitle='Logout' onPress={() => logout()} />
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
  });

