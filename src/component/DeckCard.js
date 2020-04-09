import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";

class DeckCard extends React.Component {
  render() {
    const numOfCards = 2;
    const title = "Javascript";
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
          <ButtonStyle
            onPress={() =>
                // Redirect to add card page with title of card
              console.log("Add Card")
            }
          >
            <ButtonText>Add Card</ButtonText>
          </ButtonStyle>
          <ButtonStyle
            onPress={() =>
              // Redirect to add card page with title of card
              console.log("Start Quiz")
            }
          >
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


// I will get the title and question length from the DeckList route
export default DeckCard;
