import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SearchArticles extends React.Component {
  render() {
    return (
      <div className="navbar-item field search-article">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Search" />
          <span className="icon is-small is-left">
            <i className="fas fa-search" />
          </span>
        </p>
      </div>
    );
  }
}

SearchArticles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  NewsData: PropTypes.object.isRequired
};

export default connect(state => state)(SearchArticles);
