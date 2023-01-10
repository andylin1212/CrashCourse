import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableHighlight, Button } from 'react-native';

const chunkText = "You don't necessarily need the react-native-animatable library to create the animation of text being typed out in React Native. The animated library, which is built into React Native, provides a powerful set of tools for creating animations using JavaScript. However, react-native-animatable is a popular library that provides a set of pre-built animations that you can use in your React Native apps. It provides a Animatable.Text component that you can use to animate text, among other things. It also provides a simple API for creating custom animations and making it easy to apply animations to your components."


function Story({ route }) {


  return (
    <SafeAreaView style={styles.mainContainer}>
       <View style={styles.backBtn}>
        <Button
          title="Back"
          onPress={() => {
          navigation.navigate("Search", {
            //   input: input,
            // })
        })}}>Back</Button>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Story</Text>
        <View style={styles.storyContainer}>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Story;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#eefcfc',
  },
  container: {
    flex: 0.8,
    top: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    // borderColor: 'blue',
    // borderWidth: 2,
  },
  storyContainer: {
    flex: 1,
    borderRadius: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: '90%'
  },
  backBtn: {
    position: 'absolute',
    top: 55,
    left: 20,
    zIndex: 3,  //works for IOS
    elevation: 3,  //works on Android
  },
  header: {
    // marginTop: 30,
    marginBottom: 15,
    fontSize: 30,
  }
})