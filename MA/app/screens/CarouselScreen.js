import React from 'react';
import { StyleSheet, Text, View,Image,Linking,TouchableOpacity, Dimensions} from 'react-native';
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
class CarouselScreen extends React.Component {
  
  constructor() {
    super();
    this.state = {
      auterScrollEnable: true,
    }
  }
  
  
  render() {
    return (
      <View style={{height:110}}>
    
      <Swiper
      style={styles.wrapper}
      renderPagination={renderPagination}
      loop={false}
    >
      <View
        style={styles.slide}>  
      <TouchableOpacity  onPress={() => Linking.openURL('https://www.health.gov.au/about-us/the-australian-health-system')}>
      <Image
             source={require('../img/icons/medical_service.png')}
             style={{height:110, width:'100%'}}
           
        />
        </TouchableOpacity>
      </View>
      <View
        style={styles.slide}>  
      <TouchableOpacity  onPress={() => Linking.openURL('https://www1.health.gov.au/internet/main/publishing.nsf/Content/strategicpolicyMTO.htm')}>
      <Image
             source={require('../img/icons/offer.jpg')}
             style={{height:110, width:'100%'}}
           
        />
        </TouchableOpacity>
      </View>
      <View
        style={styles.slide}>  
      <TouchableOpacity  onPress={() => Linking.openURL('https://www.dese.gov.au/transition-payment')}>
      <Image
             source={require('../img/icons/payment.jpg')}
             style={{height:110, width:'100%'}}
           
        />
        </TouchableOpacity>
      </View>
      <View
        style={styles.slide}>  
      <TouchableOpacity  onPress={() => Linking.openURL('https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-advice-for-the-health-and-disability-sector/personal-protective-equipment-ppe-for-the-health-workforce-during-covid-19#:~:text=PPE%20for%20coronavirus%20(COVID%2D19,face%20shields%2C%20gowns%20and%20aprons.')}>
      <Image
             source={require('../img/icons/covid.jpg')}
             style={{height:110, width:'100%'}}
           
        />
        </TouchableOpacity>
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
  slide: {
    

    
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width:'100%',
    height:'100%',
   
  
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
}
);

export default CarouselScreen;