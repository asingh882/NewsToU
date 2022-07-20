import React, { Component } from 'react'

export default class NewsItem extends Component {

    constructor() {
        super();

    }

  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card my-2">
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read more »</a>
            </div>
        </div>
      </div>
    )
  }
}
