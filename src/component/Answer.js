import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
// Answer Component renders the the answer
export default function Answers({ answer }) {
  return (
    <View>
      <AnswerText>{answer}</AnswerText>
    </View>
  );
}

const AnswerText = styled.Text`
font-size : 60px;
text-align : center;
padding: 10px;
color : #eeedf2;
`;