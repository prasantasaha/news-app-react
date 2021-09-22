import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { initializeData, getTopHeadlines } from '../state/NewsData';
import ArticleCard from './ArticleCard';

import './Articles.css';

class Articles extends React.Component {
  componentDidMount() {
    this.props.dispatch(initializeData());
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(newProps) {
    if (
      newProps.NewsData.get('selectedCategory') !==
      this.props.NewsData.get('selectedCategory')
    ) {
      window.scrollTo(0, 0);
      this.props.dispatch(getTopHeadlines());
    }
  }

  render() {
    return (
      <div className="articles-container">
        {!this.props.NewsData.get('isLoading') &&
        this.props.NewsData.get('articles').size ? (
          this.props.NewsData.get('articles').map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              source={this.props.NewsData.get('sources').find(source =>
                article.source.id
                  ? source.id === article.source.id.split('-').join('') ||
                    source.name === article.source.name
                  : false,
              )}
            />
          ))
        ) : (
          <div className="progress-container is-loading" />
        )}
      </div>
    );
  }
}

Articles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  NewsData: PropTypes.object.isRequired,
};

export default connect(state => state)(Articles);
