
import HeaderScreen from './HeaderScreen';


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,Image
} from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window')
let ScreenHeight = Dimensions.get("window").height;


const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}
export default class MIScreen extends Component {
  constructor() {
    super();
    this.state = {
      auterScrollEnable: true,
    }
  }

 
  render() {
    return (
      <View style={{height: ScreenHeight}}>
        <HeaderScreen></HeaderScreen>
        <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={false}
      >
        <View
          style={styles.slide}>
          
            <Text style={styles.title} >Choosing the right Overseas Visitor Cover</Text>
            <Text style={styles.text}>The private health insurance industry in Australia is very competitive. This makes the process of choosing the right cover a complicated process.</Text>
            <Text style={styles.text}>When you’re visiting a new country, everything is unfamiliar. We can help you:</Text>
            <Text style={styles.points}>1. To evaluate your requirements, compare and make an informed decision about buying the right policy</Text>
            <Text style={styles.points}>2. Save time, money and effort</Text>
            <Text style={styles.points}>3. Process a secure online payment</Text>
            <Text style={styles.points}>4. With a purchase confirmation email – handy for those who require documentary evidence for 457 visa purposes</Text>
            <Text style={styles.underline}>For more information visit:</Text>
            <Text style={styles.smallpoints}>. How do I purchase Overseas Visitors Cover with iSelect?</Text>
            <Text style={styles.smallpoints}>. Eligibility for Overseas Visitor Cover</Text>
            <Text style={styles.smallpoints}>. Renewing your Overseas Visitor Cover</Text>
            <Text style={styles.smallpoints}>. HTravel within Australia</Text>
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}
        >
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
        >
        
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
          }
        >
         
        </View>
      </Swiper>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title:{

    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    textDecorationLine: 'underline',
    color:'#0000ff',
  
  },
  wrapper: {},
  slide: {
   
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    margin:10,
    lineHeight: 22
  },
  points: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
    margin:5,
    
  },
  underline: {
  
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'underline',
    color:'black',
    margin:5,
  },

  smallpoints:{
   
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    lineHeight: 20,
    margin:5,
    color:'#32cd32',

  },
  paginationStyle: {
    position: 'absolute',
    bottom: 30,
    right: 30
  },
  paginationText: {
    color: 'black',
    fontSize: 30,
   
  }
}
);



