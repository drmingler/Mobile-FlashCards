import React from "react";
import styled from "styled-components";
import { Platform } from "react-native";
import DeckCard from "./Deckcard";

export default function DeckListItem({ title, questions }) {
  const ItemIos = styled.TouchableOpacity`
    margin-top: 17px;
    background: red;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 8px;
    padding: 50px;
  `;

    const ItemAndroid = styled.TouchableOpacity`
    margin-top: 17px;
    background: gray;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 2px;
    padding: 50px;
  `;
  const Item = Platform.OS === "ios" ? ItemIos : ItemAndroid;
  return (
    <Item
      key={title}
      onPress={() => {
        console.log(title);
      }}
    >
      <DeckCard title={title} cards={questions.length} />
    </Item>
  );
}
