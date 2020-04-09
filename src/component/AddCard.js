import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleAddingCardToDeck } from "../actions/Deck";


// I will take the title of the deck from the newdeck route route
class AddCard extends React.Component {
  state = {
    question: "",
    answer: ""
  };


  // I will take the title of the deck from the newdeck route route
  // onSubmit dispatch an action to add card to deck and redirect
  handleSubmit = () => {
    const { question, answer } = this.state;
    const title = "JavaScript";
    const card = { answer, question };
    this.props.dispatch(handleAddingCardToDeck({ title, card }));
    console.log("I will redirect back to card deck page");
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

export default connect()(AddCard);
