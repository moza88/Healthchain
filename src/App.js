import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import GuestLayout from './components/guest-layout';
import Home from './components/Home';
import Signin from './components/Signin';
import Credentials from './Signup/Credentials';
import firebase from '././firebase';
import Login from './Signup/Login';
import Confirmation from './Signup/Confirmation';
import MainForm from './Signup/MainForm';
import CoinbaseLogin from './Signup/CoinbaseLogin';


class App extends Component{
  state = {
    authenticated: false,
  };
  componentDidMount() {
    console.log(this.state.authenticated);
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
          }))
        : this.setState(() => ({
            authenticated: false,
          }));
      console.log(this.state.authenticated);
    });
  }
  
  render() {
    return(


<Router>
  <GuestLayout>
  <Container textalign='center'>
    <div>
      <Route exact={true} path='/' render={() => (
        <div className="App">
          <Home />
        </div>
      )}/>

      <Route exact={true} path='/home' render={() => (
        <div className="App">
          <Home />
        </div>
      )}/>

    <Route exact={true} path='/signup' render={() => (
      <div className="App">
        <MainForm/>
      </div>
    )}/>

    <Route path="/credentials" component={Credentials} />
 

    <Route exact={true} path='/confirmation' render={() => (
      <div className="App">
        <Confirmation/>
      </div>
    )}/>

    <Route exact={true} path='/login' render={() => (
      <div className="App">
        <Login/>
      </div>
    )}/>

  </div>

  </Container>
  </GuestLayout>
</Router>

    )
  }
}

export default App;
