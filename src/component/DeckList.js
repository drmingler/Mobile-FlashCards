import React from "react";
import { Text, FlatList, Platform } from "react-native";
import { connect } from "react-redux";
import DeckListItem from "./DeckListItems";
import styled from "styled-components";
import { handleInitialData, handleRemoveDeck } from "../actions/Shared";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { handleAddingCardToDeck, handleAddDeckTitle } from "../actions/Decks";
import { purple } from "../utils/colors";

// I will add should component update for optimization
/* DeckList lists all the available  decks in the store */
class DeckList extends React.Component {
  componentDidMount() {
    const card = {
      question: 'What is a ruby?',
      answer: 'A programming language'
    };
    const title = 'ruby';
    //
    this.props.dispatch(handleInitialData());
    // this.props.dispatch(handleAddDeckTitle(title));
    // this.props.dispatch(handleRemoveDeck(title));
    this.props.dispatch(handleAddingCardToDeck({ title, card }));
    // // this.props.dispatch(addScore(3));
  }

  render() {
    const { Decks } = this.props;
    if (Object.keys(Decks).length === 0) {
      return (
        <Center>
          {Platform.OS === "ios" ? (
            <Ionicons
              name={"ios-albums"}
              size={200}
              style={{ color: purple }}
            />
          ) : (
            <MaterialCommunityIcons
              name={"cards-playing-outline"}
              size={200}
              style={{ color: purple }}
            />
          )}
          <Text style={{ fontSize: 20 }}>You are yet to add any deck</Text>
        </Center>
      );
    }
    return (
      <Container>
        <FlatList
          data={Object.values(Decks)}
          renderItem={({ item }) => (
            <DeckListItem title={item.title} questions={item.questions} />
          )}
          keyExtractor={item => item.title}
          extraData={Decks}
        />
      </Container>
    );
  }
}

function mapStateToProps({ Decks }) {
  return {
    Decks
  };
}
export default connect(mapStateToProps)(DeckList);

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;
