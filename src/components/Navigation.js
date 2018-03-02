import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top is-primary"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {/* <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a> */}

          <div className="navbar-burger">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search" />
                <span className="icon is-small is-left">
                  <i className="fas fa-search" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
