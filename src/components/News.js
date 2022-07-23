import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {
    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    
  

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    document.title = `NewsToU - ${capitalizeFirstLetter(props.category)}`;

    const updateNews = async () => {
      props.setProgress(0);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.contentCountry}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }

    useEffect(() => {
      updateNews();
    }, [])



     const fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.contentCountry}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page + 1);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    };

    return (
      <>
        <h1 className='text-center' style={{marginTop: '70px', marginBottom: '40px'}}>NewsToU - Top {capitalizeFirstLetter(props.category)}  Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner/>}
        >
          <div className="container">
        <div className="row">
        {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0, 45):""} source={element.source.name} description={element.description?element.description.slice(0, 88):""} newsUrl={element.url} author={element.author} date={element.publishedAt} imgUrl={element.urlToImage?element.urlToImage:"https://i.cbc.ca/1.5569949.1596129136!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/shutterstock-medium-file.jpg"} />
            </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
  

  News.defaultProps = {
    country: 'in',
    pageSize: 9,
    apiKey: '27c2b63304704b13a3268ab268963d6c',
    category: 'general',
  }

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string,
    category: PropTypes.string,
  }

}

export default News;
