import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
// import WelcomeScreen from './screens/WelcomeScreen';
import SearchScreen from './screens/SearchScreen';
import WordInfo from './screens/WordInfo'
import LoadingAnimations from './screens/LoadingAnimations'
import SplashScreen from './components/SplashScreen'
import { LoadingProvider } from './context/loadingContext.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const Stack = createStackNavigator();

export default function App() {
  console.log("app rendered");
  return (
    // <View>
    //   <Text>Home</Text>
    // </View>
    <LoadingProvider>
      <SafeAreaProvider>
        {/* <SplashScreen></SplashScreen> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Splash"}>
            {/* <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
              // options={{title: "Welcome"}}
            /> */}

            <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{ headerShown: false }}
              // options={{title: "Welcome"}}
            />
            <Stack.Screen
              name="Info"
              component={WordInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loading"
              component={LoadingAnimations}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </LoadingProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
