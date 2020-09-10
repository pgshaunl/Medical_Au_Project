import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class HeaderScreen extends React.Component {
  render() {
    return (
      <View style={{height:100, marginBottom: 15,}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        colors={['#2b78d4', '#46bbab']} 
        style={{flex: 1,
      paddingLeft: 15,
      paddingRight: 15,}}>
        </LinearGradient>
      </View>
    );
  }
}

export default HeaderScreen;