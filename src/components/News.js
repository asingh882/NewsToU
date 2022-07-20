import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    apiKey: '27c2b63304704b13a3268ab268963d6c',
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string,
    category: PropTypes.string,
  }

  
    constructor() {
        super();
        console.log("Hello I am a constructor from News Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }
    async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contentCountry}&category=${this.props.category}&apikey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false,});
    }


    handleNextClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contentCountry}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false,
        });
    } 

    handlePrevClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contentCountry}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState ({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false,
      })
    }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{marginTop: '70px', marginBottom: '40px'}}>NewsToU - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} newsUrl={element.url} imgUrl={element.urlToImage?element.urlToImage:"https://i.cbc.ca/1.5569949.1596129136!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/shutterstock-medium-file.jpg"} />
            </div>
        })}
        </div>
        <div className="fixed-bottom d-flex justify-content-between my-3"> 
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page>=Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
