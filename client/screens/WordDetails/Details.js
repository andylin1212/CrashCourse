import React from 'react';
import { StyleSheet, SafeAreaView, View,  Text, TouchableHighlight } from 'react-native';

function Details({ route }) {
  const details = route.params.details;

  return (
    <SafeAreaView>
      <Text>Details</Text>
      <Text>{details}</Text>
    </SafeAreaView>
  );
}

export default Details;