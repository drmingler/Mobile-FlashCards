import React from "react";
import { Animated, View, TouchableOpacity } from "react-native";
import { calcPercentageScore, formatCard } from "../utils/helpers";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { resetScore } from "../actions/Score";

class Score extends React.Component {
  state = {
    fadeIn: new Animated.Value(0)
  };

  componentDidMount() {
    const { fadeIn } = this.state;
    Animated.timing(fadeIn, { toValue: 2, duration: 2000, delay: 8 }).start();
  }

  toDeck = () => {
    this.props.dispatch(resetScore());
    // Navigate to deck page with
    this.props.navigation.navigate("Deck");
  };

  render() {
    // Get the animations from the state
    const { fadeIn } = this.state;
    // Get the final score from the store
    const { finalScore, children } = this.props;

    return (
      <Container>
        <View>
          <ScoreContainer as={Animated.Text} style={{ opacity: fadeIn }}>
            Your Score Is
          </ScoreContainer>
          <ScoreContainer
            as={Animated.Text}
            style={{ marginBottom: 50, marginTop: 50, opacity: fadeIn }}
          >
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
  flex: 1;
  flex-direction: row;
`;
