import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Alert, ScrollView, Image} from 'react-native';
import Lottie from 'lottie-react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import GlobalStyles, { COLORS }from '../../src/utils/GlobalStyles'

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
      <View style={styles.mainContainer}>
        <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.backBtn}
          onPress={() => {
            navigation.navigate("Search")}}>
          <Icon name='Back-to-Search' type={Icon.Ionicons} name='ios-search-sharp' size={24} color='white' />
        </TouchableOpacity>
        <Image style={styles.miniLogo} source={require("../../src/assets/logo1-mini.png")} />
      </View>

      <View style={styles.container}>
        <Lottie source={require('../../src/assets/loading.json')} autoPlay loop />
      </View>
     </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.backBtn}
          onPress={() => {
            navigation.navigate("Search")}}>
          <Icon name='Back-to-Search' type={Icon.Ionicons} name='ios-search-sharp' size={24} color='white' />
        </TouchableOpacity>
        <Image style={styles.miniLogo} source={require("../../src/assets/logo1-mini.png")} />
      </View>

      <View style={styles.container}>
        <Text style={[GlobalStyles.headerFont, styles.header]}>Story</Text>
        <ScrollView style={styles.storyContainer}>
          <Text style={[GlobalStyles.textFont, styles.storyText]}>
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
      <StatusBar style='light' />
    </View>
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
    flex: 0.75,
    top: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    // borderColor: 'blue',
    // borderWidth: 2,
  },
  storyContainer: {
    flex: 0.6,
    borderRadius: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderColor: COLORS.SECONDARY,
    borderWidth: 2,
    width: '90%',
  },
  topBarContainer: {
    flex: 0.1,
    backgroundColor: COLORS.SECONDARY,
    width: '100%',
    justifyContent: 'center',
  },
  miniLogo: {
    width: 40,
    height: 35,
    top: "5%",
    left: "45%"
  },
  backBtn: {
    top: 35,
    left: 15,
    zIndex: 4,  //works for IOS
    elevation: 4,  //works on Android
  },
  header: {
    marginBottom: 15,
    fontSize: 28,
  },
  storyText: {
    padding: 15,
    paddingHorizontal: 20,
    fontSize: 14,
  }
})