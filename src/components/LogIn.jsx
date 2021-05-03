import axios from "axios";
import React, { Component } from "react";

class LogIn extends Component {
  state = {
    renderForm: false,
  };

  loginUser = async (event) => {
    event.preventDefault();

    let credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      let response = await axios.post("https://baked-beans.herokuapp.com/api/auth/sign_in", credentials);
      const userCredentials = {
        uid: response.headers["uid"],
        client: response.headers["client"],
        access_token: response.headers["access-token"],
        expiry: response.headers["expiry"],
        token_type: "Bearer",
      };      

      localStorage.setItem("userData", JSON.stringify(userCredentials));
      this.setState({
        message: "You logged in successfully",
        renderForm: false,
      });
      this.props.authStatus();
    } catch (error) {
      this.setState({
        message: "Wrong email or password",
        renderForm: false,
        keepLogin: true,
      });
    }
  };

  render() {
    const { renderForm, message, keepLogin } = this.state;
    return (
      <div>
        {
        (renderForm) 
        ? (
            <form onSubmit={(event) => this.loginUser(event)}>
              <input
                data-cy="email-input"
                type="email"
                name="email"
                placeholder="Your mail"
              />
              <input
                data-cy="password-input"
                type="password"
                name="password"
                placeholder="Your password"
              />
              <button type="submit" data-cy="submit-log-in">
                Submit
              </button>
            </form>
          ) 
        : !(message)
        ?
          (
            <button
              data-cy="log-in-button"
              onClick={() => this.setState({ renderForm: true })}
            >
              Log in
            </button>
          )
        : (keepLogin)
        ? (
          <>
            <div data-cy="message">{message}</div>
            <button
                data-cy="log-in-button"
                onClick={() => this.setState({ renderForm: true })}
              >
                Log in
            </button>
          </>
        ) 
        : (<div data-cy="message">{message}</div>) 
        }
      </div>
    );
  }
}
export default LogIn;
