import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { getTopHeadlines } from "../state/NewsData";
import ArticleCard from "./ArticleCard";

import './Articles.css'

class Articles extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTopHeadlines());
  }
  render() {
    return (
      <div className="articles-container">
        {this.props.NewsData.get("articles").size ? (
          this.props.NewsData.get("articles").map((item, index) => {
            return <ArticleCard key={index} data={item} />;
          })
        ) : (
          <div className="progress-container">Loading</div>
        )}
      </div>
    );
  }
}

Articles.propTypes = {
    dispatch: PropTypes.func.isRequired,
    NewsData: PropTypes.object.isRequired
}

export default connect(state => state)(Articles);
