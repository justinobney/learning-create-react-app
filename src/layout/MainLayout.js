import React, { Component } from 'react';
import { Container, Menu, Input } from 'semantic-ui-react'
import { Link } from 'react-router';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item name='home' to="/" as={Link} />
            <Menu.Item name='bar' to="/bar" as={Link} />

            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
