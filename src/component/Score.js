import React from "react";
import { Text, Platform, View, TouchableOpacity } from "react-native";
import { calcPercentageScore, formatCard } from "../utils/helpers";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { resetScore } from "../actions/Score";

class Score extends React.Component {
  toDeck = () => {
    this.props.dispatch(resetScore());
    // Navigate to deck page with
    this.props.navigation.navigate("Deck");
  };

  render() {
    // Get the final score from the store
    const { finalScore, children } = this.props;

    return (
      <Container>
        <View>
          <ScoreContainer>Your Score Is</ScoreContainer>
          <ScoreContainer style={{ marginBottom: 50, marginTop: 50 }}>
            {finalScore}%
          </ScoreContainer>
        </View>
        <OptionsContainer>
          <Options>
            <TouchableOpacity style={{ padding: 10 }} onPress={this.toDeck}>
              <AntDesign name={"back"} size={100} />
              <OptionText>Go to Deck</OptionText>
            </TouchableOpacity>
          </Options>
          <Options>{children}</Options>
        </OptionsContainer>
      </Container>
    );
  }
}

// Calculate the percentage score with the help of the calcPercentageScore helper function

function mapStateToProps({ Score }, { totalCardsInDeck }) {
  const finalScore = calcPercentageScore(totalCardsInDeck, Score);
  return {
    finalScore
  };
}
export default connect(mapStateToProps)(Score);

const Container = styled.View`
  flex: 1;
  padding-top: 20px;
  align-items: center;
`;

const Options = styled.View`
  flex: 1;
  align-items: center;
`;

const OptionText = styled.Text`
  text-align: center;
  font-size: 15px;
`;

const ScoreContainer = styled.Text`
  font-size: 70px;
  text-align: center;
  padding: 30px;
`;

const OptionsContainer = styled.View`
flex:1;
flex-direction : row;
`;