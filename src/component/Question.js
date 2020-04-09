import React from "react";
import { Text, View } from "react-native";



// Questions Component renders the the question
export default function Questions({ question }) {
  return (
    <View>
      <Text style={{fontSize:60, textAlign: "center", padding:10}}>{question}</Text>
    </View>
  );
}
