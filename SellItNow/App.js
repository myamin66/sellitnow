import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import {StatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, Image } from 'react-native';
// import { TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Button, Alert } from 'react-native';
import { Platform, Dimensions } from 'react-native';

export default function App() {
  // console.log(Dimensions.get('screen'));
  // console.log(Dimensions.get('window'));
  // console.log(useDimensions())
  // console.log(useDeviceOrientation())

  // const {landscape} = useDeviceOrientation()
  // const handlePressEvent = () => {console.log('Press Event')};
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <View style={{height: '30%', width:'100%', backgroundColor: 'dodgerblue'}}></View>
  //     <View style={{height: landscape ? '100%': '30%', width:'100%', backgroundColor: 'dodgerblue'}}></View>
  //   </SafeAreaView>
  return(
  //   <View style = {{backgroundColor: 'dodgerblue', flex: 1}}>
  //     <View style = {{backgroundColor:'pink', flex: 2}}/>
  //     <View style = {{backgroundColor:'tomato', flex: 1}}/>
  //     <View style = {{backgroundColor:'hotpink', flex: 1}}/>

  // </View>
  <View style = {{backgroundColor: '#FEFCFF', flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
      <View style = {{backgroundColor:'pink', height:100, width:100}}/>
      <View style = {{backgroundColor:'tomato',  height:100, width:100}}/>
      <View style = {{backgroundColor:'hotpink',  height:100, width:100}}/>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

});       