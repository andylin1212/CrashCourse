import React, {useContext} from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableOpacity, Button, ScrollView, Image} from 'react-native';
import { LoadingContext } from '../../context/loadingContext'
import KeyPoint from './KeyPoint';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import GlobalStyles, { COLORS }from '../../src/utils/GlobalStyles'

function Random({route, navigation}) {
  const { otherInfo } = useContext(LoadingContext);

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
        <View style={styles.interestingFactsContainer}>
          <Text style={[GlobalStyles.headerFont, styles.header]}>Interesting Facts</Text>
          <ScrollView horizontal={false}
          style={styles.scrollViewContainer}
          contentContainerStyle={{alignItems: 'center'}}>
            {otherInfo[0].map((text)=>
              <KeyPoint key={text[0]} text={text} style={'circle'} color='blue'></KeyPoint>
            )}
          </ScrollView>
        </View>

        <View style={styles.questionsContainer}>
          <Text style={[GlobalStyles.headerFont, styles.header]}>Questions to Ask</Text>
          <ScrollView horizontal={false}
          style={styles.scrollViewContainer}
          contentContainerStyle={{alignItems: 'center'}}>
            {otherInfo[1].map((text)=>
              <KeyPoint key={text[0]} text={text} color='red'></KeyPoint>
            )}
          </ScrollView>
        </View>

        <View style={styles.jokesContainer}>
          <Text style={[GlobalStyles.headerFont, styles.header]}>Random Joke</Text>
          <Text style={GlobalStyles.textFont}>usually of the "dad" variety</Text>
          <Text style={[GlobalStyles.textFont, styles.jokeTextContainer]}>
            {otherInfo[2].join('\n')}
          </Text>
        </View>
      </View>
      <StatusBar style='light'/>
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
  container: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  interestingFactsContainer: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
  questionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#acd8e2',
    paddingTop: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
  jokesContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingHorizontal: 15,
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
    fontSize: 24,
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
    paddingVertical: 10,
    marginVertical: 15,
  }
})

export default Random;