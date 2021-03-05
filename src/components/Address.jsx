import React, {  Component } from 'react';
import { toast } from "react-toastify";

import {
    Form, Button
    } from 'react-bootstrap';

class Textbox extends Component {
    
    constructor(){
        super();
        this.state={ text:''}
    }

    handleChange = event =>{
    this.setState({ 'text':event.target.value })
    }
    handleSubmit = async event =>{
        event.preventDefault();
        try{
            const data = { address:this.state.text, id: this.props.id}
            console.log(data)
            const response = await fetch(
                "http://localhost:5000/home/post",
                {
                    method: "POST",
                    headers: { jwt_token: localStorage.token ,
                        "Content-type": "application/json"},
                    
                    body: JSON.stringify(data) 
                });
            response.status=== 200 ? toast.success("Address saved Successfully") : toast.error("Try again");
            
            this.setState({ 'text': '' });
            event.target.reset();
        }catch (err) {
                  console.error(err.message);
                }

    }

    render() { 
        

        return ( 
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Textarea" name ="textbox"  style={{ width:'30rem'}}>
                        <Form.Label>Please write your address.</Form.Label>
                        <Form.Control required as="textarea" onChange={this.handleChange} rows={3} maxLength="200" />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
         );
    }
}
 
export default Textbox;