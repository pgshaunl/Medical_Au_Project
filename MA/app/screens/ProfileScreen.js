import React, { useContext } from 'react';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import Header from '../components/Header';

export default function ProfileScreen()  {
    
    const { user, logout } = useContext(AuthContext);
    return (
      <View>
        <Header/>
        
        <Text>Profile!</Text>
        <Text style={styles.text}>Welcome user {user.email}</Text>
        <Text style={styles.text}>Welcome user {firebase.auth().currentUser.displayName}</Text>
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

