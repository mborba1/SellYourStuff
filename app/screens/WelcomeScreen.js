import React from 'react';
import { ImageBackground, StyleSheet, View, Image} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation}) {
    return (
       <ImageBackground 
            blurRadius={5}
            style={styles.background}
            source={require('../assets/ben-kolde-6lzIdGOoqfg-unsplash.jpg')}>
             <Image style={styles.logo} source={require('../assets/sellyourstuff.png')}/> 
             <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate("Login")}/>
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")}/>
             </View>        
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 200,
        height: 200,
        position: "absolute",
        top: 70,
        backgroundColor: '#f8f4f4',
        

    },

})
export default WelcomeScreen;