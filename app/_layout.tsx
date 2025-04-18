// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
// import 'react-native-reanimated';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';
import React from 'react';

// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme()

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   <>
      <Stack screenOptions={{headerStyle: {backgroundColor:theme.backgroundHeader}, headerTintColor:theme.text, headerShadowVisible:false}}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
         {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} /> */}
        <Stack.Screen name='index' options={{title : "Home", headerShown:false}}/>
        <Stack.Screen name='menu' options={{title : "Menu", headerShown:true, headerTitle:'Coffee Shop Menu'}}/>
        <Stack.Screen name='contact' options={{title : "Contact Us", headerShown: true, headerTitle: 'Contact Us'}}/>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </>
  );
}
