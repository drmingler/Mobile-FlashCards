import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { gray, purple } from "../utils/colors";

export default function Message() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MaterialCommunityIcons
        name={"cards-variant"}
        size={250}
        style={{ color: purple }}
      />

      <Text style={{ fontSize: 25, padding: 30, textAlign: "center" }}>
        You Do Not Have Any Card In The Deck Please Add A Card
      </Text>
    </View>
  );
}
