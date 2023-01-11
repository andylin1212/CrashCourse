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
          <KeyPoint key={text[0]} text={text} style={'circle'} color='blue'></KeyPoint>
        )}
      </View>

      <View style={styles.questionsContainer}>
        <Text style={styles.header}>Questions to Ask</Text>
        {otherInfo[1].map((text)=>
          <KeyPoint key={text[0]} text={text} color='red'></KeyPoint>
        )}
      </View>

      <View style={styles.jokesContainer}>
        <Text style={styles.header}>Random Joke</Text>
        <Text>usually of the "dad" variety</Text>
        <Text style={styles.jokeTextContainer}>
          {otherInfo[2].join('\n')}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#eefcfc"
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
    paddingTop: 15,
    paddingHorizontal: 15,
    width: '90%',
  },
  jokesContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    fontSize: 28,
  },
  jokeTextContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginVertical: 10,
    width: '100%',
    // shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  }
})

export default Random;