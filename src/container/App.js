import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import GuestLayout from '../components/Layout/guest-layout';
import Home from '../components/Home/Home';
import Credentials from '../components/Authentication/Credentials/Credentials';
//import firebase from '../utils/firebase';
import Login from '../components/Authentication/Patient_Login/Login';
import Confirmation from '../components/Authentication/Patient_Signup/Confirmation';
import MainForm from '../components/Authentication/Patient_Signup/MainForm';
import Search from '../components/Search/Search';
import Forgot_Password from '../components/Authentication/Forgot_Password/Forgot_Password';
import Signup_Navigator from '../components/Authentication/Signup_Navigator';

class App extends Component{
  /*
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
  */
  render() {
    return(


<Router>
  <GuestLayout>
  <Container textalign='center'>
    <div className="App">
      <Route exact path={ROUTES.LANDING} component={Home} />

      <Route path={ROUTES.HOME} component={Home} />

      <Route path={ROUTES.PATIENT_SIGNUP} component={MainForm} />

      <Route path={ROUTES.SIGNIN} component={Login} />

      <Route path={ROUTES.SIGNUP} component={Signup_Navigator} />

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

    <Route extact={true} path='/forgot_password' render={() => (
      <div className="App">
        <Forgot_Password/>
      </div>
    )}/>

    <Route exact={true} path='/patient' render={() => (
      <div className="App">
        <Login/>
      </div>
    )}/>

<Route exact={true} path='/search' render={() => (
      <div className="App">
        <Search/>
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
