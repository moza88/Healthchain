import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Search from '../Search/Search';
class Home extends Component{

    render(){
        return(
          <div>
          <Jumbotron>
            <h1 className="display-3">A Healthcare Plan Made Just For You</h1>
            <p className="lead">Pick out healthcare providers you would like to add to your plan or visit</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
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