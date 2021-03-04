import React, { Component } from 'react';
import ReactBootstrap,{
    Card
    } from 'react-bootstrap';

class Quotelist extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Card className="mr-3">
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
         );
    }
}
 
export default Quotelist;