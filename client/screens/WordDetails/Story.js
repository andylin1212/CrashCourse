import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableHighlight, Button, Alert, ScrollView} from 'react-native';
import Lottie from 'lottie-react-native';
import axios from 'axios';

const chunkText = "You don't necessarily need the react-native-animatable library to create the animation of text being typed out in React Native. The animated library, which is built into React Native, provides a powerful set of tools for creating animations using JavaScript. However, react-native-animatable is a popular library that provides a set of pre-built animations that you can use in your React Native apps. It provides a Animatable.Text component that you can use to animate text, among other things. It also provides a simple API for creating custom animations and making it easy to apply animations to your components."


function Story({ route, navigation }) {
  const input = route.params.input;
  const [story, setStory] = useState('');
  const [text, setText] = useState('');
  const [cursorStatus, setCursorStatus] = useState('transparent');
  const [textIdx, setTextIdx] = useState(0);
  const [timeouts, setTimeouts] = useState({
    cursor: undefined,
    typing: undefined
  })

  const [isLoading, setIsLoading] = useState(true);

  const textRef = useRef(text);
  textRef.current = text;

  const cursorStatusRef = useRef(cursorStatus);
  cursorStatusRef.current = cursorStatus;

  const textIdxRef = useRef(textIdx);
  textIdxRef.current = textIdx;

  const timeoutsRef = useRef(timeouts);
  timeoutsRef.current = timeouts;

  const typingAnimation = () => {
    if (textIdxRef.current < story.length) {
      setText(textRef.current + story[textIdxRef.current])
      setTextIdx(textIdxRef.current + 1)

      let updatedTimeouts = { ...timeoutsRef.current }
      updatedTimeouts.typing = setTimeout(typingAnimation, 50);
      setTimeouts(updatedTimeouts);
    } else {
      setTextIdx(0);
      setTimeouts({ cursor: undefined, typing: undefined });
      clearTimeout(timeoutsRef.current.cursor);
      setCursorStatus('transparent');
    }
  }

  const cursorAnimation = () => {
    if (cursorStatusRef.current === 'transparent') {
      setCursorStatus('black');
    } else {
      setCursorStatus('transparent')
    }
  }

  const handleLoad = async () => {
    try {
      const storyResponse = await axios.post(`http://192.168.1.4:5000/story`, {prompt: input})
      setStory(storyResponse.data.message);
      setIsLoading(false);
    } catch (err) {
      Alert.alert('Error', 'There was an error making the request');
    }
  }

  useEffect(() => {
    if (isLoading) handleLoad();
  }, [])

  useEffect(() => {
    setText('');
    setTextIdx(0);
    let updatedTimeouts = { ...timeoutsRef.current };
    updatedTimeouts.typing = setTimeout(typingAnimation, 450);
    updatedTimeouts.cursor = setTimeout(cursorAnimation, 300);
    setTimeouts(updatedTimeouts);

    return () => {
      clearTimeout(timeoutsRef.current.typing);
      clearTimeout(timeoutsRef.current.cursor);
    }
  }, [story])

  if (isLoading) {
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
       <Lottie source={require('../../src/assets/loading.json')} autoPlay loop />
     </View>
   </SafeAreaView>
    )
  }

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
        <ScrollView style={styles.storyContainer}>
          <Text style={styles.storyText}>
            {text}
            <Text style={{color: cursorStatus, fontSize: 16}}>|</Text>
          </Text>
        </ScrollView>
        <Button
            title="finish typing"
            onPress={() => {
              setText(story);
              setTextIdx(0);
              setCursorStatus('transparent');
              clearTimeout(timeoutsRef.current.typing);
              clearTimeout(timeoutsRef.current.cursor);
            }}
          ></Button>
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
    flex: 0.85,
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
    width: '93%'
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
  },
  storyText: {
    padding: 15,
    paddingHorizontal: 20,
    fontSize: 14,
  }
})