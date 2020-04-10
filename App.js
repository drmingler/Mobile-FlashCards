import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import DeckList from "./src/component/DeckList";
import Score from "./src/component/Quiz";
import Quiz from "./src/component/Quiz";
import AddCard from "./src/component/AddCard";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducers/Shared";
import middleware from "./src/middleware/index";
import styled from "styled-components";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import DeckCard from "./src/component/DeckCard";
import NewDeck from "./src/component/NewDeck";
import { purple, white } from "./src/utils/colors";

function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
// Stack Navigator for every component that has  to do with the deck
const DeckStack = createStackNavigator();
function DeckComponents() {
  const header = Platform.OS === "ios";
  return (
    <DeckStack.Navigator
      screenOptions={{
        headerShown: header,
      }
      }
    >
      <DeckStack.Screen name={"Decks"} component={DeckList} />
      <DeckStack.Screen name={"Card"} component={DeckCard} />
      <DeckStack.Screen name={"Quiz"} component={Quiz} />
      <DeckStack.Screen name={"Score"} component={Score} />
    </DeckStack.Navigator>
  );
}

// Stack Navigator for every component that has to do with a user entering an input
const UserStack = createStackNavigator();
function UserComponent() {
  const header = Platform.OS === "ios";
  return (
    <UserStack.Navigator
      screenOptions={{
        headerShown: header
      }}
    >
      <UserStack.Screen name={"NewDeck"} component={NewDeck} />
      <UserStack.Screen name={"AddCard"} component={AddCard} />
    </UserStack.Navigator>
  );
}

class App extends React.Component {
  render() {
    const Tab =
      Platform.OS === "ios"
        ? createBottomTabNavigator()
        : createMaterialTopTabNavigator();
    return (
      <Provider store={createStore(reducer, middleware)}>
        <Container>
          <MyStatusBar
            backgroundColor={Platform.OS === "ios" ? white : purple}
          />
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Decks" component={DeckComponents} />
              <Tab.Screen name="NewDeck" component={UserComponent} />
            </Tab.Navigator>
          </NavigationContainer>
        </Container>
      </Provider>
    );
  }
}

const Container = styled.View`
  flex: 1;
`;

export default App;
