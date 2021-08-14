import React from 'react';
import { StyleSheet, Image } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen'
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).matches().label("Password")
})

function LoginScreen(props) {
    
    return (
        <Screen style={styles.container}>
            <Image
             style={styles.logo}
             source={require("../assets/sellyourstuff.png")} />
             <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)} 
                validationSchema={validationSchema}
            >
                { () => (
                <>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
               <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
               />
               <SubmitButton title="Login" />
                </>
                )}
             </Formik>
                
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 150,
        height: 150 ,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})
export default LoginScreen;