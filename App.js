import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
    console.log("emma")
  return (
    <View>
      <Text>Welcome to React Native!</Text>
      <Text>To get started, kkkedit App.js</Text>
      <Text>{instructions}</Text>
    </View>
  );
}

