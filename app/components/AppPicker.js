import React, { useState } from 'react';
import AppText from './AppText';
import { View, TextInput, StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PickerItem from './PickerItem';
import Screen from './Screen'
import defaultStyles from '../config/styles'

function AppPicker({icon, items, placeholder, selectedItem, onSelectItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
     
        <View style={styles.container}>
            {icon && (
            <MaterialCommunityIcons 
            name={icon} 
            size={20} 
            color={defaultStyles.colors.medium} 
            style={styles.icon}
            />
            )}
            <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
            <MaterialCommunityIcons 
            name="chevron-down"
            size={20} 
            color={defaultStyles.colors.medium} 
            
            />
        </View>
        </TouchableWithoutFeedback>
        
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
              <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                 data={items}
                 //item.value returns a number so we need to convert into a string
                 keyExtractor={item => item.value.toString()}
                 renderItem={({ item }) => 
                  <PickerItem 
                     label={item.label}
                     onPress={() => {
                         setModalVisible(false);
                         onSelectItem(item);
                     }}
                  />}
                />
            </Screen>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
        
    },
    icon:{
        marginRight: 10,

    },
    text:{
        flex: 1,
    }
   
})


export default AppPicker;