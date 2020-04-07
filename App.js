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
        {/*<View>*/}
        <View style={styles.container}>
          <DeckList />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
