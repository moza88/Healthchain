import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../Authentication/Logout/SignOutButton';
import { withFirebase } from '../Firebase';

class MenuExampleStackable extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item
          name='home'
          as={Link} to='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>          
          <img src='https://react.semantic-ui.com/logo.png' />

        </Menu.Item>

        <Menu.Item
          name='providers'
          as={Link} to={ROUTES.SIGNIN}
          active={activeItem === 'providers'}
          onClick={this.handleItemClick}>
          Providers
        </Menu.Item>

        <Menu.Item
          name='patients'
          as={Link} to={ROUTES.SIGNIN}
          active={activeItem === 'patients'}
          onClick={this.handleItemClick}>
          Patients
        </Menu.Item>

        <Menu.Item
          name='signout'
          onClick={this.props.firebase.doSignOut}>
        </Menu.Item>

      </Menu>

    )
  }
}

export default withFirebase(MenuExampleStackable);