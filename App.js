import React from "react";
import { Platform, View } from "react-native";
import DeckList from "./src/component/DeckList";
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
import Score from "./src/component/Score";
import NewDeck from "./src/component/NewDeck";
import { purple, white } from "./src/utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { setLocalNotification } from "./src/utils/helpers";

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
        headerShown: header
      }}
    >
      <DeckStack.Screen name={"Decks"} component={DeckList} />
      <DeckStack.Screen name={"Deck"} component={DeckCard} />
      <DeckStack.Screen name={"Quiz"} component={Quiz} />
      <DeckStack.Screen name={"Score"} component={Score} />
      <DeckStack.Screen name={"NewDeck"} component={NewDeck} />
      <DeckStack.Screen name={"AddCard"} component={AddCard} />
    </DeckStack.Navigator>
  );
}

// Stack Navigator for every component that has  to do with the NewDeck component
const NewCardStack = createStackNavigator();
function NewCardComponents() {
  const header = Platform.OS === "ios";
  return (
    <NewCardStack.Navigator
      screenOptions={{
        headerShown: header
      }}
    >
      <NewCardStack.Screen name={"NewDeck"} component={NewDeck} />
    </NewCardStack.Navigator>
  );
}

class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

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
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Decks") {
                    iconName = focused ? "ios-list-box" : "ios-list";
                  } else if (route.name === "NewDeck") {
                    iconName = "ios-create";
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                }
              })}
              tabBarOptions={{
                activeTintColor: Platform.OS === "ios" ? "#e86c52" : "black",
                style: {
                  height: 56,
                  backgroundColor: white,
                  shadowColor: "rgba(0, 0, 0, 0.24)",
                  paddingBottom: 10,
                  paddingTop: 7,

                  shadowOffset: {
                    width: 0,
                    height: 3
                  },
                  shadowRadius: 6,
                  shadowOpacity: 1
                }
              }}
            >
              <Tab.Screen name="Decks" component={DeckComponents} />
              <Tab.Screen name={"NewDeck"} component={NewCardComponents} />
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
