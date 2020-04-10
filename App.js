import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import DeckList from "./src/component/DeckList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducers/Shared";
import middleware from "./src/middleware/index";
import Score from "./src/component/Score";
import styled from "styled-components";
import Quiz from "./src/component/Quiz";

class App extends React.Component {

  render() {

    return (
      <Provider store={createStore(reducer, middleware)}>
        <Container>
          <Score />
        </Container>
      </Provider>
    );
  }
}

const Container = styled.View`
  flex: 1;
  padding: 50px 0;
`;

export default App;
