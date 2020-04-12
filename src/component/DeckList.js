import React from "react";
import { Text, FlatList, Platform } from "react-native";
import { connect } from "react-redux";
import DeckListItem from "./DeckListItems";
import styled from "styled-components";
import { handleInitialData } from "../actions/Shared";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { purple } from "../utils/colors";

// I will add should component update for optimization
/* DeckList lists all the available  decks in the store */
class DeckList extends React.Component {
  componentDidMount() {
    // Get the decks from the database
    const { getInitialData } = this.props;
    getInitialData();
  }

  render() {
    const { Decks, navigation } = this.props;

    if (Object.keys(Decks).length === 0) {
      return (
        <Center>
          {Platform.OS === "ios" ? (
            <Ionicons
              name={"ios-albums"}
              size={200}
              style={{ color: "#e86c52"}}
            />
          ) : (
            <MaterialCommunityIcons
              name={"cards-playing-outline"}
              size={200}
              style={{ color: "#e86c52" }}
            />
          )}
          <Text style={{ fontSize: 20 , color: "#eeedf2"}}>You are yet to add any deck</Text>
        </Center>
      );
    }
    return (
      <Container>
        <FlatList
          data={Object.values(Decks)}
          renderItem={({ item }) => (
            <DeckListItem
              title={item.title}
              questions={item.questions}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.title}
          extraData={Decks}
        />
      </Container>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // Dispatch an action that gets all the decks from the  database
    getInitialData: () => dispatch(handleInitialData())
  };
}

function mapStateToProps({ Decks }) {
  return {
    Decks
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckList);

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e8e7ec; 
`;

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #3f3e46;
`;

