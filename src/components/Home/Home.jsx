import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Search from '../Search/Search';
class Home extends Component{

    render(){
        return(
          <div>
          <Jumbotron>
            <h1 className="display-3">HealthChain</h1>
            <p className="lead">A Healthcare Plan Made Just For You</p>
            <hr className="my-2" />
            <p>Pick out healthcare providers you would like to add to your plan or visit</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
          <Search></Search>
        </div>

        )
    }

}

export default Home;