import React, { Component } from "react";
import Welcome from "../../components/Welcome";
import FormInput from "../../components/FormInput";
import { Container, FormContainer, Button, Text, Text2  } from "./styles";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      pronoun: "",
      hometown: "",
      favFoods: "",
      birthday: "",
      isSubmitted: false
    };
  }

  updateName = event => {
    this.setState({ name: event.target.value });
  };

  updateGender = event => {
    this.setState({ gender: event.target.value });
  };

  updatePronoun = event => {
    this.setState({ pronoun: event.target.value });
  };

  updateTown = event => {
    this.setState({ hometown: event.target.value });
  };

  updateFood = event => {
    this.setState({ favFoods: event.target.value });
  };

  updateBday = event => {
    this.setState({ birthday: event.target.value });
  };
  
  render() {
    // Currently, this only renders the welcome component. Create a form, and various form components and place them here
    return (
      <Container>
        <Welcome />
        <FormContainer>
          <FormInput label="name" update={this.updateName} />
          <FormInput label="gender" update={this.updateGender} />
          <FormInput label="pronoun" update={this.updatePronoun} />
          <FormInput label="hometown" update={this.updateTown} />
          <FormInput
            label="3 of your favorite foods"
            update={this.updateFood}
          />
          <FormInput label="your birthday" update={this.updateBday} />
        </FormContainer>
        <Button onClick={() => this.setState({ isSubmitted: true })}>
          SUBMIT
        </Button>
        <Text2>Text Box</Text2>
        <Text>
          {this.state.isSubmitted && (
            <div>{`User's name is ${this.state.name}, and ${this.state.pronoun} is from ${this.state.hometown}. ${this.state.pronoun} was born on ${this.state.birthday}, and ${this.state.pronoun} likes to eat ${this.state.favFoods}.`}</div>
          )}
        </Text>
      </Container>
    );
  }
}

export default Form;
