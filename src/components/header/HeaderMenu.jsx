import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import LanguageDropdown from '../main/LanguageDropdown';

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        >
          Satrt
        </Menu.Item>

        <Menu.Item
          name='CoffePage'
          active={activeItem === 'CoffePage'}
          onClick={this.handleItemClick}
          as={Link}
          to="/kawa"
        >
          Newsy o kawie
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          as={Link}
          to="/about"
        >
          O stronie
        </Menu.Item>
        
        <Menu.Menu position='right'>
          <Menu.Item>
            <LanguageDropdown onLanguageChange={this.props.onLanguageChange} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}