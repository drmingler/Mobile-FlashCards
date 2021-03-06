import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styled, {css} from "styled-components";
import { connect } from "react-redux";
import { handleAddingCardToDeck } from "../actions/Decks";
import { white } from "../utils/colors";

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
            <Text style={{ color: "white", padding: 20 }}> Add new card</Text>
            <InputContainer>
              <View>
                <TextInputField
                  placeholder="Enter A Question  Here"
                  onChangeText={text =>
                    this.setState({ question: text.trim() })
                  }
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
            </InputContainer>
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
  justify-content: center;
  background: #3f3e46;
`;

const InputContainer = styled.View`
  align-items: center;
  background: white;
  padding: 20px;
   ${Platform.select({
  ios: css`
       border-radius : 20px;
    `
})}

`;

const TextInputField = styled.TextInput`
  border-width: 1px;
  border-color: grey;
  padding: 13px;
  border-radius: 5px;
  width: 270px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const AndroidSubmitBtn = styled.TouchableOpacity`
  padding : 13px
  background : grey;
  width : 270px;
  border-radius: 5px;
  margin: 10px;
  background-color: #e86c52;
 
  
`;

const IosAddCardBtn = styled.TouchableOpacity`
  margin: 10px;
  padding: 15px;
  background: grey;
  width: 270px;
  border-radius: 50px;
  background-color: #e86c52;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;
