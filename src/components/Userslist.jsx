import React, { Component } from 'react';
import ReactBootstrap,{
    Card
    } from 'react-bootstrap';

class Userslist extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>

                </Card>
              
            </div>
         );
    }
}
 
export default Userslist;

