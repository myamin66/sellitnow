import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import Colors from '../config/Colors';

export default function ViewImage() {
  return (
      <View style={styles.container}>
        <View style= {styles.closeIcon}></View>
        <View style= {styles.deleteIcon}></View>
        <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/images/screen2/chair.jpg')}/>

        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,
    },
    container:{
        backgroundColor: Colors.black,
        flex: 1,
    },
    image:{
        width: '100%',
        height: '100%',
    },
})