import React from "react";
import { Text, Platform, View, TouchableOpacity } from "react-native";
import { calcPercentageScore, formatCard } from "../utils/helpers";
import styled from "styled-components";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { resetScore } from "../actions/Score";

class Score extends React.Component {
  restart = () => {
    this.props.dispatch(resetScore());
    // Navigate to quiz page with the title
    // this.props.navigation.navigate("Quiz", {title:"Python"})
  };
  toDeck = () => {
    this.props.dispatch(resetScore());
    // Navigate to deck page with
    this.props.navigation.navigate("Deck")
  };

  render() {
    // Get the final score from the store
    const { finalScore } = this.props;

    return (
      <Container>
        <View>
          <ScoreContainer>Your Score Is</ScoreContainer>
          <ScoreContainer style={{ marginBottom: 50, marginTop: 50 }}>
            {finalScore}%
          </ScoreContainer>
        </View>
        <Options>
          <TouchableOpacity style={{ padding: 20 }} onPress={this.restart}>
            <MaterialCommunityIcons name={"restart"} size={100} />
            <OptionText>Restart</OptionText>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 20 }} onPress={this.toDeck}>
            <AntDesign name={"back"} size={100} />
            <OptionText>Go to Deck</OptionText>
          </TouchableOpacity>
        </Options>
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
  flex-direction: row;
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
