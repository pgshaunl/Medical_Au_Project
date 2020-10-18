import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import Header from '../components/Header';
import Search from './SearchHomeScreen';
import CarouselScreen from './CarouselScreen';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Header/>
      <View style = {{flexDirection: 'row', justifyContent:"center"}}>
        <Search/>
      </View>

      <View style={{margin:10}}>
      <CarouselScreen/>
      </View>

      <View style={{marginTop: 20}} >
      <View style={{flexDirection: 'row', justifyContent:"space-evenly",}} >
      <TouchableHighlight onPress={() => navigation.navigate('MedicalRecord')} style = {styles.buttonContainer}>
        <View style={styles.button}>
          <Image
          source={require('../img/icons/MR.png')}
          style={styles.image}
          />
          <View style={styles.text}><Text>Medical</Text><Text>Record</Text></View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('OnlineBooking')} style = {styles.buttonContainer}>
        <View style={styles.button}>
          <Image
          source={require('../img/icons/OB.png')}
          style={styles.image}
          />
          <View style={styles.text}><Text>Online</Text><Text>Booking</Text></View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('SymptomChecker')} style = {styles.buttonContainer}>
        <View style={styles.button}>
          <Image
          source={require('../img/icons/SC.png')}
          style={styles.image}
          />
          <View style={styles.text}><Text>Symptom</Text><Text>Checker</Text></View>
        </View>
      </TouchableHighlight>
      </View>

      <View style={{flexDirection: 'row', justifyContent:"space-evenly",}}>
      <TouchableHighlight onPress={() => navigation.navigate('InstantTranslation')} style = {styles.buttonContainer}>
          <View style={styles.button}>
            <Image
            source={require('../img/icons/IT.png')}
            style={styles.image}
            />
            <View style={styles.text}><Text>Instant</Text><Text>Translation</Text></View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('EmergencyCall')} style = {styles.buttonContainer}>
          <View style={styles.button}>
            <Image
            source={require('../img/icons/EC.png')}
            style={styles.image}
            />
            <View style={styles.text}><Text>Emergency</Text><Text>Call</Text></View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('MedicalInsurance')} style = {styles.buttonContainer}>
          <View style={styles.button}>
            <Image
            source={require('../img/icons/MI.png')}
            style={styles.image}
            />
            <View style={styles.text}><Text>Medical</Text><Text>Insurance</Text></View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
      <Text style={styles.text}>Welcome user {user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    justifyContent: "center",
    alignItems:"center",
  },
  row: {
    flexDirection:"row",
    alignContent:"space-between",
  },
  image: {
    tintColor: "#000000",
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
  profileContainer: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight:30,
  },

  profile: {
    flex: 1,
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: "center",
    alignItems:"center",
  },
  buttonContainer: {
    width: 100,
    height: 130,
    borderRadius: 20,
    margin: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#c7dbf1",
    padding: 10,
    width: 100,
    height: 130,
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems:"center",
  },
});
