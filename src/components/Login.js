import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addlogin } from "../reducer/login";
import { Button, Form } from "semantic-ui-react";
import { Card } from "react-bootstrap";

export  const Login = () => {
  const dispatch = useDispatch();
  const UserData = useHistory();
  const [input, setinput] = useState([]);
  const handler = (event) => {
    setinput(event.target.value);
  };

  const getData = () => {
    dispatch(addlogin(input));
    if (input > "0") {
      UserData.push("/todo");
    }
  };

  return (

     
      <div
        className="container"
        style={{
          width: "400px",
          border: "1px solid black",
          padding: "30px",
          backgroundImage: " linear-gradient(to bottom,#1b68bb,#b3c293,#57f5e7)",
          color: "black",
          borderRadius: "5px",
        }}
      >
        <Form>
          <Card.Header
            style={{
              fontFamily: "Times New Roman', Times, serif",
              fontWeight: "bolder",
              textAlign: "center",
              fontSize: "40px",
             }}
          >
            LOGIN
          </Card.Header>

          <br></br>
          <Form.Field>
            <label style={{ color: "black" }}>UserName</label>
            <input
              placeholder="Enter Your Username"
              onChange={handler}
              type="text"
              id="username"
              required
              style={{ borderRadius: "10px" }}
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "black" }}>Password</label>
            <input
              placeholder="Enter Your Password"
              type="password"
              id="password"
              required
              style={{ borderRadius: "10px" }}
            />
          </Form.Field>

          <br></br>
          <br></br>
          <Button type="submit" onClick={getData} style={{ color: "black" }}>
          Login
          </Button>
        </Form>
      </div>
  
  );
};
