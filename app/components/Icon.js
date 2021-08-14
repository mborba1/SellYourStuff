import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
function Icon({
   name,
   size= 40,
   backgroundColor = '#000',
   iconColor ="#fff"
}) {
    return (
        <SafeAreaView>
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
        </View>
        </SafeAreaView>
    );
}

export default Icon;