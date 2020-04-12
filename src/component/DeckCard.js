import React from "react";
import { Platform, TouchableOpacity, Alert, Animated } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleRemoveDeck } from "../actions/Shared";
import {
  clearLocalNotifications,
  setLocalNotification
} from "../utils/helpers";

class DeckCard extends React.Component {
  // The state that stores animations values
  state = {
    spring: new Animated.Value(0)
  };

  componentDidMount() {
    const { spring } = this.state;
    Animated.timing(spring, { toValue: 1, speed: 8 }).start();
  }

  // Route to add card screen with title of card
  handleAddCard = () => {
    const { title, navigation } = this.props;
    navigation.navigate("AddCard", { title: title });
  };

  // Route to Quiz screen with the title of card
  handleStartQuiz = () => {
    // Set the local notification
    clearLocalNotifications().then(setLocalNotification);

    const { title, navigation } = this.props;
    navigation.navigate("Quiz", { title: title });
  };

  // Route to Decks screen when a Deck is deleted
  handleDelete = () => {
    const { title, navigation, dispatch } = this.props;
    Alert.alert("Delete Deck", "Are You Sure You Want To Delete The Deck?", [
      {
        text: "Yes",
        onPress: () => {
          dispatch(handleRemoveDeck(title));
          navigation.navigate("Decks");
        }
      },
      {
        text: "No",
        style: "cancel"
      }
    ]);
  };

  render() {
    const { title, numOfCards } = this.props;
    const { spring } = this.state;

    const ButtonStyle =
      Platform.OS === "ios" ? IosAddCardBtn : AndroidAddCardBtn;
    return (
      <Container>
        <DeckInfoContainer>
          <DeckTitle
            as={Animated.Text}
            style={{ transform: [{ scale: spring }] }}
          >
            {title}
          </DeckTitle>
          {numOfCards === 1 ? (
            <CardNumber
              as={Animated.Text}
              style={{ transform: [{ scale: spring }] }}
            >
              {numOfCards} card
            </CardNumber>
          ) : (
            <CardNumber
              as={Animated.Text}
              style={{ transform: [{ scale: spring }] }}
            >
              {numOfCards} cards
            </CardNumber>
          )}
        </DeckInfoContainer>
        <CardButtonsContainer>
          <ButtonStyle onPress={this.handleAddCard}>
            <ButtonText>Add Card</ButtonText>
          </ButtonStyle>
          <ButtonStyle onPress={this.handleStartQuiz}>
            <ButtonText>Start Quiz</ButtonText>
          </ButtonStyle>
          <TouchableOpacity onPress={this.handleDelete}>
            <DeleteButton>Delete Deck</DeleteButton>
          </TouchableOpacity>
        </CardButtonsContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const DeckInfoContainer = styled.View`
  flex : 1.5
  align-items : center;
  justify-content : center;
`;
const DeckTitle = styled.Text`
  font-size: 50px;
  padding: 20px;
`;
const CardNumber = styled.Text`
  font-size: 50px;
  padding: 20px;
  color: gray;
`;

const CardButtonsContainer = styled.View`
  flex : 1
  align-items : center;
  background-color: white;
  padding-top: 30px;
`;

const IosAddCardBtn = styled.TouchableOpacity`
  margin: 10px;
  padding: 15px;
  background: grey;
  width: 70%;
  border-radius: 50px;
`;
const AndroidAddCardBtn = styled.TouchableOpacity`
  margin: 10px;
  padding: 15px;
  width: 70%;
  background: grey;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;

const DeleteButton = styled.Text`
  padding: 30px;
  font-size: 20px;
  text-align: center;
  color: red;
`;

function mapStateToProps({ Decks }, { route, navigation }) {
  const { title } = route.params;
  const card = Decks[title];
  return {
    title,
    navigation,
    card,
    numOfCards: card ? card.questions.length : 0
  };
}

// I will get the title and question length from the DeckList route
export default connect(mapStateToProps)(DeckCard);
