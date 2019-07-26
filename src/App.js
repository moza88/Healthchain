import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm';
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import GuestLayout from './components/guest-layout';
import Home from './components/Home';
import Confirmation from './components/Confirmation';
import Signin from './components/Signin';

class App extends Component{
  
  
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

    <Route exact={true} path='/register' render={() => (
      <div className="App">
        <MainForm/>
      </div>
    )}/>

    <Route exact={true} path='/confirmation' render={() => (
      <div className="App">
        <Confirmation/>
      </div>
    )}/>

  <Route exact={true} path='/signin' render={() => (
      <div className="App">
        <Signin/>
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
