import React, { Component } from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SidebarLeftOverlay extends Component {
  constructor() {
    super();
    this.state = { visible: true };
  }


  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { visible } = this.state;
    return (
      <Sidebar
        as={Menu}
        width="thin"
        visible={visible}
        vertical
        inverted
      >
        <Menu.Item name="home"><Link to="/">Dashboard</Link></Menu.Item>
        <Menu.Item name="gamepad"><Link to="/my-restaurants">My Restaurants</Link></Menu.Item>
        <Menu.Item name="gamepad"><Link to="/restaurants">Find Restaurants</Link></Menu.Item>
        <Menu.Item name="gamepad"><Link to="/settings">Settings</Link></Menu.Item>
        <Menu.Item name="camera"><Link to="/logout">Logout</Link></Menu.Item>
      </Sidebar>
    );
  }
}

export default SidebarLeftOverlay;
