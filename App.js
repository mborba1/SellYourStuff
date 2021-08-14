import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon'
import Card from './app/components/Card';
import AppText from './app/components/AppText';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from "./app/components/AppTextInput";
import AppPicker
 from './app/components/AppPicker';
 import LoginScreen from './app/screens/LoginScreen';

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
//   { label: "Bicycles", value: 4 },

  
//]
export default function App() {
  //const [category, setCategory] = useState(categories[0]);

  return (
    <LoginScreen />
      // <WelcomeScreen />
      // <SafeAreaView>
      //   <AppPicker 
      //   selectedItem={category}
      //   onSelectItem={(item) => setCategory(item)}
      //   items={categories} 
      //   icon="apps" 
      //   placeholder="Category" />
      //   <AppTextInput icon="email" placeholder="email" />
      // </SafeAreaView>
      
  );
}


// const styles = StyleSheet.create({
//   container: {
    
    
//   },
// });
