import React from "react";
import styled from "styled-components";
import { Platform, StyleSheet, Text, View } from "react-native";

/* The DeckListItem is a functional component it  displays
the decks name and the number of cards it has */
export default function DeckListItem({ title, questions }) {
  const numberOfCards = questions.length;
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
  const CardInfo = styled.Text`
    font-size: 40px;
    text-align: center;
  `;

  const Item = Platform.OS === "ios" ? ItemIos : ItemAndroid;

  return (
    <Item
      key={title}
      // I will redirect to the add deckcard page with the title and question length
      onPress={() => {
        console.log(title);
      }}
    >
      <View>
        <CardInfo>{title}</CardInfo>
        {numberOfCards === 1 ? (
          <CardInfo>{numberOfCards} card</CardInfo>
        ) : (
          <CardInfo>{numberOfCards} cards</CardInfo>
        )}
      </View>
    </Item>
  );
}


