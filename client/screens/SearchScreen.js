import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Lottie from 'lottie-react-native';
import LoadingAnimations from './LoadingAnimations'
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

  const handleSubmit = async () => {
    if (!input) {
      Alert.alert('Error', 'No search term provided!');
    } else {
      Keyboard.dismiss();
      navigation.navigate("Loading", {
        input: input,
      })
      setInput('');
    }
  };


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
          <TouchableOpacity
            title="Submit"
            style={[GlobalStyles.textFont, styles.submitBtn]}
            onPress={handleSubmit}>
            <Text style={[GlobalStyles.textFont]}>Submit</Text>
          </TouchableOpacity>
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
  },
  submitBtn: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  }
});
