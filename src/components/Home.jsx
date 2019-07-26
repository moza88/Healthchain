import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

    render(){
        return(
            <section className="hero is-info is-fullheight">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                    Welcome to HealthChain
                </h1>
                <h2 className="subtitle">
                    A health plan that's made just for you
                </h2>
                <Link to="/Home" className="button">Let's get started!</Link>
              </div>
            </div>
          </section>
        )
    }

}

export default Home;