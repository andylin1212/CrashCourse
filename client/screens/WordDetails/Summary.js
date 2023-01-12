import React from 'react';
import { StyleSheet, View,  Text, TouchableOpacity, Button, ScrollView, Image} from 'react-native';
import KeyPoint from './KeyPoint'
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import GlobalStyles, { COLORS }from '../../src/utils/GlobalStyles'


function Summary({route, navigation}) {
  const summary = route.params.summary.split('\n').filter(word => word.length !== 0);
  const relatedWords = route.params.relatedWords.split(/[,;.]/g).filter(word => word.length !== 0);

  const handleRelatedWordsSearch = (word) => {
    navigation.navigate("Loading", { input: word })
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
        <View style={styles.summaryContainer}>
          <Text style={[GlobalStyles.headerFont, styles.header]}>Key Points</Text>
          <ScrollView horizontal={false}
            style={styles.scrollViewContainer}>
          {summary.map((text)=>
            <KeyPoint key={text[0]} text={text} color={'blue'}></KeyPoint>
          )}
          </ScrollView>
        </View>

        {/* <View style={styles.wordsContainer}>
          {relatedWords.slice(1,6).map((word)=>
            <View key={word} style={styles.relatedWords}>
              <Text style={{ color: 'white', textAlign: 'center'}} key={word}>{word} </Text>
            </View>
          )}
        </View> */}

        <View style={styles.bottomBlockContainer}>
          <Text style={[GlobalStyles.headerFont, styles.header]}>Related Words</Text>
          <Text style={GlobalStyles.textFont}>click on below words to search</Text>
          <View style={styles.wordsContainer}>
          {relatedWords.slice(1).map((word)=>
            <TouchableOpacity
              key={word}
              onPress={() => handleRelatedWordsSearch(word)}
              style={styles.relatedWords}>
              <Text style={[GlobalStyles.textFont, { color: 'white', textAlign: 'center'}]} key={word}>{word} </Text>
            </TouchableOpacity>

          )}
          </View>
        </View>
      </View>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#eefcfc'
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
  container: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  summaryContainer: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
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
    width: '100%',
    paddingTop: 20,
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
  relatedWords: {
    backgroundColor: 'dodgerblue',
    borderRadius: 8,
    margin: 2,
    padding: 5,
    height: 28,
    // paddingHorizontal: 10,
  },
  scrollViewContainer: {
    width: '100%',
    paddingVertical: 15,
  }
});

export default Summary;

