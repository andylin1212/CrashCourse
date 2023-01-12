import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import { LoadingContext } from '../../context/loadingContext'
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import GlobalStyles from '../../src/utils/GlobalStyles'



export default function Details({ route, navigation }) {
  const { details } = useContext(LoadingContext);


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
        <Text style={[GlobalStyles.headerFont, styles.header]}>Details</Text>
        <View style={styles.detailsContainer}>
          <ScrollView>
            <Text style={GlobalStyles.textFont}>{details}</Text>
          </ScrollView>
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
  detailsContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 20,
    paddingBottom: 30,
    width: '93%',
    alignItems: 'center'
  },
  topBarContainer: {
    flex: 0.1,
    backgroundColor: "#2f6783",
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
    // marginTop: 30,
    marginBottom: 15,
    fontSize: 30,
  }
})