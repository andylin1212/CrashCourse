import React from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableOpacity, Button} from 'react-native';
import KeyPoint from './KeyPoint'

function Summary({route, navigation}) {
  const summary = route.params.summary.split('\n').filter(word => word.length !== 0);
  const relatedWords = route.params.relatedWords.split(/[,;.]/g).filter(word => word.length !== 0);
  // .map((word) => word.replaceAll(" ", ""));

  const handleRelatedWordsSearch = (word) => {
    navigation.navigate("Loading", { input: word })
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
        <View style={styles.summaryContainer}>
          <Text style={styles.header}>Key Points</Text>
          {summary.map((text)=>
            <KeyPoint key={text[0]} text={text} color={'blue'}></KeyPoint>
            // <Text key={sentence} >{sentence}</Text>
          )}
        </View>

        {/* <View style={styles.wordsContainer}>
          {relatedWords.slice(1,6).map((word)=>
            <View key={word} style={styles.relatedWords}>
              <Text style={{ color: 'white', textAlign: 'center'}} key={word}>{word} </Text>
            </View>
          )}
        </View> */}

        <View style={styles.bottomBlockContainer}>
          <Text style={styles.header}>Related Words</Text>
          <Text>click on below words to search</Text>
          <View style={styles.wordsContainer}>
          {relatedWords.slice(1).map((word)=>
            <TouchableOpacity
              key={word}
              onPress={() => handleRelatedWordsSearch(word)}
              style={styles.relatedWords}>
              <Text style={{ color: 'white', textAlign: 'center'}} key={word}>{word} </Text>
            </TouchableOpacity>

          )}
          </View>
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
  summaryContainer: {
    flex: 3.6,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '95%',
    // marginBottom: 15,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    // marginTop: 30,
    // marginBottom: 15,
    fontSize: 30,
  },
  bottomBlockContainer : {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  wordsContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 15,
    // marginBottom: 10,
    // gap: 50,
  },
  backBtn: {
    position: 'absolute',
    top: 55,
    left: 20,
    zIndex: 3,  //works for IOS
    elevation: 3,  //works on Android
  },
  relatedWords: {
    backgroundColor: 'dodgerblue',
    borderRadius: 8,
    margin: 2,
    padding: 5,
    height: 28,
    // paddingHorizontal: 10,
  }
});

export default Summary;

