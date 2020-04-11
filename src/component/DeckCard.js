import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
class DeckCard extends React.Component {

  // Route to add card screen with title of card
  handleAddCard = () => {
    const { title, navigation } = this.props;
    navigation.navigate("AddCard", { title: title });
  };

  // Route to Quiz screen with the title of card
  handleStartQuiz = () => {
    const { title, navigation } = this.props;
    navigation.navigate("Quiz", { title: title });
  };

  render() {
    const { title, numOfCards } = this.props;

    const ButtonStyle =
      Platform.OS === "ios" ? IosAddCardBtn : AndroidAddCardBtn;
    return (
      <Container>
        <DeckInfoContainer>
          <DeckTitle>{title}</DeckTitle>
          {numOfCards === 1 ? (
            <CardNumber>{numOfCards} card</CardNumber>
          ) : (
            <CardNumber>{numOfCards} cards</CardNumber>
          )}
        </DeckInfoContainer>
        <CardButtonsContainer>
          <ButtonStyle onPress={this.handleAddCard}>
            <ButtonText>Add Card</ButtonText>
          </ButtonStyle>
          <ButtonStyle onPress={this.handleStartQuiz}>
            <ButtonText>Start Quiz</ButtonText>
          </ButtonStyle>
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
  flex : 3
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

function mapStateToProps({ Decks }, { route, navigation }) {
  const { title } = route.params;
  const card = Decks[title];
  return {
    title,
    navigation,
    card,
    numOfCards: card.questions.length

  };
}

// I will get the title and question length from the DeckList route
export default connect(mapStateToProps)(DeckCard);
