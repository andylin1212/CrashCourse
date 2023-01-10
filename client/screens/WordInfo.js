import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableHighlight } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Summary from './WordDetails/Summary'
import Details from './WordDetails/Details'
import Random from './WordDetails/Random'
import Story from './WordDetails/Story'
import { Alert } from 'react-native';
import axios from 'axios';
import { LoadingContext } from '../context/loadingContext'

const Tab = createMaterialBottomTabNavigator();

function WordInfo( {route}) {
  const input = route.params.input
  const summary = route.params.summary
  const relatedWords = route.params.relatedWords
  const details = route.params.details
  // const [interestingFacts, setInterestingFacts] = useState('')
  const { setOtherInfo } = useContext(LoadingContext);


  const additionalSearch = async (input) => {
    try {
      const interestingResponse = await axios.post(`http://192.168.1.4:5000/interesting-facts`, {prompt: input})
      const questionResponse = await axios.post(`http://192.168.1.4:5000/questions`, {prompt: input})

      console.log('interesting', interestingResponse.data.message)

      const interestingResReformatted = interestingResponse.data.message.split('\n').filter(word => word.length !== 0);
      const questionResReformatted = questionResponse.data.message.split('\n').filter(word => word.length !== 0);

      setOtherInfo([interestingResReformatted, questionResReformatted]);

    } catch (err) {
      Alert.alert('Error', 'There was an error making the request');
    }
  }


  //additional queries in the background
  useEffect (() => {
    additionalSearch(input)
  },[])

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Summary"
        component={Summary}
        initialParams ={{
            input: input,
            summary: summary,
            relatedWords: relatedWords
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        initialParams ={{
            input: input,
            details: details
        }}
      />
      <Tab.Screen
        name="Random"
        component={Random}
        initialParams ={{
            input: input
        }}
      />
      <Tab.Screen
        name="Story"
        component={Story}
        initialParams ={{
            input: input,
        }}
      />
    </Tab.Navigator>
    // <SafeAreaView>
    //   <Text>WordInfo</Text>
    // </SafeAreaView>
  );
}

export default WordInfo;