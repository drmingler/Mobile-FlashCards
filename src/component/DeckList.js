import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { handleInitialData, handleRemoveDeck } from "../actions/Shared";
import { handleAddingCardToDeck, handleAddDeckTitle } from "../actions/Deck";
import { addScore } from "../actions/Score";

class DeckList extends React.Component {
  componentDidMount() {
    const card = {
      question: "What is React?",
      answer: "library for managing user interfaces"
    };
    const title = "emma";
    // this.props.dispatch(handleInitialData());
    // this.props.dispatch(handleAddDeckTitle(title));
    // this.props.dispatch(handleRemoveDeck("emma"));
    // this.props.dispatch(handleAddingCardToDeck({ title, card }));
    // this.props.dispatch(addScore(3));
  }

  render() {

    // this.props.dispatch(handleAddingCardToDeck({ title, card }));

    return (
      <View>
        <Text>I am here</Text>
      </View>
    );
  }
}

export default connect()(DeckList);
