import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const regEX = /[.):]/g;
function KeyPoint(props) {
  const sentence = props.text.split(".", 3);
  const style = props.style;
  const num = sentence[0];
  const content = sentence.slice(1).join('.');

  return (
   <View style={[styles.keyPointContainer, styles.shadowProp]}>
      <View style={style ? styles.circle : styles.square}>
        <Text style={{ color: 'white', textAlign: 'center'}}>{num}</Text>
      </View>
      <Text style={styles.text}>{content}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  keyPointContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 20,
    width: '100%'
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    opacity: 0.6
  },
  circle: {
    width: 35,
    height: 35,
    backgroundColor: 'blue',
    borderRadius: 20,
    marginRight: 15,
    justifyContent: 'center',
    opacity: 0.6
  },
  text: {
    maxWidth: '83%'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})

export default KeyPoint;