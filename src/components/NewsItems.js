import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageURL, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="card">
        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0', top: '0'}}>
          <span  className=" badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={
            imageURL
              ? imageURL
              : "https://i.cdn.newsbytesapp.com/images/27121671715509818.jpeg"
          }
          className="card-img-top"
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"> Updated by {author ? author : "Unknown"} on {new Date(date).toGMTString()}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={newsUrl}
            className="btn btn-dark btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItems;
