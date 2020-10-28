import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import {Picker} from '@react-native-community/picker';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity } from 'react-native-gesture-handler';

class OBScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Area: null,
        Distance: null
    };
  }

  handleArea = (text) => {
    this.setState({ Area: text })
 }

  render() {
    return (
      <View>
        <Header/>

      <View style = {{flexDirection: 'column', justifyContent:"center", alignItems:"center", padding:10, height :400}}>

      <View style = {styles.container}>
        <Text style={styles.header} >Step 1</Text>
        <View style={styles.pickerContainer} >
        <View style={styles.icon} ><Icon name="map" color="grey" size={25}  /></View>

        <View>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Input Area"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {this.handleArea}
               maxLength = {15}
          />
        </View>
        </View>
      </View>

      <View style = {styles.container}>
        <Text style={styles.header} >Step 2</Text>
        <View style={styles.pickerContainer} >

        <View style={styles.icon} ><Icon name="navigation" color="grey" size={25} /></View>
        <View>
        <Picker
          style={{ height: 50, width: 250 }}
          mode="dropdown"
          selectedValue={this.state.Distance}
          onValueChange={(lang) => this.setState({Distance: lang})}
          >
          <Picker.Item label="Select Distance" value="null" />
          <Picker.Item label="< 1km" value="1" />
          <Picker.Item label="< 3km" value="3" />
          <Picker.Item label="< 5km" value="5" />
          <Picker.Item label="No restriction" value="100" />
        </Picker>
        </View>
        </View>


      </View>

      </View>

      <View>

      </View>

      <View style={{ alignItems:"center",
                        justifyContent:"center"}}>
                        <TouchableOpacity
                                          onPress={()=>{
                                              this.props.navigation.navigate('HospitalList')
                                          }}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                            colors={['#2b78d4', '#46bbab']}
                                            style={{
                                                padding:12,
                                                marginTop:20,
                                                borderRadius:8,
                                                width:200,

                                            }}>
                                <Text style={styles.imgText}>Search</Text>

                            </LinearGradient>
                        </TouchableOpacity>

                    </View>

      </View>



    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop:30,
      height:100,
      justifyContent:'space-evenly',
    },

    header: {
      fontWeight:"700",
      fontSize:20
    },

    pickerContainer: {
      flexDirection:"row",
      justifyContent:"space-evenly",
      width:320,
      height:50,
      borderWidth:1.5,
      borderRadius:16,
      borderColor:"#E5E5E5",
      backgroundColor:"#fff",
      marginTop:15,
    },
    input: {
      width:249,
      fontSize:17,
    },
    icon: {
      justifyContent:"center",
      alignItems:"center",
      marginRight:20,
      marginLeft:10,
    },
    imgText: {
      textAlign:"center",
      fontSize:20,
      color: "white",
  },
  });

export default OBScreen;
