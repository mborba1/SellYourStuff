import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PickerItem from './PickerItem';
import Screen from './Screen'
import defaultStyles from '../config/styles'
import AppText from './AppText';

function AppPicker({icon, items, placeholder, selectedItem, onSelectItem, PickerItemComponent = PickerItem, numberOfColumns=1, width= "100%"}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
     
        <View style={[styles.container, { width }]}>
            {icon && (
            <MaterialCommunityIcons 
            name={icon} 
            size={20} 
            color={defaultStyles.colors.medium} 
            style={styles.icon}
            />
            )}
            {selectedItem ? (
                <AppText style={styles.text}>{selectedItem.label}</AppText>) : (<AppText>{placeholder}</AppText>
            )}
            
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
                 numColumns={numberOfColumns}
                 renderItem={({ item }) => 
                  <PickerItemComponent 
                     item={item}
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
        padding: 15,
        marginVertical: 10,      
    },
    icon:{
        marginRight: 10,

    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
    },
    text:{
        flex: 1,
    }
   
})


export default AppPicker;