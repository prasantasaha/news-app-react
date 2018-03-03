import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateCategory, toggleSideBar } from "../state/NewsData";

class SideBar extends React.Component {
  updateCategory(category) {
    this.props.dispatch(updateCategory(category));
    this.props.dispatch(
      toggleSideBar(!this.props.NewsData.get("sideBarExpanded"))
    );
  }
  render() {
    let sideBarClasses =
      "menu sidebar " +
      (this.props.NewsData.get("sideBarExpanded") ? "sidebar-expanded" : "");

    return (
      <aside className={sideBarClasses}>
        <p className="menu-label">
          powered by{" "}
          <a href="//newsapi.org" target="_blank" rel="noopener noreferrer">
            NewsAPI.org
          </a>
        </p>
        <hr className="dropdown-divider" />
        <ul className="menu-list">
          <p className="menu-label">Sections</p>
          <li>
            <a
              onClick={this.updateCategory.bind(this, null)}
              className={
                !this.props.NewsData.get("selectedCategory") ? "is-active" : ""
              }
            >
              Top Headlines
            </a>
          </li>
          {this.props.NewsData.get("categories").map(category => {
            return (
              <li key={category.name}>
                <a
                  onClick={this.updateCategory.bind(this, category)}
                  className={
                    this.props.NewsData.get("selectedCategory") &&
                    this.props.NewsData.get("selectedCategory").name ===
                      category.name
                      ? "is-active"
                      : ""
                  }
                >
                  {category.displayName}
                </a>
              </li>
            );
          })}
        </ul>
       
      </aside>
    );
  }
}

SideBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  NewsData: PropTypes.object.isRequired
};

export default connect(state => state)(SideBar);
