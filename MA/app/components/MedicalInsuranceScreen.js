
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
            <Text style={styles.smallpoints}>. Travel within Australia</Text>
        </View>
        
        <View
          style={styles.slide}>

            <Text style={styles.title} >How do I purchase Overseas Visitors Cover with iSelect?</Text>
            <Text style={styles.text}>Buying Overseas Visitor Cover with iSelect is easy. You can buy your preferred policy in 4 easy steps.</Text>
            <Text style={styles.text}>All we need is some basic personal information and an email address.</Text>
            <Text style={styles.text}>Online payments are accepted via credit card. As soon as your purchase is complete, we will email you a visa letter confirming your health insurance details.</Text>
            <Text style={styles.text}>It is best when buying your Overseas Visitors Cover to nominate the day you expect to arrive in Australia. If this date changes due to delays you can amend the start date once you have arrived by contacting the health fund.</Text>
            <Text style={styles.text}>The fund will require proof of your arrival date/ use of your aircraft boarding pass.</Text>
        </View>

        <View
          style={styles.slide}>
           <Text style={styles.title} >Eligibility for Overseas Visitor Cover</Text>
           <Text style={styles.text}>Before you begin the process of buying Overseas Visitors Cover, you should confirm whether you’re eligible. If your cover is for visa purposes, check your visa requirements.</Text>
        </View>

        <View
          style={styles.slide}>
           <Text style={styles.title} >Renewing your Overseas Visitor Cover</Text>
           <Text style={styles.text}>You can renew your lapsed cover by contacting your health fund provider.</Text>
        </View>

        <View
          style={styles.slide}>
           <Text style={styles.title}>Travel within Australia</Text>
           <Text style={styles.text}>If you have Overseas Visitors Cover and you’re planning to travel interstate, health funds will cover their members across all states and territories.</Text>
           <Text style={styles.text}>If you will be travelling overseas whilst visiting Australia, your Overseas Visitor Cover will not cover you once you have left Australia. We recommend that you take out a travel insurance policy this will cover you for health care services whilst on your trip.</Text>
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



