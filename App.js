import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import DeckList from "./src/component/DeckList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducers/Shared";
import middleware from "./src/middleware/index";

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex: 1}}>
          <DeckList />
        </View>
      </Provider>
    );
  }
}

export default App;
