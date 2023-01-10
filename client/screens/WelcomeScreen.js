import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView, View,  Text, TouchableHighlight } from 'react-native';


function WelcomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
      <TouchableHighlight onPress={() => navigation.navigate("Search")}>
        <Text>Get Started</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
