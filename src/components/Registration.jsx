import React, { Component } from "react";

class Registration extends Component {
  state = {
    renderForm: false,
  };
  render() {
    const { renderForm } = this.state;
    return (
      <div>
        {renderForm ? (
          <form>
            <input
              type="email"
              name="email"
              data-cy="email-input"
              placeholder="Your Email"
            />
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
