import React, { Component } from 'react';
import { Container, Menu, Dropdown, Image } from 'semantic-ui-react'
import { Link } from 'react-router';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item header>TEAM-A-DORO</Menu.Item>
            <Menu.Item name='timer' to="/" as={Link} />
            <Menu.Item name='teams' to="/teams" as={Link} />

            <Menu.Menu position='right'>
              <Menu.Item name='currentUser'>
                <Dropdown trigger={
                  <span>
                    <Image src='http://semantic-ui.com/images/avatar/large/steve.jpg' avatar />
                    <span>Justin Obney</span>
                  </span>
                } pointing='top left' icon={null}>
                  <Dropdown.Menu>
                    <Dropdown.Item text='Settings' icon='settings' as={Link} to="/" />
                    <Dropdown.Item text='Sign Out' icon='sign out' as={Link} to="/teams" />
                  </Dropdown.Menu>
                </Dropdown>
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
