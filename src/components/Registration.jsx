import axios from "axios";
import React, { Component } from "react";

class Registration extends Component {
  state = {
    renderForm: false,
  };

  registerUser = async (event) =>{
    event.preventDefault()
    let credentials= {
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.passwordConfirmation.value,
    }
    try {
      let response =await axios.post('/auth', credentials)
      debugger
    } catch (error) {
      console.log(error)
    }
    //
  }
  render() {
    const { renderForm } = this.state;
    return (
      <div>
        {renderForm ? (
          <form onSubmit={(event)=> this.registerUser(event)}>
            <input
              type="email"
              name="email"
              data-cy="email-input"
              placeholder="Your Email"
            />
            <input
              type="password"
              name="password"
              data-cy="password-input"
              placeholder="Your Password"
            />
            <input
              type="password"
              name="passwordConfirmation"
              data-cy="password-confirmation-input"
              placeholder="Confirm Password"
            />
            <button type="submit" data-cy="submit">Register</button>
          </form>
        ) : (
          <button
            data-cy="register"
            onClick={() => this.setState({ renderForm: true })}
          >
            Sign up
          </button>
        )}
      </div>
    );
  }
}

export default Registration;
