import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View, Image, SafeAreaView, Button, Alert, TouchableWithoutFeedback, Keyboard, ImageBackground} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import Lottie from 'lottie-react-native';
import LoadingAnimations from './LoadingAnimations'
import axios from 'axios';
import { LoadingContext } from '../context/loadingContext'
import * as Animatable from 'react-native-animatable';
import GlobalStyles from '../src/utils/GlobalStyles'

const logoAnimation = {0: {translateY: 300, scale: 1}, 0.8: {translateY: 300, scale: 1}, 1: {translateY: 200, scale: 0.8}}

const inputAnimation = {0: {opacity:0, translateY: 100}, 0.8: { opacity: 0, translateY: 100}, 1: {opacity: 1, translateY: -50}}

const loadDuration = 4000;

export default function Search({navigation}) {
  const [input, setInput] = useState('');
  const logoRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    logoRef.current.animate(logoAnimation);
    inputRef.current.animate(inputAnimation)
  },[logoRef])
  // const [summary, setSummary] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  // const [relatedWords, setRelatedWords] = useState('');
  // const {isLoading, setIsLoading} = useContext(LoadingContext);

  // const animationRef = useRef()

  // useEffect(() => {
  //   console.log(isLoading)
  //   animationRef.current?.play();
  // }, [isLoading])

  // const loadPageHandler = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 8000)
  // }

  // const finishLoad = () => {
  //   setIsLoading(false);
  //   setInput('');
  // }

  const handleSubmit = async () => {
    // console.log(input)
    Keyboard.dismiss();
    navigation.navigate("Loading", {
      input: input,
    })
    setInput('');
    // try {
      // loadPageHandler();

    //   const summaryResponse = await axios.post(`http://192.168.1.4:5000/summary`, {prompt: input})
    //   const relatedWordsResponse = await axios.post(`http://192.168.1.4:5000/related-words`, {prompt:input})
    //   // const detailsResponse = await axios.post(`http://192.168.1.4:5000/details`, {prompt:input})

    //   console.log('summary', summaryResponse.data.message)
    //   console.log('relatedWords', relatedWordsResponse.data.message)
    //   // console.log('details', detailsResponse.data.message)

    //   finishLoad();
    //   navigation.navigate("Info", {
    //     input: input,
    //     summary: summaryResponse.data.message,
    //     relatedWords: relatedWordsResponse.data.message,
    //     // details: detailsResponse.data.message
    //   })
    // } catch (err) {
    //   Alert.alert('Error', 'There was an error making the request');
    // }
  };

  // if (isLoading) {
  //   return (
  //     <View style={styles.loadPage}>
  //       <Lottie
  //         ref={animationRef}
  //         source={require('../src/assets/bouncingBearLoading.json')} autoPlay loop/>
  //     </View>
  //   )
  // }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Animatable.Image
          ref={logoRef}
          style={styles.logo}
          duration={loadDuration}
          // easing='ease-in-out'
          source={require("../src/assets/logo1.png")}
        />
        <Animatable.View
          ref={inputRef}
          style={styles.inputContainer}
          duration={loadDuration}>
          <Text style={GlobalStyles.textFont}>What do you NEED to know about right now?</Text>
          <TextInput
            style={GlobalStyles.textFont}
            placeholder = "search me..."
            value = {input}
            onChangeText={text => setInput(text)}
            style={styles.input}
          />
          <Button
            title="Submit"
            style={GlobalStyles.textFont}
            onPress={handleSubmit}
          />
          <StatusBar style="auto" />
        </Animatable.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    padding: 10,
    width: 200,
  },
  // loadPage : {
  //   flex: 1,
  //   backgroundColor: 'dodgerblue',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   resizeMode: 'cover'
  // },
  logo: {
    flex: 0.3,
    width: 300,
    height: 50,
    resizeMode: 'contain'
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
