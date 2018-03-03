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
    let classes =
      "menu sidebar " +
      (this.props.NewsData.get("sideBarExpanded") ? "sidebar-expanded" : "");
    return (
      <aside className={classes}>
        <ul className="menu-list">
          <li>
            <a onClick={this.updateCategory.bind(this, null)}>Top Headlined</a>
          </li>
          {this.props.NewsData.get("categories").map(category => {
            return (
              <li key={category}>
                <a onClick={this.updateCategory.bind(this, category)}>
                  {category}
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
