import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Choose Language</a>
          <div className="navbar-dropdown is-boxed">
            {this.props.NewsData.get("languages").map((lang, index) => {
              return (
                <a className="navbar-item" key={index}>
                  {lang.displayName}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

LanguageSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
  NewsData: PropTypes.object.isRequired
};

export default connect(state => state)(LanguageSelector);
