import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styled from "styled-components";
import Answer from "../component/Answer";
import Question from "../component/Question";
import {formatCard} from "../utils/helpers";
import { connect } from "react-redux";
import { addScore, resetScore } from "../actions/Score";
import Message from "./Message";
import Score from "./Score";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Quiz extends React.Component {
  /* Store the number of the card that is currently being displayed
   * and also the side of the card that is being displayed*/
  state = {
    showAnswer: true,
    cardNumber: 1,
    currentindex: 0
  };

  componentDidMount() {
    this.props.dispatch(resetScore());
  }

  handleToggle = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer
    }));
  };
  handleClick = from => {

    // If the correct button is clicked then dispatch the add score action
    from.correct && this.props.dispatch(addScore(1));

    // Increase the index on count state
    this.setState(prevState => ({
      currentindex: prevState.currentindex + 1,
      cardNumber: prevState.cardNumber + 1
    }));
  };

  restart = () => {
    this.props.dispatch(resetScore());
    // Reset the state
    this.setState({
      currentindex: 0,
      cardNumber: 1
    });
  };

  render() {
    // Get the following variables from the component state
    const { currentindex, showAnswer, cardNumber } = this.state;

    // Get the following variables from the  store
    const { formattedCard, navigation } = this.props;

    // If there is no card in the deck render the message component
    if (!formattedCard || formattedCard.totalCardsInDeck === 0) {
      return <Message />;
    }

    const { card, totalCardsInDeck } = formattedCard;

    // Check If all the questions in a card has been answered
    if (card[currentindex] === undefined) {
      // Render the score component passing it navigation and total cards in deck as props;
      return (
        <Score totalCardsInDeck={totalCardsInDeck} navigation={navigation}>
          <TouchableOpacity style={{ padding: 10 }} onPress={this.restart}>
            <MaterialCommunityIcons name={"restart"} size={100} />
            <OptionText>Restart</OptionText>
          </TouchableOpacity>
        </Score>
      );
    }

    /* Get the question and answer from the card using the
    current index in the state to index the card object*/
    const { question, answer } = card[currentindex];
    const SubmitButton =
      Platform.OS === "ios" ? IosAddCardBtn : AndroidSubmitBtn;

    return (
      <Container>
        <Text style={{ fontSize: 20 }}>
          {cardNumber} / {totalCardsInDeck}
        </Text>
        <Card>
          {showAnswer ? (
            <View>
              <Question question={question} />
              <TouchableOpacity onPress={this.handleToggle}>
                <Toggle>Show Answer</Toggle>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Answer answer={answer} />
              <TouchableOpacity onPress={this.handleToggle}>
                <Toggle>Show Question</Toggle>
              </TouchableOpacity>
            </View>
          )}
        </Card>

        <SubmitButton onPress={() => this.handleClick({ correct: "correct" })}>
          <ButtonText>Correct</ButtonText>
        </SubmitButton>

        <SubmitButton onPress={this.handleClick}>
          <ButtonText>Incorrect</ButtonText>
        </SubmitButton>
      </Container>
    );
  }
}
// I will get title from the newDeck Card route
function mapStateToProps({ Decks, score }, { route }) {
  const { title } = route.params;
  console.log( Decks )
  return {
    formattedCard: Decks[title] ? formatCard(Decks, title) : null
  };
}
export default connect(mapStateToProps)(Quiz);

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20px;
  justify-content: space-around;
`;

const Card = styled.View`
  margin-bottom: 100px;
`;

const Toggle = styled.Text`
  text-align: center;
  font-size: 20px;
  padding-top: 20px;
`;

const AndroidSubmitBtn = styled.TouchableOpacity`
  padding : 15px
  background : grey;
  width : 70%;
  border-radius: 5px;
`;

const IosAddCardBtn = styled.TouchableOpacity`
  padding: 15px;
  background: grey;
  width: 70%;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;

const OptionText = styled.Text`
  text-align: center;
  font-size: 15px;
`;
