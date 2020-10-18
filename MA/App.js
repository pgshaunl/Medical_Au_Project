/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import Providers from './app/navigation';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  SplashScreen.hide();
  return <Providers />;
}


