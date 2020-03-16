import React, { Component } from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import lopginBg from "./images/lopginBg.jpg";
import { signUp } from "../../services/authService";
class SignUp extends Component {
  state = {
    account: {
      name: "Harwinder Singh",
      email: "harwinder.singh@millipixels.com",
      password: "Test123"
    }
  };
  changeVal = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  // submitSignUp = e => {
  //   e.preventDefault();
  //   const account = this.state.account;
  //   signUp(JSON.stringify(account));
  // };

  submitSignUp = async e => {
    e.preventDefault();
    const account = this.state.account;
    try {
      await signUp(JSON.stringify(account)).then(response => {
        if (response.status === 200) {
          console.log("signUp Data: ", response.data);
          // this.setState({ allProjects: allProjects, isloading: true });
        }
      });
    } catch (err) {
      // this.setState({ allProjects: [], isloading: true });
    }
  };
  disabledSignUp() {
    const account = { ...this.state.account };
    if (
      account.name === "" ||
      account.email === "" ||
      account.password === ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { account } = this.state;
    return (
      <main className="main">
        <div
          className="account"
          style={{ backgroundImage: "url(" + lopginBg + ")" }}
        >
          <div className="accountInner">
            <h3>Sign Up</h3>
            <Form onSubmit={this.submitSignUp}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={account.name}
                  name="name"
                  onChange={this.changeVal}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={account.email}
                  name="email"
                  onChange={this.changeVal}
                  type="email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={account.password}
                  name="password"
                  onChange={this.changeVal}
                  required
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Button
                  variant="success"
                  block
                  size={"md"}
                  type="submit"
                  disabled={this.disabledSignUp()}
                >
                  Sign Up
                </Button>
              </Form.Group>
            </Form>
            <div className="text-center">
              Have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
              <br />
              <Link to="/forgotpassword" className="text-primary">
                Forgot yout password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default SignUp;
