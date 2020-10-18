import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import Header from '../components/Header';
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity } from 'react-native-gesture-handler';




class ECScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText1: "What is the emergency number in Australia?",
      titleText2: "When you dial Triple zero(000)",
      titleText3: "Hearing or speech impairments",
      titleText4: "If you can not speak English",
      bodyText1: "Triple Zero(000) is Australia's main emergency service number.You should call 000 if you need urgent help from ambulance services.",
      bodyText2: "When you dial 000, your call will be answered by a Telstra operator, who will ask you if you need an ambulance. If it is detedmined that an ambulance is needed, you need to provide your specific location.",
      bodyText3: "People who are deaf or have a hearing or speech impairment can use a TTY to call 106. 106 is a text-based Emergency Call Service provided as a part of the National Relay Service(NRS).",
      bodyText4: "Triple Zero dose not have translators, if you can't speak any English, your call will be transferred to the police in your capital city. Once connected, a translator will be arranged.",
      bodyText5: "If you can say 'ambulance' , you will be transferred to the service you requested."
    };
  }
  render() {
    return (
      <View>
        <Header/>
        <View style={{padding:5, paddingTop:0}}>
        <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText1}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText1}</Text>
        </Text>
        
        <Text style={styles.baseText}>{"\n"}
          {"\n"}
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText2}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText2}</Text>
        </Text>

        <Text style={styles.baseText}>{"\n"}
          {"\n"}
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText3}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText3}</Text>
        </Text>

        <Text style={styles.baseText}>{"\n"}
          {"\n"}
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText4}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText4}
         {"\n"}
         {"\n"}
         <Text numberOfLines={5}>{this.state.bodyText5} 
        </Text>
        </Text>
        </Text>

        <View style={{ alignItems:"center",
                        justifyContent:"center"}}>
                        <TouchableOpacity 
                                          onPress={()=>{
                                            Linking.openURL(`tel:${`000`}`)
                                          }}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                            colors={['#2b78d4', '#46bbab']}
                                            style={{
                                                padding:5,
                                                marginTop:20,
                                                borderRadius:8,
                                                width:200,

                                            }}>
                                <Text style={styles.imgText}>Call it</Text>

                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
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
    baseText: {
      fontFamily: "Cochin",
     /*textAlign: "center",*/
      

    },
    titleText: {
      fontSize: 16,
      fontWeight: "bold",
      
    },
    imgText: {
      textAlign:"center",
      fontSize:20,
      color: "white",
  },
  });




export default ECScreen;
