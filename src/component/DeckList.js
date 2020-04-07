import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/Shared";
import { handleAddingCardToDeck, handleAddDeckTitle } from "../actions/Deck";
import { resetScore } from "../actions/Score";

class DeckList extends React.Component {
  componentDidMount() {
    const card = {
      question: "What is React?",
      answer: "library for managing user interfaces"
    };
    const title = "emma";
    this.props.dispatch(handleInitialData());
    // this.props.dispatch(handleAddDeckTitle(title));
    // this.props.dispatch(handleAddingCardToDeck({ title, card }));
  }

  render() {
    //getDecks().then(data => console.log(data));
    //console.log(getDeck("React").then((deck)=>console.log(deck)))
    return (
      <View>
        <Text>I am here</Text>
      </View>
    );
  }
}

export default connect()(DeckList);
