import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";



// Questions Component renders the the question
export default function Questions({ question }) {
  return (
    <View>
      <QuestionText>{question}</QuestionText>
    </View>
  );
}

const QuestionText = styled.Text`
font-size : 60px;
text-align : center;
padding: 10px;
color : #eeedf2;
`;