import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import styled, { css } from "styled-components";
import { purple, red } from "../utils/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/Shared";

class NewDeck extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  state = {
    formInput: "",
    titleAlreadyExist: false
  };
  handleChange = text => {
    this.setState({ formInput: text.trim() });
  };

  /* Check if the title entered by the user already exists
   *  and submit the form only if it has an input */
  handleSubmit = () => {
    const { Deck } = this.props;
    const { formInput } = this.state;
    const titlesInDeck = Object.keys(Deck);

    if (titlesInDeck.includes(formInput)) {
      return this.setState({ titleAlreadyExist: true });
    }
    // I will redirect to page Decklist page
    console.log("I will redirect to page Decklist page");
  };

  render() {
    const { formInput, titleAlreadyExist } = this.state;
    const SubmitButton =
      Platform.OS === "ios" ? IosAddCardBtn : AndroidSubmitBtn;
    return (
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Title> What is the title of your deck?</Title>
            {Platform.OS === "ios" ? (
              <Ionicons
                name={"ios-albums"}
                size={120}
                style={{ color: purple }}
              />
            ) : (
              <MaterialCommunityIcons
                name={"cards-playing-outline"}
                size={120}
                style={{ color: purple }}
              />
            )}

            <TextInputField
              placeholder="Enter A Deck Title Here"
              onChangeText={this.handleChange}
              maxLength={12}
              style={formInput ? { borderColor: purple } : null}
            />
            {titleAlreadyExist === true ? (
              <Error> This title already exist try another title </Error>
            ) : null}

            <SubmitButton
              onPress={text => (formInput ? this.handleSubmit(text) : null)}
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
  ${Platform.select({
    ios: css`
      justify-content: space-around;
    `,
    android: css`
      justify-content: space-between;
    `
  })}
`;

const Title = styled.Text`
  font-size: 50px;
  text-align: center;
  padding: 10px;
`;

const AndroidSubmitBtn = styled.TouchableOpacity`
  padding : 15px
  background : grey;
  width : 70%;
  border-radius: 5px;
  margin: 10px;
  margin-top : 30px;
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

const TextInputField = styled.TextInput`
  border-width: 1px;
  border-color: grey;
  padding: 13px;
  border-radius: 5px;
  width: 270px;
`;
const Error = styled.Text`
  color: red;
  text-align: left;
  padding-right: 5px;
  margin-top: -20px;
`;
function mapStateToProps({ Deck }) {
  return {
    Deck
  };
}
export default connect(mapStateToProps)(NewDeck);