import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderScreen from './HeaderScreen';

class MIScreen extends React.Component {
  render() {
    return (
      <View>
        <HeaderScreen></HeaderScreen>
        <Text>Medical Insurance here!</Text>
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

export default MIScreen;