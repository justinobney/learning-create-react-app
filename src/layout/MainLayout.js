import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item header>Teamadoro</Menu.Item>
            <Menu.Item name='timer' to="/" as={Link} />
            <Menu.Item name='teams' to="/teams" as={Link} />
          </Container>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
