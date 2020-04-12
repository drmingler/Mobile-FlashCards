import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";

export default function Message() {
  return (
    <Container>
      <MaterialCommunityIcons
        name={"cards-variant"}
        size={150}
        style={{ color: "#e86c52" }}
      />

      <MessageText>
        You Do Not Have Any Card In The Deck Please Add A Card
      </MessageText>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #3f3e46;
  justify-content: center;
`;

const MessageText = styled.Text`
  text-align: center;
  font-size: 20px;
  padding: 25px;
  color: #eeedf2;
`;
