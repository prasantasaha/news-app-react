import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleSideBar } from "../state/NewsData";

import logo from "../images/logo.png";
import SearchArticles from "./SearchArticles";

import "./Navigation.css";

class Navigation extends React.Component {
  toggleSideBar() {
    let sideBarExpanded = this.props.NewsData.get("sideBarExpanded");
    this.props.dispatch(toggleSideBar(!sideBarExpanded));
  }
  render() {
    let navToggleClass = this.props.NewsData.get("sideBarExpanded")
      ? "active"
      : "";
    return (
      <nav
        className="navbar is-fixed-top is-primary"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} alt="" />
          </a>
          <div
            className="navbar-burger"
            onClick={this.toggleSideBar.bind(this)}
          >
            <a id="nav-toggle" className={navToggleClass}>
              <span />
            </a>
          </div>
        </div>
        <div className="navbar-item category-title is-size-4">
          {this.props.NewsData.get("selectedCategory")
            ? this.props.NewsData.get("selectedCategory").displayName
            : "Top Headlines"}
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <SearchArticles className="navbar-item field search-article" />
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
