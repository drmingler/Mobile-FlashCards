import React from "react";
import { View, Text } from "react-native";

// Answer Component renders the the answer
export default function Answers({ answer }) {
  return (
    <View>
      <Text style={{fontSize:40, textAlign: "center", padding : 10}}>{answer}</Text>
    </View>
  );
}
