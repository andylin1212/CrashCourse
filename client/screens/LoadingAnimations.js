import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import { Alert } from 'react-native';

export default function LoadingAnimations({route, navigation}) {
  const input = route.params.input

  const initialSearch = async (input) => {
    try {
      const summaryResponse = await axios.post(`http://192.168.1.4:5000/summary`, {prompt: input})
      // const relatedWordsResponse = await axios.post(`http://192.168.1.4:5000/related-words`, {prompt:input})
      // const detailsResponse = await axios.post(`http://192.168.1.4:5000/details`, {prompt:input})

      // console.log('summary', summaryResponse.data.message)
      // console.log('relatedWords', relatedWordsResponse.data.message)
      // console.log('details', detailsResponse.data.message)

      navigation.navigate("Info", {
        input: input,
        summary: summaryResponse.data.message,
        relatedWords: 'relatedWordsResponse.data.message',
        // details: detailsResponse.data.message
      })
    } catch (err) {
      Alert.alert('Error', 'There was an error making the request');
      navigation.navigate("Search")
    }
  }

  useEffect (() => {
    initialSearch(input)
  },[])

  return (
    <LottieView source={require('../src/assets/bouncingBearLoading.json')} autoPlay loop />
  );
}