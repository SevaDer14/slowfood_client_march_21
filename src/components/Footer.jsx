import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" data-cy="footer">
        <p data-cy="adress-info">Address: Böngatan 69</p>
        <p data-cy="phone-number">Phone number: 070-1234567</p>
        <p data-cy="mail">Email: bakedbeans@baked.com</p>
      </footer>
    );
  }
}

export default Footer;
