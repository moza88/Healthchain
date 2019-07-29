import React,  { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';

const config = {
    client_id: '2bb4766d6c2e67beeda3f1bf4ec4dab21623d89477d11cf5cd6a357abda0511b',
    redirect_uri: 'https://www.medchain.com/home',
    scopes: ['wallet:transactions:send'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://www.coinbase.com/oauth/authorize',
        tokenEndpoint: 'https://api.coinbase.com/oauth/token',
        revocationEndpoint: 'https://api.coinbase.com/oauth/revoke'
    }
  }
  
  let tokenData;
  

class CoinbaseLogin extends Component {

    coinbase = (e) => {
        console.log(config);
        try {
            tokenData = ( axios.get('https://api.coinbase.com/oauth/authorize', config)).data;
          } catch (error) {
              console.log("ERROR" + error);
          }
    }



        render() {
            return (
                <div>
                    <h1>OAuth</h1>
                    <Button onClick={this.coinbase}>Click Here</Button>
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



