import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { assets } from './react-native.config';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Peralta": require("./assets/fonts/Peralta-Regular.ttf")
  })
  if(!fontsLoaded){
    return <AppLoading/>
  } else {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Text
            style={styles.title}
            >
                Happy Campers! 
            </Text>
            <View>
              <Text
                style={styles.text}
              >
                Swipe Up For A List of Venues
              </Text>
            </View>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    );
  }
  
  
}



const darkOlive = "#606c38ff"
const kombuGreen = "#283618ff"
const cornSilk = "#fefae0ff"
const fawn = "#dda15eff"
const liverDogs = "#bc6c25ff"

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'column',
    backgroundColor: '#283618ff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  title: {
    color: `${cornSilk}`,
    fontSize: 40,
    fontWeight: '900',
    lineHeight: 200,
    // textDecorationLine: 'underline',
    fontFamily: 'Peralta',
  },
  text: {
    color: `${cornSilk}`,
    fontSize: 20,
    fontFamily: 'Peralta',
  },
  // scrollView: {
  //   height: '100%',
  //   backgroundColor: `${liverDogs}`,
  // }
});
