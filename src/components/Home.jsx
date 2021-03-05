import React, { useState ,useEffect} from 'react';
import Mynav from './Mynav'
import Address from './Address'
import { toast } from "react-toastify";
import ReactBootstrap,{
  Row, Col, Container
  } from 'react-bootstrap';

function Home({ setAuth }){
  console.log(localStorage.token)
  const [data, setName] = useState([])
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/home/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData);
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
            <Row>
            <Mynav name = {data.user_name} id= {data.id} logout = {logout} />
            </Row>
            <Row>
              <Container className = "mt-5">
                <Row className="mt-5" md ={8}>
                      <Address id= {data.id} />
                </Row>
              </Container>
            </Row>
        </div>
    );
}

export default Home;
