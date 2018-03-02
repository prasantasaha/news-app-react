import React from "react";
import { connect } from "react-redux";

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
          <div className="progress-container">
            "Loading"
          </div>
        )}
      </div>
    );
  }
}

export default connect(state => state)(Articles);
