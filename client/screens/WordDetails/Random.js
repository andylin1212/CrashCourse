import React, {useContext} from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableHighlight, Button, ScrollView} from 'react-native';
import { LoadingContext } from '../../context/loadingContext'
import KeyPoint from './KeyPoint';

function Random({route, navigation}) {
  const { otherInfo } = useContext(LoadingContext);

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
        <View style={styles.interestingFactsContainer}>
          <Text style={styles.header}>Interesting Facts</Text>
          <ScrollView horizontal={false}
          style={styles.scrollViewContainer}
          contentContainerStyle={{alignItems: 'center'}}>
            {otherInfo[0].map((text)=>
              <KeyPoint key={text[0]} text={text} style={'circle'} color='blue'></KeyPoint>
            )}
          </ScrollView>
        </View>

        <View style={styles.questionsContainer}>
          <Text style={styles.header}>Questions to Ask</Text>
          <ScrollView horizontal={false}
          style={styles.scrollViewContainer}
          contentContainerStyle={{alignItems: 'center'}}>
            {otherInfo[1].map((text)=>
              <KeyPoint key={text[0]} text={text} color='red'></KeyPoint>
            )}
          </ScrollView>
        </View>

        <View style={styles.jokesContainer}>
          <Text style={styles.header}>Random Joke</Text>
          <Text>usually of the "dad" variety</Text>
          <Text style={styles.jokeTextContainer}>
            {otherInfo[2].join('\n')}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#eefcfc'
  },
  container: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  interestingFactsContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
  questionsContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
  jokesContainer: {
    flex: 1,
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
    fontSize: 26,
  },
  jokeTextContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
    width: '100%',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  scrollViewContainer: {
    width: '95%',
    // borderWidth: 2,
    // borderColor: 'black',
    paddingVertical: 15,
  }
})

export default Random;