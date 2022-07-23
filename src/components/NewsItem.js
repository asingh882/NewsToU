import React from 'react'

const NewsItem = (props) => {
  
    let {title, description, imgUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card my-2">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
             <span className="badge rounded-pill" style={{left: '90%', zIndex: '1', backgroundColor: '#3d7d57'}}>{source}</span>
          </div>
            <img src={imgUrl} className="card-img-top" style={{height: "300px"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read more »</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem;
