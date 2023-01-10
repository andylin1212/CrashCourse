import React, {useContext} from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableHighlight, Button} from 'react-native';
import { LoadingContext } from '../../context/loadingContext'
import KeyPoint from './KeyPoint';

function Random({route, navigation}) {
  const { otherInfo } = useContext(LoadingContext);
  console.log(otherInfo[2])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backBtn}>
        <Button
          title="Back"
          onPress={() => {
          navigation.navigate("Search", {
            //   input: input,
            // })
        })}}>Back</Button>
      </View>

      <View style={styles.interestingFactsContainer}>
        <Text style={styles.header}>Interesting Facts</Text>
        {otherInfo[0].map((text)=>
          <KeyPoint key={text[0]} text={text} style={'circle'}></KeyPoint>
        )}
      </View>

      <View style={styles.questionsContainer}>
        <Text style={styles.header}>Questions to Ask</Text>
        {otherInfo[1].map((text)=>
          <KeyPoint key={text[0]} text={text} ></KeyPoint>
        )}
      </View>

      <View style={styles.jokesContainer}>
        <Text style={styles.header}>Random Joke</Text>
        <Text>Rarely funny</Text>
        {otherInfo[2].map((text)=>
          <KeyPoint key={text[0]} text={text} style={'circle'}>></KeyPoint>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  interestingFactsContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '90%',
  },
  questionsContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '90%',
  },
  jokesContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '90%',
  },
  backBtn: {
    position: 'absolute',
    top: 55,
    left: 20,
    zIndex: 3,  //works for IOS
    elevation: 3,  //works on Android
  },
  header: {
    fontSize: 30,
  },
})

export default Random;