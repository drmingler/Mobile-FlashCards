import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
import { formatKeyAndTitle } from "../utils/helpers";
import { handleInitialData, handleRemoveDeck } from "../actions/Shared";
import { handleAddingCardToDeck, handleAddDeckTitle } from "../actions/Deck";
import { addScore } from "../actions/Score";
import styled from "styled-components";
import {black} from "color-name";

class DeckList extends React.Component {
  componentDidMount() {
    // const card = {
    //   question: 'What is a closure?',
    //   answer: 'The combination of a function and the lexical environment within which that function was declared.'
    // };
    // const title = 'JavaScript';


    this.props.dispatch(handleInitialData());
    // this.props.dispatch(handleAddDeckTitle(title));
    // this.props.dispatch(handleRemoveDeck(title));
    // this.props.dispatch(handleAddingCardToDeck({ title, card }));
    // this.props.dispatch(addScore(3));
  }

  render() {
    const { Deck } = this.props;
    return (
      <View>
        {Object.keys(Deck).map(eachDeck => {
          const {title, questions} = Deck[eachDeck];
          return (
            <View key={eachDeck}>
              <Text style={{fontSize: 16}}>{`${title}`}</Text>
              <Text style={{fontSize: 16}}>{`${questions.length}`}</Text>
            </View>
          );
        })}
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

function mapStateToProps({ Deck }) {
  return {
    Deck
  };
}
export default connect(mapStateToProps)(DeckList);
