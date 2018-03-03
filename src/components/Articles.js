import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTopHeadlines, getSources, updateCategory } from "../state/NewsData";
import ArticleCard from "./ArticleCard";

import "./Articles.css";

class Articles extends React.Component {
  componentDidMount() {
    this.props.dispatch(getSources());
    this.props.dispatch(updateCategory(null));
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.NewsData.get("selectedCategory") !==
      this.props.NewsData.get("selectedCategory")
    ) {
      window.scrollTo(0, 0);
      this.props.dispatch(getTopHeadlines());
    }
  }
  render() {
    return (
      <div className="articles-container">
        {this.props.NewsData.get("articles").size ? (
          this.props.NewsData.get("articles").map((article, index) => {
            return (
              <ArticleCard
                key={index}
                article={article}
                source={this.props.NewsData.get("sources").find(
                  source =>
                    article.source.id
                      ? source.id === article.source.id.split("-").join("")
                      : false
                )}
              />
            );
          })
        ) : (
          <div className="progress-container is-loading">1</div>
        )}
      </div>
    );
  }
}

Articles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  NewsData: PropTypes.object.isRequired
};

export default connect(state => state)(Articles);
