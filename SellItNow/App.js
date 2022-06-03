import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, Image } from 'react-native';

export default function App() {
  const handlePressEvent = () => {console.log('Press Event')};
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image source={require('./assets/favicon.png')}/> */}
      <Image 
      // blurRadius={5} 
      fadeDuration = {1000}
      source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300'}}/>
      
      <Text onPress={handlePressEvent}>Hello World Android bro, native</Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});       