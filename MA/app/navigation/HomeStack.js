import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ECScreen from '../screens/EmergencyCallScreen';
import ITScreen from '../screens/InstantTranslationScreen';
import MIScreen from '../screens/MedicalInsuranceScreen';
import MRScreen from '../screens/MedicalRecordScreen';
import OBScreen from '../screens/OnlineBookingScreen';
import SCScreen from '../screens/SymptomCheckerScreen';
import QuestionsScreen from "../screens/QuestionsScreen";
import ResultScreen from "../screens/ResultScreen";
import TimeSlotScreen from "../screens/TimeSlotScreen";
import ConfirmScreen from "../screens/ConfirmScreen";
import HLScreen from "../screens/HospitalListScreen";
import DLScreen from "../screens/DoctorListScreen";
import ProfileScreen from '../screens/ProfileScreen';
import TimeScreen from '../screens/TimeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
        height:100,
      },
      headerTransparent: 'true',
      headerTitleAlign:'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize:26,
        fontWeight:"700",
        fontFamily:"Roboto",
      },
    }}>
      <Stack.Screen name="Home" component={HomeScreen}
      options={({navigation}) => ({ title: 'Medical_AU', headerRight: ()=>(
        <Icon name="user"
              onPress={() => navigation.navigate("Profile")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      <Stack.Screen name="EmergencyCall" component={ECScreen} options={({navigation}) => ({ title: 'Emergency Call', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      <Stack.Screen name="InstantTranslation" component={ITScreen} options={({navigation}) => ({ title: 'Instant Translation', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      <Stack.Screen name="MedicalInsurance" component={MIScreen} options={({navigation}) => ({ title: 'Medical Insurance', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      <Stack.Screen name="MedicalRecord" component={MRScreen} options={({navigation}) => ({ title: 'Medical Record', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      <Stack.Screen name="OnlineBooking" component={OBScreen} options={({navigation}) => ({ title: 'Online Booking', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      <Stack.Screen name="HospitalList" component={HLScreen} options={({navigation}) => ({ title: 'Online Booking', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
     <Stack.Screen name="Confirm" component={ConfirmScreen} options={({navigation}) => ({ title: 'Confirm', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>

<Stack.Screen name="ChooseTime" component={TimeSlotScreen} options={({navigation}) => ({ title: 'Choose Time', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      <Stack.Screen name="DoctorList" component={DLScreen} options={({navigation}) => ({ title: 'Doctor List', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      <Stack.Screen name="SymptomChecker" component={SCScreen} options={({navigation}) => ({ title: 'Symptom Checker', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      <Stack.Screen name="Questions" component={QuestionsScreen} options={({navigation}) => ({ title: 'Symptom Checker', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>
      
      <Stack.Screen name="Result" component={ResultScreen} options={({navigation}) => ({ title: 'Symptom Checker', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     })}/>
      

     <Stack.Screen name="Profile" component={ProfileScreen} options={({navigation}) => ({ title: 'Profile', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>

<Stack.Screen name="Time" component={TimeScreen} options={({navigation}) => ({ title: 'Choose Date', headerRight: ()=>(
        <Icon name="home"
              onPress={() => navigation.navigate("Home")}
              size={30} color="white" style={{marginRight:20}}/>
     )   
     
     })}/>

    </Stack.Navigator>
  );
}
