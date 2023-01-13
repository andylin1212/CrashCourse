import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect }  from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
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
    'Nunito-Bold' : require('./src/assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Regular' : require('./src/assets/fonts/Nunito-Regular.ttf')
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
    <LoadingProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Search"}>
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
