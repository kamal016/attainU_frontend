import React, { Component } from "react";

import {
  Navbar, 
  Nav,
  Button
  } from 'react-bootstrap';

class Mynav extends Component {
  render(){
  return (
    <div>
      <Navbar  fixed="top" bg="light" variant="light">
        <Navbar.Brand>Welcome</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <h3 className="mr-3">{this.props.name}</h3>
            <Nav>
              <Button onClick={e => this.props.logout(e)} className=" btn btn-primary my-2 my-sm-0">
                Logout
              </Button>
            </Nav>
          </Nav>
      </Navbar>
    </div>
  );
  }
};

export default Mynav;

