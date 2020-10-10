import React from 'react';
import HeaderScreen from './HeaderScreen';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

const hospital_list = [
  {
    name: 'Southbank Day Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'Toowong Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'AKA Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'Southbank Day Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'Southbank Day Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'Southbank Day Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'Southbank Day Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'Southbank Day Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'Southbank Day Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'Southbank Day Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
  {
    name: 'Southbank Day Hospital',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    address: '1/140, melbonest, South Brisbane, QLD, 4001, Australia'
  },
]



class HLScreen extends React.Component {
  render() {
    return (
      <View>
          <HeaderScreen/>
          <View>
          <ScrollView>
        {
        hospital_list.map((l, i) => (
            <ListItem key={i} bottomDivider onPress={()=>{
                this.props.navigation.navigate('Time', {hospital: l.name})
            }}>
            <Icon name="local-hospital" />
            <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.address}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="grey" />
            </ListItem>
        ))
        }
        </ScrollView>
          </View>
        
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

export default HLScreen;