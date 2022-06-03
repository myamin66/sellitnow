import {StatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, Image } from 'react-native';
// import { TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Button, Alert } from 'react-native';
import { Platform, Dimensions } from 'react-native';
export default function App() {
  // console.log(Dimensions.get('screen'));
  // console.log(Dimensions.get('window'));
  const handlePressEvent = () => {console.log('Press Event')};
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '30%', width:'100%', backgroundColor: 'dodgerblue'}}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

});       