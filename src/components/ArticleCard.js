import React from "react";

class ArticleCard extends React.Component {
  render() {
    let article = this.props.data;
    return (
      <div className="card article">
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={article.urlToImage} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{article.title}</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div className="content">
            {article.description}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
