import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import BaseComponent from 'libs/components/BaseComponent';

import './Layout.scss';

export default class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="container">
        <section>
          <header>
            <nav className="navbar navbar-default">
              <div className="container-fluid">

                <ul className="nav navbar-nav">
                  <li>
                    <IndexLink to="/" activeClassName="active">
                      Home
                    </IndexLink>
                  </li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="help">
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link to="login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <a href="https://github.com/shakacode/react-webpack-rails-tutorial"><strong>Github repo</strong></a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {this.props.children}
        </section>
      </div>
    );
  }
}
