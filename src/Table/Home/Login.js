import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <div className="login-block">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <button className="submit-l" type="submit">
          Submit
        </button>
        <p>already have a account</p>
        <Link to={"/signup"}>signup</Link>
      </Form>
    </div>
  );
}
