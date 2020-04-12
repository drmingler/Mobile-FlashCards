import React from "react";
import styled from "styled-components";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/* The DeckListItem  displays the  name of each deck
and the number of cards it has. it receives the
navigation object as a prop to enable redirection from
this component to another component*/

class DeckListItem extends React.Component {
  handleClick = title => {
    const { navigation } = this.props;
    // Redirect to the card screen along with the title or id of the selected card
    navigation.navigate("Deck", { title: title });
  };

  render() {
    const { title, questions } = this.props;
    const numberOfCards = questions.length;
    return (
      <TouchableOpacity
        key={title}
        style={styles.item}
        onPress={() => {
          this.handleClick(title);
        }}
      >
        <View>
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name={"cards-playing-outline"}
              size={100}
              style={{ color: "#e86c52" }}
            />
          </View>
          <CardInfo>{title}</CardInfo>
          {numberOfCards === 1 ? (
            <CardInfo>{numberOfCards} card</CardInfo>
          ) : (
            <CardInfo>{numberOfCards} cards</CardInfo>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default DeckListItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#020049",
    padding: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: Platform.OS === "ios" ? 16 : 2,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
});
const CardInfo = styled.Text`
  font-size: 40px;
  text-align: center;
  color: #eeedf2;
`;

