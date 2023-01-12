import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';
import axios from 'axios';
import { Alert, SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function LoadingAnimations({route, navigation}) {
  const input = route.params.input
  const [loadingText, setLoadingText] = useState('Generating Content')

  setTimeout(() => {
    setLoadingText("Coming through ...");
  }, 3000);

  const initialSearch = async (input) => {
    try {
      const summaryResponse = await axios.post(`http://192.168.1.4:5000/summary`, {prompt: input})
      const relatedWordsResponse = await axios.post(`http://192.168.1.4:5000/related-words`, {prompt:input})
      // const detailsResponse = await axios.post(`http://192.168.1.4:5000/details`, {prompt:input})

      // console.log('summary', summaryResponse.data.message)
      // console.log('relatedWords', relatedWordsResponse.data.message)
      // console.log('details', detailsResponse.data.message)

      navigation.navigate("Info", {
        input: input,
        summary: summaryResponse.data.message,
        relatedWords: relatedWordsResponse.data.message
      })
    } catch (err) {
      Alert.alert('Error', 'There was an error making the request');
      navigation.navigate("Search")
    }
  }

  useEffect (() => {
    setLoadingText('Generating Content')
    initialSearch(input)
  },[input])

  return (
    <SafeAreaView style={styles.loadPage}>
      <Text style={styles.text}>{loadingText}</Text>
      <Lottie source={require('../src/assets/bouncingBearLoading.json')} autoPlay loop />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingDots: {
    zIndex: 4,
    top: 180,
  },
  loadPage : {
    height: '100%',
    backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    justifyContent: 'center',
    // resizeMode: 'cover'
  },
  text: {
    textAlign: 'center',
    top: 185,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});
