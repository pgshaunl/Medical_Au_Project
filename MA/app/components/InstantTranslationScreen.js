import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ITScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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