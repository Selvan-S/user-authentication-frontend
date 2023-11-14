import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import axios from "axios";
import API_URL from "../../config/global";
const Home = () => {
  const [res, setRes] = useState([]);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    console.log("user token: ", user.token);
    if (user && user.token) {
      getData(user.token);
    }
  }, []);

  let getData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: "token",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      console.log("This is user.token again :", token);
      const response = await axios.get(`${API_URL}home`, config);
      console.log("This is an response ", response);

      if (response.data === "Invalid Token") {
        alert("Login again");
      } else if (response.data === "Server Busy") {
        alert("Unauthorized access");
      } else if (response.status) {
        console.log(
          "response, status and data: " +
            response.status +
            " " +
            JSON.stringify(response.data)
        );
        setRes(response.data);
        console.log("res.name: " + res.name);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <h1>User Authentication using MERN Stack</h1>
      <p style={{ textAlign: "center" }}>This is an Guvi course!</p>
      <div>Hi {res.name}</div>
      <Button variant="primary" type="submit">
        <Link to={"/"} className="signup">
          Get Started
        </Link>
      </Button>
    </Container>
  );
};

export default Home;
