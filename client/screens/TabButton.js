import React, { useEffect, useRef } from 'react';
import { StyleSheet, View,  Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

//button animation

const focusAnimation = {0: {scale: 1.2, translateY: 0}, 1: {scale: 2, translateY: -12}};
const nonFocusAnimation = {0: {scale: 1.5, translateY: -5}, 1: {scale: 1.5, translateY: 0}};

const btnFocusAnimation ={0: {scale: 0}, 0.35: {scale: 0.5}, 0.8: {scale: 0.75}, 1: {scale: 1}};
const btnNonFocusAnimation ={0: {scale: 0}, 1: {scale: 0}};

const TabButton = (props) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const btnRef = useRef(null);
  const btnTextRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(focusAnimation)
      btnRef.current.animate(btnFocusAnimation)
      btnTextRef.current.transitionTo({scale: 1})
    } else {
      viewRef.current.animate(nonFocusAnimation)
      btnRef.current.animate(btnNonFocusAnimation)
      btnTextRef.current.transitionTo({scale: 0})
    }
  }, [focused])

  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={onPress}
      activeOpacity={1} >
      <Animatable.View
        style={styles.btnContainer}
        ref={viewRef}
        duration={800}>
        <View
          style={styles.btn}>
          <Animatable.View
            ref={btnRef}
            style={{...StyleSheet.absoluteFillObject, backgroundColor: 'blue', borderRadius: 20}}/>
          <Icon type={item.type} name={focused ? item.activeIcon : item.inactiveIcon} color={ focused ? 'white' : 'blue'}/>
        </View>
        <Animatable.Text
          style={styles.btnText}
          ref={btnTextRef}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default TabButton;

const styles = StyleSheet.create({
  btn: {
    width: 35,
    height: 35,
    borderRadius: 17,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    // borderColor: 'red',
  },
  btnText: {
    fontSize: 7,
    color: 'blue',
    textAlign: 'center'
  }
})