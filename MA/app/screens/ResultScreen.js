import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';

import database from '@react-native-firebase/database';
import FormButton from '../components/FormButton';

const arrayConsist = (arr1, arr2) => {
    if (arr1 === 0) {
        return true;
    } else {
        return arr1.every(item => arr2.includes(item));
    }
} 

class ResultScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.route.params.type,
            uncomfy: this.props.route.params.uncomfy, 
            food: this.props.route.params.food, 
            pain: this.props.route.params.pain, 
            location: this.props.route.params.location,
            result: "Unable to find the proper suggestion",
            suggestion: ["How about book a doctor"],
        }
    }

    


    
    componentDidMount() {
        
        database().ref(`/Symptomchecker`).on('value', snapshot => {
           var list = Object.values(snapshot.val());
           const {type, uncomfy, food, pain, location} = this.state;
            
           for (var i = 0; i < list.length; i++) {
               const tempFood = list[i].food;
               const tempLocation = list[i].pain_location;
               const tempPain = list[i].status;
               const tempUncomfy = list[i].symptom;
               const tempType = list[i].type;
               const result = list[i].result;
               const suggestion = list[i].suggestion;
               console.log(tempLocation.includes(location.toLowerCase()))
               if (
                   arrayConsist(food, tempFood) && 
                   (tempLocation.includes(location.toLowerCase()) || location === "") &&
                   pain.toUpperCase() === tempPain.toUpperCase() &&
                   uncomfy.toUpperCase() === tempUncomfy.toUpperCase() &&
                   type.toUpperCase() === tempType.toUpperCase()
               ) {
                   this.setState({
                       result: result,
                       suggestion: suggestion,
                   })
               }
           };
          });
    }

    render() {
        const {result, suggestion} = this.state;
        return (
            <View style={{flex:1, backgroundColor:"white"}}>
                <Header/>
                <View style = {{height:430, justifyContent:"space-around"}}>
                
                    <View>
                        <Text style={styles.leftLabel}>Result:</Text>
                        <View style={{flexDirection:"row",margin:10}}>
                        <Image style={styles.image} source={require('../img/icons/ic_one.jpg')} resizeMode={"center"}></Image>
                        <Text style={styles.border}>{result}</Text>
                        </View>
                    </View>
                    <View>
                    <Text style={styles.leftLabel}>Suggestion:</Text>
                    <View style={{flexDirection:"row", margin:13, alignItems:"center"}}>
                        <Image style={styles.image} source={require('../img/icons/ic_two.jpg')} resizeMode={"center"}></Image>
                        <View style={styles.suggestionBox}>
                            {
                                suggestion.map((l, i) => (
                                <Text style={styles.label}>{i + 1}. {l}</Text>
                                ))
                            }
                        </View>
                    </View>

                    </View>   
                
                </View>
                <View style={{ alignItems:"center",justifyContent:"center"}}>
                <Text style={styles.hitText}>Do you need an online booking?</Text>
                <FormButton buttonTitle = "Online Booking" onPress={()=> this.props.navigation.navigate('OnlineBooking')} />

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    leftLabel: {
        margin:10,
        fontSize:22,
        fontWeight:"bold"
    },
    image:{
        width:30,
        height:40
    },
    border:{
        width:"67%",
        height: 40,
        borderWidth:1.5,
        borderRadius:16,
        borderColor:"#E5E5E5",
        textAlign:"center",
        lineHeight:40,
        fontSize:18,
        marginLeft:15,
        
    },
    label: {
        fontSize:16,
        marginBottom:10,
    },
    hitText: {
        marginTop:40,
        textAlign:"center",
        fontSize:17,
    },
    imgText: {
        textAlign:"center",
        fontSize:20,
        color: "white",
    },
    suggestionBox: {
        flexDirection:"column", 
        marginLeft:20, 
        width:270, 
        height: 150,
        justifyContent: 'center',
    }

});

export default ResultScreen;
