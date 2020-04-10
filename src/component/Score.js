import React from "react";
import { Text, Platform, View, TouchableOpacity } from "react-native";
import { percentageScore } from "../utils/helpers";
import styled from "styled-components";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { resetScore } from "../actions/Score";

// I Need the score and the number of answered questions
// I  Total number of cards in deck
// Id of the card
class Score extends React.Component {
  restart = () => {
    this.props.dispatch(resetScore());
    // Navigate to quiz page with the title
  };
  toDeck = () => {
    this.props.dispatch(resetScore());
    // Navigate to deck page with the title
  };
  render() {
    // Get te percentage score from the store
    const score = percentageScore(4, 1);
    return (

      <Container>
        <View>
          <ScoreContainer>Your Score Was</ScoreContainer>
          <ScoreContainer style={{ marginBottom: 50, marginTop: 50 }}>
            {score}%
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

export default connect()(Score);

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
