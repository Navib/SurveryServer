import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  componentDidUpdate() {}

  renderContent() {
    switch (this.props.auth) {
      case null:
        return '';
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google!</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            SurveyServer
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
