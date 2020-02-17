import React,  { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';

const configx = {
    client_id: '2bb4766d6c2e67beeda3f1bf4ec4dab21623d89477d11cf5cd6a357abda0511b',
    redirect_uri: 'http://localhost:3000',
    scopes: ['wallet:transactions:send'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://www.coinbase.com/oauth/authorize',
        tokenEndpoint: 'https://api.coinbase.com/oauth/token',
        revocationEndpoint: 'https://api.coinbase.com/oauth/revoke'
    }
  }
  
  let tokenData;
  
  var config = {
    headers: {'Access-Control-Allow-Origin' : '*'}
  };

  var coinbaseLoginPage = 'https://www.coinbase.com/oauth/authorize?client_id=2bb4766d6c2e67beeda3f1bf4ec4dab21623d89477d11cf5cd6a357abda0511b&redirect_uri=http%3A%2F%2Flocalhost%3A3002%2Fsignup&response_type=code&scope=wallet%3Auser%3Aread';

class CoinbaseLogin extends Component {
/*
    componentDidMount() {
        if (typeof window !== 'undefined') {
             window.location.href = coinbaseLoginPage;
        }
        console.log("Clicked");
   }

    coinbase = (e) => {
        console.log(config);
        try {
            
            axios.get('https://www.coinbase.com/oauth/authorize', {
                params: {
                    client_id: '2bb4766d6c2e67beeda3f1bf4ec4dab21623d89477d11cf5cd6a357abda0511b',
                    redirect_uri: 'http://localhost:3000',
                    response_type: 'code',
                    scope: 'wallet:transactions:send'
                }, headers
              })
              axios.post('https://www.coinbase.com/oauth/authorize?client_id=2bb4766d6c2e67beeda3f1bf4ec4dab21623d89477d11cf5cd6a357abda0511b&redirect_uri=http%3A%2F%2Flocalhost%3A3002%2Fsignup&response_type=code&scope=wallet%3Auser%3Aread')
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
              .then(function () {
                // always executed
              });  
            //tokenData = ( axios.get('https://www.coinbase.com/oauth/authorize?response_type=code&scope=wallet%3Auser%3Aread', config)).data;
          } catch (error) {
              console.log("ERROR" + error);*/
          


        render() {
            return (
                
                <div>
          

                </div>        
            );
        }
    }


export default CoinbaseLogin;
/*
const config = {
    issuer: 'https://www.coinbase.com/oauth/authorize',
    clientId: '2bb4766d6c2e67beeda3f1bf4ec4dab21623d89477d11cf5cd6a357abda0511b',
    redirectUrl: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: ['wallet:transactions:send'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://www.coinbase.com/oauth/authorize',
        tokenEndpoint: 'https://api.coinbase.com/oauth/token',
        revocationEndpoint: 'https://api.coinbase.com/oauth/revoke'
    }
};

var CoinbaseApi = require('coinbase-service');
var coinbase = new CoinbaseApi(process.env.COINBASE_API_KEY, process.env.COINBASE_API_SECRET);

static let scope = "wallet:accounts:read,wallet:user:read,wallet:user:email,wallet:transactions:read"

CoinbaseOAuth.startAuthentication(withClientId: CoinbaseManager.clientId, scope: CoinbaseManager.scope, accountAccess: .all, redirectUri: CoinbaseManager.redirectUrl, meta: nil, layout: nil)
*/
       /* authorize(config)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

    auth0
    .webAuth
    .authorize(config)
    .then(response => 
        console.log(response))
    .catch(error => 
        console.log(error));
    }*/



