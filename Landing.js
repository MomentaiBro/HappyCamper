import { SafeAreaView, Text, StyleSheet } from "react-native";
import React from "react";

const Landing = ({navigation}) => {
    return ( 
        <Text
        onPress={() => navigation.popToTop()}
        style={styles.title}
        >
            Landing
        </Text>
     );
}
 
export default Landing;

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
    color: `${fawn}`,
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
});