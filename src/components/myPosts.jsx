import React, { Component } from 'react';
import Mynav from "./Mynav";

import ReactBootstrap,{
    Card, Row, Nav, Navbar
    } from 'react-bootstrap';

class myPosts extends Component {
    constructor() {
        super();
        this.state = { data: [] };
      }
      async componentDidMount() {

        const res = await fetch("http://localhost:5000/home/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });
      const json = await res.json();
      console.log( json);
    }

    render() {
        return (
            <div>
                 <Navbar  fixed="top" bg="light" variant="light">
                    <Navbar.Brand>Quotationary</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/myPosts">My Posts</Nav.Link>
                    </Nav>
                </Navbar>
                <br></br>
                <Row>
                    <div className = "mt-5" style={{ width:'60rem'}}>
                        <Card>
                            <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
        );
    }
}

export default myPosts;
