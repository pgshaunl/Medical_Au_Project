/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ECScreen from './app/components/EmergencyCallScreen';
import ITScreen from './app/components/InstantTranslationScreen';
import MIScreen from './app/components/MedicalInsuranceScreen';
import MRScreen from './app/components/MedicalRecordScreen';
import OBScreen from './app/components/OnlineBookingScreen';
import SCScreen from './app/components/SymptomCheckerScreen';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Emergency Call1"
        onPress={() => navigation.navigate('EmergencyCall')}
        style={styles.button}
      />
      <Button
        title="Instant Translation"
        onPress={() => navigation.navigate('InstantTranslation')}
      />
      <Button
        title="Medical Insurance"
        onPress={() => navigation.navigate('MedicalInsurance')}
      />
      <Button
        title="Medical Record"
        onPress={() => navigation.navigate('MedicalRecord')}
      />
      <Button
        title="Online Booking"
        onPress={() => navigation.navigate('OnlineBooking')}
      />
      <Button
        title="Symptom Checker"
        onPress={() => navigation.navigate('SymptomChecker')}
      />
      
    </View>
  );
}
  

const Stack = createStackNavigator();

function App() {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Medical_AU'}}/>
       
        <Stack.Screen name="EmergencyCall" component={ECScreen} />
        <Stack.Screen name="InstantTranslation" component={ITScreen} />
        <Stack.Screen name="MedicalInsurance" component={MIScreen} />
        <Stack.Screen name="MedicalRecord" component={MRScreen} />
        <Stack.Screen name="OnlineBooking" component={OBScreen} />
        <Stack.Screen name="SymptomChecker" component={SCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'yellow',
    },
  });


export default App;
