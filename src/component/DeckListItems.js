import React from "react";
import styled from "styled-components";
import { Platform, StyleSheet, Text, View } from "react-native";

/* The DeckListItem  displays the  name of each
deck name and the number of cards it has */
class DeckListItem extends React.Component {
  render() {
    const { title, questions } = this.props;
    const numberOfCards = questions.length;
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
}

export default DeckListItem;

const ItemIos = styled.TouchableOpacity`
  margin-top: 17px;
  background: grey;
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
