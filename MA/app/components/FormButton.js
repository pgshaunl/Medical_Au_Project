
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import LinearGradient from "react-native-linear-gradient";

export default function FormButton({ buttonTitle, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                            colors={['#2b78d4', '#46bbab']}
                                            style={{
                                              marginTop: 10,
                                              width: windowWidth / 2,
                                              height: windowHeight / 15,
                                              padding: 10,
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              borderRadius: 8

                                            }}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: windowWidth / 2,
    height: windowHeight / 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 19,
    fontWeight:"bold",
    color: '#ffffff'
  }
});
