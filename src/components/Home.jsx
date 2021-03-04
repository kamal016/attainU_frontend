import React, { useState ,useEffect} from 'react';
import Mynav from './Mynav'
import Textbox from './Textbox'
import Userslist from './Userslist'
import Quotelist from './quoteList'
import { toast } from "react-toastify";
import ReactBootstrap,{
  Row, Col, Container
  } from 'react-bootstrap';

function Home({ setAuth }){

  const [data, setName] = useState([])
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/home/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData);
      // console.log("FROM HOME :"+ data.id)
    } catch (err) {
      console.error(err.message);
    }
  };
   const logout = e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };


useEffect(() => {
  getProfile();
}, []);

    return (
        <div>
            <Mynav name = {data.user_name} id= {data.id} logout = {logout} />
            <Container className="mt-5">
              <Row>
                <Col className="mt-5" md={8}>
                  <Row className="mt-5" md ={8}>
                  
                    <Textbox id= {data.id} />
                    
                  </Row>
                  <Row className="mt-5">
                    <Quotelist name = {data.user_name} id= {data.id} logout = {logout} />
                  </Row>

                </Col>
                <Col className="mt-5" md={4}>
                  <Userslist />
                </Col>
              </Row>
            </Container>
        </div>
    );
}

export default Home;
