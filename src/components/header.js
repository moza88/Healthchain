import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleStackable extends Component {
  state = {}

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
          name='features'
          as={Link} to='signin'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}>
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}>
          Testimonials
        </Menu.Item>

        <Menu.Item  
          name='login' 
          as={Link} to='login'
          active={activeItem === 'login'} 
          onClick={this.handleItemClick}>
          Login
        </Menu.Item>

        <Menu.Item 
          name='signup' 
          as={Link} to='signup'
          active={activeItem === 'signup'} 
          onClick={this.handleItemClick}>
          Register
        </Menu.Item>

      </Menu>
    )
  }
}
