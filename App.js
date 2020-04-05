import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import DeckList from "./src/component/DeckList"


class App extends React.Component{

    render() {
    return (
      <View style={styles.container}>
          <DeckList/>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, kkkedit App.js</Text>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});