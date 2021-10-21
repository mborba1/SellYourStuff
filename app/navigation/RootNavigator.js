import React, { useContext, useEffect, useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import AuthNavigator from "./AuthNavigator";
import AccountNavigator from "./AccountNavigator";
import { AuthenticatedUserContext } from './AuthenticatedUserProvider'



function RootNavigator() {

    const { user, setUser } = useContext(AuthenticatedUserContext)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const unsubscribeAuth = auth.
    })
    if(isLoading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
    return (
        <NavigationContainer>
            {user ? <AccountNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default RootNavigator;
