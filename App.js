import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Landing from './Landing';

function HomeScreen({navigation}) {
    let [fontsLoaded] = useFonts({
      "Peralta": require("./assets/fonts/Peralta-Regular.ttf")
    })
    if(!fontsLoaded){
      return <AppLoading/>
    } else {
      return (
        <View style={styles.container} >
          <Text
            style={styles.title}
            >
                Happy Campers! 
            </Text>
            <View>
              <Text
                onPress={() => navigation.push("Landing")}
                style={styles.text}
              >
                Swipe Up For A List of Venues
              </Text>
            </View>
          <StatusBar style="auto" />
        </View>
      );
  }
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} style={styles.homeScreen} />
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const darkOlive = "#606c38ff"
const kombuGreen = "#283618ff"
const cornSilk = "#fefae0ff"
const fawn = "#dda15eff"
const liverDogs = "#bc6c25ff"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${kombuGreen}`,
    alignItems: 'center',
    justifyContent: 'center',
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
  homeScreen: {
    backgroundColor: `${fawn}`
  }
});

export default App;