import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import './ArticleCard.css';

class ArticleCard extends React.Component {
  render() {
    let article = this.props.article;
    let source = this.props.source;
    return (
      <div className="card article">
        {article.urlToImage ? (
          <div className="card-image">
            <figure className="image is-16by9">
              <img src={article.urlToImage} alt="" />
            </figure>
          </div>
        ) : (
          ""
        )}

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-3">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </p>
              <p className="subtitle is-6">{article.author || ""}</p>
            </div>
          </div>

          <div className="content">{article.description}</div>
          <div className="card-footer">
            {source ? (
              <div className="source-info">
                <a
                  href={source.url}
                  title={source.description || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="image is-24x24">
                    <img
                      src={`//logo.clearbit.com/${
                        new URL(source.url).host
                      }?size=24`}
                      alt={source.name}
                    />
                  </figure>
                </a>
                <span className="info-label">{source.name}</span>
              </div>
            ) : (
              <div className="source-info" />
            )}
            <div className="info-label">
              {moment(article.publishedAt).fromNow()}
            </div>
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
