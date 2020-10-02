import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HeaderScreen from './HeaderScreen';



const a =344444;
console.log(a);

// const {userId} = this.props.route.params;
// console.log(JSON.stringify(userId));

// function getData( {route,navigation}) {
//     return
// }

class ProfileScreen extends React.Component  {
    
    getData = () =>{
        // let idUser = this.props.route.params.idUser;
        
    var {idUser} = this.props.route.params;
    var {idArrayHome} = this.props.route.params;
    // userInfsProfile = 1;
    console.log(idArrayHome);
    console.log(idUser);
    
    // console.log(JSON.stringify("dd"+userInfsProfile.userName));
    }
    
    
  render() {
    
    return (
      <View>
        <HeaderScreen></HeaderScreen>
        
        <Text>Profile!</Text>
        <Button onPress ={this.getData} title="get Data"></Button>
         
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
  });

export default ProfileScreen;