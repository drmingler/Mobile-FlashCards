import React from "react";
import { Text, FlatList } from "react-native";
import { connect } from "react-redux";
import DeckListItem from "./DeckListItems";
import styled from "styled-components";
import { handleInitialData, handleRemoveDeck } from "../actions/Shared";
import DeckCard from "../component/Deckcard";
import { handleAddingCardToDeck, handleAddDeckTitle } from "../actions/Deck";
import { addScore } from "../actions/Score";


class DeckList extends React.Component {
  componentDidMount() {
    // const card = {
    //   question: 'What is a Php?',
    //   answer: 'A programming language'
    // };
    // const title = 'ruby';
    // //
    this.props.dispatch(handleInitialData());
    // this.props.dispatch(handleAddDeckTitle(title));
    // this.props.dispatch(handleRemoveDeck(title));
    // this.props.dispatch(handleAddingCardToDeck({ title, card }));
    // // this.props.dispatch(addScore(3));
  }

  render() {
    // const { Deck } = this.props;
    const Deck = {};
    if (Object.keys(Deck).length === 0) {
      return (
        <Center>
          <Text style={{ fontSize: 20 }}>
            You are yet to log any data for today
          </Text>
        </Center>
      );
    }
    return (
      <Container>
        <FlatList
          data={Object.values(Deck)}
          renderItem={({ item }) => (
            <DeckListItem title={item.title} questions={item.questions} />
          )}
          keyExtractor={item => item.title}
          extraData={Deck}
        />
      </Container>
    );
  }
}

function mapStateToProps({ Deck }) {
  return {
    Deck
  };
}
export default connect(mapStateToProps)(DeckList);

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 50px 0;
  background: white;
`;

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;
