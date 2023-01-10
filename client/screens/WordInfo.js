import React, { useState, useEffect, useContext, useRef } from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Summary from './WordDetails/Summary'
import Details from './WordDetails/Details'
import Random from './WordDetails/Random'
import Story from './WordDetails/Story'
import { Alert } from 'react-native';
import axios from 'axios';
import { LoadingContext } from '../context/loadingContext'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import TabButton from './TabButton';

const Tab = createBottomTabNavigator();

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
      const jokeResponse = await axios.post(`http://192.168.1.4:5000/joke`, {prompt: input})

      console.log('interesting', interestingResponse.data.message)

      const interestingResReformatted = interestingResponse.data.message.split('\n').filter(word => word.length !== 0);
      const questionResReformatted = questionResponse.data.message.split('\n').filter(word => word.length !== 0);
      const jokeResReformatted = jokeResponse.data.message.split('\n').filter(word => word.length !== 0);

      setOtherInfo([interestingResReformatted, questionResReformatted, jokeResReformatted]);

    } catch (err) {
      Alert.alert('Error', 'There was an error making the request');
    }
  }


  //additional queries in the background
  useEffect (() => {
    // additionalSearch(input)
    console.log('rerendered')
  },[])


  const TabArr = [
    { route: 'Summary', label: 'Summary', type: Icon.Ionicons, activeIcon: 'ios-home-sharp', inactiveIcon : 'ios-home-outline', component: Summary, initialParams: { input: input, summary: summary, relatedWords: relatedWords }},
    { route: 'Details', label: 'Details', type: Icon.Ionicons, activeIcon: 'ios-information-circle-sharp', inactiveIcon : 'ios-information-circle-outline', component: Details, initialParams: { input: input, details: details }},
    { route: 'Random', label: 'Random', type: Icon.Ionicons, activeIcon: 'ios-happy', inactiveIcon : 'ios-happy-outline', component: Random, initialParams:{input: input}},
    { route: 'Story', label: 'Story', type: Icon.Ionicons, activeIcon: 'book' , inactiveIcon : 'book-outline', component: Story, initialParams:{input: input}},
  ];


  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        //   tabBarIcon: ({color, size, focused}) => {
        //   let iconChosen;
        //   if (route.name === "Summary") {
        //     iconChosen = focused ? 'ios-home-sharp' : 'ios-home-outline'
        //   } else if (route.name === "Details") {
        //     iconChosen = focused ? 'ios-information-circle-sharp' : 'ios-information-circle-outline'
        //   } else if (route.name === "Random") {
        //     iconChosen = focused ? 'ios-happy' : 'ios-happy-outline'
        //   } else if (route.name === "Story") {
        //     iconChosen = focused ? 'book' : 'book-outline'
        //   }
        //   return (
        //     <TouchableOpacity>
        //       <Animatable.View
        //         ref={viewRef}
        //         style={styles.btn}
        //       >
        //         <Icon name={iconChosen} size={22} color={color} />
        //       </Animatable.View>
        //     </TouchableOpacity>
        //   )
        // },
        // tabBarButton: (props) => <TabButton {...props} item={item} />
      })}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen name={item.route} component={item.component} initialParams={item.initialParams} key={index}
            options={{
              // tabBarLabel: item.label,
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
      {/* <Tab.Screen
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
      /> */}
    </Tab.Navigator>
    // <SafeAreaView>
    //   <Text>WordInfo</Text>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    height: 65,
    bottom: 15,
    right: 18,
    left: 18,
    borderRadius: 15,
    paddingBottom: 0,
    flex: 1,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})

export default WordInfo;