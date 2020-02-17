import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Container, Flex, Box, Input, Subhead, Text } from 'rebass';
import { Form, Button } from 'semantic-ui-react';
import * as ROUTES from '../../../constants/routes';
import { withFirebase } from '../../Firebase';
import { compose } from 'recompose';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  passwordConfirm: ''
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { email, password, passwordConfirm } = this.state;

    if(password === passwordConfirm) {
      this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordConfirm)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            email,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
            //window.location = "https://www.coinbase.com/oauth/authorize?client_id=2bb4766d6c2e67beeda3f1bf4ec4dab21623d89477d11cf5cd6a357abda0511b&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=wallet%3Auser%3Aread";

          })
          .catch(error => {
            this.setState({ error: error });
          });
      })
      .catch(error => {
        this.setState({ error: error });
      });
    }else{
      alert('Password does not match');
    }
  };

  /*
  handleSubmit = (event) => {
    event.preventDefault();
    const { password, passwordConfirm} = this.state;
    const {values: { email}} = this.props;


    var email_address= email;
    console.log(email_address);
    if(password === passwordConfirm){

      firebase
      .auth()
      .createUserWithEmailAndPassword(email_address , password)
      .then((user) => {
        //this.props.history.push('/');
        window.location = "https://www.coinbase.com/oauth/authorize?client_id=2bb4766d6c2e67beeda3f1bf4ec4dab21623d89477d11cf5cd6a357abda0511b&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=wallet%3Auser%3Aread";
      })
      .catch((error) => {
        this.setState({ error: error });
      });
    } else{
      alert('Password does not match');
    }
  };
*/
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {password, error } = this.state;
    const {values: { email, firstName}} = this.props;

    return (
      <Form color='blue' onSubmit={this.onSubmit}>
        <h1 className="ui centered">Set Your Password {firstName} </h1>
        <h3 id="txtEmail">Username: {email}</h3>
        <Form.Field>
        {error ? (
            <Flex>
              <Box>
                <Text>{error.message}</Text>
              </Box>
            </Flex>
          ) : null}
          </Form.Field>
                <Form.Field>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Password"
                  onChange={this.handleInputChange}

                />
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button children="Register"/>
        </Form>
    );
  }
}


const Register = compose(
  withRouter,
  withFirebase,
)(SignUpForm);

export default Register;