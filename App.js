import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

import Card from './app/components/Card';
import AppText from './app/components/AppText';

export default function App() {

  return (
      // <WelcomeScreen />
      <View style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
      }}>
        <Card 
        title="Yellow chair for sale"
        subTitle='$100'
        image={require("./app/assets/ron-mcclenny-9yI8eQ9mdvY-unsplash.jpg")}/>
      </View>
      
  );
}


const styles = StyleSheet.create({
  container: {
    
    
  },
});
