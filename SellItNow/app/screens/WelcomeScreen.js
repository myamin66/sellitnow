import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import {StatusBar} from 'react-native';
import { Platform, Dimensions } from 'react-native';

import Colors from '../config/Colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
         style= {styles.background} 
         source={require('../assets/images/screen1/background.jpg')}>  
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/images/screen1/logo-red.png')}></Image>
            <Text>Sell what you don't need</Text>
        </View>
        <View style= {styles.loginButton}></View>
        <View style= {styles.registerButton}></View>
            
        </ImageBackground>
        
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70, 
        backgroundColor: Colors.primary,
    },
    registerButton: {
        width: '100%',
        height: 70, 
        backgroundColor: Colors.secondary,
    },
    logo:{
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70,
    }
})
export default WelcomeScreen;