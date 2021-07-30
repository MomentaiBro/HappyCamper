import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
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
    backgroundColor: '#283618ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: `${cornSilk}`,
    fontSize: 40,
    fontWeight: '900',
    lineHeight: 200,
    fontFamily: 'Peralta-Regular'
  },
  text: {
    color: `${cornSilk}`,
    fontSize: 20,
  },
});
