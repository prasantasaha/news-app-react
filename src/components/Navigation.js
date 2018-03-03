import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleSideBar } from "../state/NewsData";

import logo from "../logo.png";

class Navigation extends React.Component {
  toggleSideBar() {
    this.props.dispatch(
      toggleSideBar(!this.props.NewsData.get("sideBarExpanded"))
    );
  }
  render() {
    return (
      <nav
        className="navbar is-fixed-top is-primary"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} alt=""/>
          </a>

          <div
            className="navbar-burger"
            onClick={this.toggleSideBar.bind(this)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar-item category-title is-size-4">
          {this.props.NewsData.get("selectedCategory")
            ? this.props.NewsData.get("selectedCategory").displayName
            : "Top Headlines"}
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item field search-article">
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

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  NewsData: PropTypes.object.isRequired
};

export default connect(state => state)(Navigation);
