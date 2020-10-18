import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class CarouselScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Carousel here!</Text>
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

export default CarouselScreen;