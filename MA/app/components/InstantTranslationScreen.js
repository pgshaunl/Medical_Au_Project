import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderScreen from './HeaderScreen';

class ITScreen extends React.Component {
  render() {
    return (
      <View>
        <HeaderScreen></HeaderScreen>
        <Text>Instant Translation here!</Text>
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

export default ITScreen;