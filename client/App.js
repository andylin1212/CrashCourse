import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect }  from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
// import WelcomeScreen from './screens/WelcomeScreen';
import SearchScreen from './screens/SearchScreen';
import WordInfo from './screens/WordInfo'
import LoadingAnimations from './screens/LoadingAnimations'
import { LoadingProvider } from './context/loadingContext.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



const Stack = createStackNavigator();

export default function App() {
  console.log("app rendered");

  const [fontsLoaded] = useFonts({
    'Nexa-Book' : require('./src/assets/fonts/Nexa-Book.ttf'),
    'Nexa-Bold' : require('./src/assets/fonts/Nexa-Bold.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    // <View>
    //   <Text>Home</Text>
    // </View>
    <LoadingProvider>
      <SafeAreaProvider>
        {/* <SplashScreen></SplashScreen> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Search"}>
            {/* <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
              // options={{title: "Welcome"}}
            /> */}
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
