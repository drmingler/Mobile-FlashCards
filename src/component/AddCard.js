import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleAddingCardToDeck } from "../actions/Decks";

// I will take the title of the decks from the newdeck route route
class AddCard extends React.Component {
  state = {
    question: "",
    answer: ""
  };

  /* onSubmit dispatch an action to add card to decks and redirect */
  handleSubmit = () => {
    // Get the newly created question and answer from the state
    const { question, answer } = this.state;

    // Create a card object
    const card = { answer, question };

    // Get the following variables from the props
    const { navigation, route, dispatch } = this.props;

    // Get the title of the deck from the route
    const { title } = route.params;

    // Dispatch an action to add the card to the deck
    dispatch(handleAddingCardToDeck({ title, card }));

    // Route back to the Decks Screen
    navigation.navigate("Decks");
  };
  render() {
    const SubmitButton =
      Platform.OS === "ios" ? IosAddCardBtn : AndroidSubmitBtn;
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Text> Add new card</Text>
            <View>
              <TextInputField
                placeholder="Enter A Question  Here"
                onChangeText={text => this.setState({ question: text.trim() })}
                maxLength={200}
                multiline={true}
              />
              <TextInputField
                placeholder="Enter An Answer  Here"
                onChangeText={text => this.setState({ answer: text.trim() })}
                maxLength={200}
                multiline={true}
              />
            </View>
            <SubmitButton
              onPress={text =>
                question && answer ? this.handleSubmit(text) : null
              }
            >
              <ButtonText>Submit</ButtonText>
            </SubmitButton>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddCard);

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
`;

const TextInputField = styled.TextInput`
  border-width: 1px;
  border-color: grey;
  padding: 13px;
  border-radius: 5px;
  width: 270px;
  margin-top: 20px;
`;

const AndroidSubmitBtn = styled.TouchableOpacity`
  padding : 15px
  background : grey;
  width : 70%;
  border-radius: 5px;
  margin: 10px;
 
  
`;

const IosAddCardBtn = styled.TouchableOpacity`
  margin: 10px;
  padding: 15px;
  background: grey;
  width: 70%;
  border-radius: 50px;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;
