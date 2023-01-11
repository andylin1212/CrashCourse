import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function SplashScreen (props) {
  return (
    <View style={styles.container}>
      <Text>
        Splash
      </Text>
      <Image
          style={styles.logo}
          source={require("../src/assets/logo1.png")
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  logo: {
    flex: 0.5,
    width: 300,
    height: 50,
    resizeMode: 'contain'
  }
});

