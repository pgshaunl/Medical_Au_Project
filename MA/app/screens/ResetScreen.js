import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import Header from '../components/Header';

export default function ResetScreen() {
  const [email, setEmail] = useState('');
  const { reset } = useContext(AuthContext);
  const condition = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()) ) { 
      alert("Sorry, the email address is not valid")
    } else {
      reset(email);
    }
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.InputContainer}>
      <Text style={styles.text}>Input your Email</Text>
      <FormInput
        value={email}
        placeholderText='Email'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
      />
      <FormButton
        buttonTitle='Reset'
        onPress={condition}
      />
      </View>
     
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    
  },
  InputContainer: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems:"center",
    marginTop:150,
  },
  text: {
    fontSize: 24,
    marginBottom: 10
  }
});
