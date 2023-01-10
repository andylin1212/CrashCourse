import React, {useContext} from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableHighlight, Button} from 'react-native';
import { LoadingContext } from '../../context/loadingContext'
import KeyPoint from './KeyPoint';

function Random({route, navigation}) {
  const { otherInfo } = useContext(LoadingContext);

  console.log(otherInfo[1])

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

      <View>
        <Text>{otherInfo[1]}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  interestingFactsContainer: {
    flex: 0.5,
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