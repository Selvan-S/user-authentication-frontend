import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import axios from "axios";
const Home = () => {
  const [res, setRes] = useState([]);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    if (user && user.token) {
      getData(user.token);
    }
  }, []);

  let getData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: `${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get(`${API_URL}home`, config);

      if (response.data === "Invalid Token") {
        alert("Login again");
      } else if (response.data === "Server Busy") {
        alert("Unauthorized access");
      } else if (response?.status) {
        setRes(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <h1>User Authentication using MERN Stack</h1>
      <p style={{ textAlign: "center" }}>This is an Guvi course!</p>
      <div>Hi {res.name}!</div>
      <Button variant="primary" type="submit">
        <Link to={"/"} className="signup">
          Get Started
        </Link>
      </Button>
    </Container>
  );
};

export default Home;
