/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import moment from 'moment';

import './ArticleCard.css';
import image_placeholder from '../images/image_placeholder.png';

const getImageUrlObject = urlToImage => {
  let imageUrl;
  if (urlToImage) {
    imageUrl = new URL(urlToImage);

    imageUrl.search += `${
      imageUrl.search ? '&' : '&'
    }aspect=16:9&format=auto&width=600&bgcolor=54524d`;
  }
  return imageUrl;
};

const ArticleCard = ({ article, source }) => {
  const imageUrl = getImageUrlObject(article.urlToImage);
  return (
    <div className="card article">
      {article.urlToImage ? (
        <div className="card-image">
          <figure className="image is-16by9">
            <object
              data={`//rsz.io/${imageUrl.hostname}${imageUrl.pathname}${imageUrl.search}`}
              type="image/png"
            >
              <object data={article.urlToImage} type="image/png">
                <img src={image_placeholder} alt="" />
              </object>
            </object>
          </figure>
        </div>
      ) : (
        ''
      )}

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-3">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </p>
            <p className="subtitle is-6">{article.author || ''}</p>
          </div>
        </div>

        <div className="content">{article.description}</div>
        <div className="card-footer">
          {source ? (
            <div className="source-info">
              <a
                href={source.url}
                title={source.description || ''}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="image is-24x24">
                  <img
                    src={`//logo.clearbit.com/${
                      new URL(source.url).host
                    }?size=48`}
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
};

export default ArticleCard;
