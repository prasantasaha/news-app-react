import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

class ArticleCard extends React.Component {
  render() {
    let article = this.props.article;
    let source = this.props.source;
    return (
      <div className="card article">
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={article.urlToImage} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                {source && source.url ? (
                  <a href={source.url}>
                    <img
                      src={`https://logo.clearbit.com/${
                        new URL(source.url).host
                      }`}
                    />
                  </a>
                ) : (
                  ""
                )}
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-5">{article.title}</p>
              <p className="subtitle is-6">{article.author || ""}</p>
            </div>
          </div>

          <div className="content">{article.description}</div>
          <div className="card-footer">
            <span>{moment(article.publishedAt).fromNow()}</span>
          </div>
        </div>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  source: PropTypes.object
};
export default ArticleCard;
