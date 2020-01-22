import React, { Component } from "react";
import "./login.scss";
import { Button, Form } from "react-bootstrap";
import lopginBg from "./images/lopginBg.jpg";
class Login extends Component {
  state = {
    account: {
      userName: "",
      userPassword: ""
    }
  };
  changeVal = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  submitLogin = e => {
    e.preventDefault();
  };
  render() {
    const { account } = this.state;
    return (
      <main className="main">
        <div
          className="login"
          style={{ backgroundImage: "url(" + lopginBg + ")" }}
        >
          <div className="loginInner">
            <h3>Login</h3>
            <Form onSubmit={this.submitLogin}>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  value={account.userName}
                  name="userName"
                  onChange={this.changeVal}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={account.userPassword}
                  name="userPassword"
                  onChange={this.changeVal}
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Button variant="success" block size={"md"} type="submit">
                  Login
                </Button>
              </Form.Group>
            </Form>
            <div className="text-center">
              Don't have an account? <a className="text-primary">Sign Up</a>
              <br />
              <a className="text-primary">Forgot yout password?</a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
