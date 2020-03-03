import React, { Component } from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import lopginBg from "./images/lopginBg.jpg";
import { forgotPass } from "../../services/authService";
class ForgotPassword extends Component {
  state = {
    account: {
      email: ""
    }
  };
  changeVal = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  submitForgotPassword = e => {
    e.preventDefault();
    const account = this.state.account;
    forgotPass(JSON.stringify(account));
  };

  disabledForgot() {
    const account = { ...this.state.account };
    if (account.email === "") {
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
            <h3>Forgot yout password?</h3>
            <Form onSubmit={this.submitForgotPassword}>
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
              <Form.Group className="text-center">
                <Button
                  variant="success"
                  block
                  size={"md"}
                  type="submit"
                  disabled={this.disabledForgot()}
                >
                  Send Password
                </Button>
              </Form.Group>
            </Form>
            <div className="text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary">
                Sign Up
              </Link>
              <br />
              Have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ForgotPassword;
