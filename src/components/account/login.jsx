import React, { Component } from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import lopginBg from "./images/lopginBg.jpg";
import { login } from "../../services/authService";
class Login extends Component {
  state = {
    account: {
      email: "vishal.parkash@millipixels.com",
      password: "Test123",
      remember_me: true
    }
  };
  changeVal = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  rememberMe = () => {
    const account = { ...this.state.account };
    account.remember_me = !account.remember_me;
    this.setState({ account });
  };
  submitLogin = async e => {
    e.preventDefault();
    const account = { ...this.state.account };
    try {
      await login(JSON.stringify(account)).then(response => {
        // if (response.status === 200) {
        //   console.log("response: ", response.data);
        // }
        const tokenKey = "key";
        const tokenName = "name";
        const tokenEmail = "email";
        const tokenID = "id";
        const responseData = {
          user: {
            id: 1,
            name: "Vishal Parkash",
            email: "vishal.parkash@millipixels.com",
            email_verified_at: null,
            created_at: "2020-02-26 12:08:13",
            updated_at: "2020-02-27 10:21:37"
          },
          access_token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiYzQ5YmM0YjIwY2JjY2QxYTIyYjY2NjkyODIwZGJjOThjMGYzYWU0ZTMyZGRkOTkwNTgzYzk4MGExMGMzMTEyNmRjMzYxZGI1Y2RiMGIxNTMiLCJpYXQiOjE1ODMyMjc4MjEsIm5iZiI6MTU4MzIyNzgyMSwiZXhwIjoxNjE0NzYzODIxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.a53ARd46UTM3K4mtFlSfcQHzHYceHc28ydJO9yZ1hORc19SmfWo3u5abm-aqALpo8SSaevg6Tf7onw5sd4SDWgEi_OK2A9NA4nbA0c2LadmUlU7Kahs6epzRpkJ6lSbRqnRHcmr1Ip1zdhTx8HFjvkanjPvzycGc54rEuewHG8VEHy66-aPFLcsrG1cGVzeFFbFYyWhOvF1quo7QzB0l7Q5ZsZBTFfJP71VQ39q6BSrmnqSBVsxyZdrPFx_ZzfiWC1_Ct1q7eX4Z8PQ5hZNdrvSbB5PxdDft-o0rWr_HG73bkHaC0XNK6dsG_K-UbdvriW0VfM1amrcCFXwLq3oDSBqL01w7KaNH3af9jLVxu-PS_91QIzPZRS0B4ESQn5krGLa-ZWGEr_hSJgAHywKtxhCpqqGGQ2hh7D1h-2-AVUkYa6gaEnhRb3K7NtGlJN0JHuFysxuAucZOWllHkK6E-5XYuICRTaVW2LVAL46F2_mnch2g4_C_op49tAGnTAJC6geOSgurQro4RR6X_tEfleOAmauJi67PHK2yM90VDoicjRX48ze2yO3Cf0bd299jb9ZTkeKrK5OOXl8Rb5qQM6MhXVUHUIzstKofnI_lT7bSScy5U_iOd-p84E-iZhrJx9XYC9bynYz0sCq2OHDRgYQfcgwfxneuCms6ro5zjlI",
          token_type: "Bearer",
          expires_at: "2020-03-10 09:30:21"
        };
        // console.log(responseData.access_token);
        localStorage.setItem(tokenKey, responseData.access_token);
        localStorage.setItem(tokenName, responseData.user.name);
        localStorage.setItem(tokenEmail, responseData.user.email);
        localStorage.setItem(tokenID, responseData.user.id);
      });
      window.location.href = "/cdt";
    } catch (err) {}
  };

  disabledLogin() {
    const account = { ...this.state.account };
    if (account.email === "" || account.password === "") {
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
            <h3>Login</h3>
            <Form onSubmit={this.submitLogin}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={account.email}
                  name="email"
                  type="email"
                  onChange={this.changeVal}
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
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={account.remember_me}
                  onChange={this.rememberMe}
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Button
                  variant="success"
                  block
                  size={"md"}
                  disabled={this.disabledLogin()}
                  // onClick={this.submitLogin}
                  type="submit"
                >
                  Login
                </Button>
              </Form.Group>
            </Form>
            <div className="text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary">
                Sign Up
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

export default Login;
