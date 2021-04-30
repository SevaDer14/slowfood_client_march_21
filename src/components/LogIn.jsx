import React, { Component } from "react";

class LogIn extends Component {
  state = {
    renderForm: false,
  };
  render() {
    const {renderForm} = this.state
    return (
      <div>
        {renderForm ? (
          <form>
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
        ) : (
          <button onClick={() => this.setState({ renderForm: true })}>
            Log in
          </button>
        )}
      </div>
    );
  }
}
export default LogIn;
