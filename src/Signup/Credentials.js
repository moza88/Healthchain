import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Container, Flex, Box, Input, Subhead, Text } from 'rebass';
import firebase from './firebase';
import { Form, Button } from 'semantic-ui-react';

class Register extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <Form color='blue' >
        <h1 className="ui centered">Tell Us About Yourself</h1>
        <Form.Field>
        {error ? (
            <Flex>
              <Box>
                <Text>{error.message}</Text>
              </Box>
            </Flex>
          ) : null}
          </Form.Field>
          <Flex>
            <Box>
              <form onSubmit={this.handleSubmit}>
                <Form.Field>
                <Input 
                  type="text" 
                  name="email" 
                  laceholder="Email" 
                  value={email} 
                  onChange={this.handleInputChange} />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleInputChange}
                />
                </Form.Field>
                <Button children="Register" />
              </form>
            </Box>
          </Flex>
        </Form>
    );
  }
}

export default withRouter(Register);