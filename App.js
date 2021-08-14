import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon'
import Card from './app/components/Card';
import AppText from './app/components/AppText';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {

  return (
      // <WelcomeScreen />
      <SafeAreaView>
       <AccountScreen />
      </SafeAreaView>
      
  );
}


const styles = StyleSheet.create({
  container: {
    
    
  },
});
