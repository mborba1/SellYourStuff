import React from 'react';
import ListItem from '../components/ListItem';
import { StyleSheet, FlatList, View } from 'react-native';

import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import Icon from '../components/Icon'
import colors from '../config/colors'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }       
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: "Messages",
    }
]
function AccountScreen({ navigation }) {
    return (
       <View style={styles.screen}>
        <View style={styles.container}>
            <ListItem
                title="Lisa Marie"
                subTitle="LisaMarie@gmail.com"
                image={{uri:'https://randomuser.me/api/portraits/women/85.jpg'}}
            />
        </View>
        <View style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => 
              <ListItem 
                 title={item.title}
                 IconComponent={
                     <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                 }
                 onPress={() => navigation.navigate(item.targetScreen)}
                 />
            }/>
            
        </View>
        <ListItem
          title="Log Out"
          IconComponent={
              <Icon name="logout" backgroundColor="#ffe66d"/>
          } />
       </View>  
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})
export default AccountScreen;