import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',

}

static propTypes   = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

constructor() {
  super();
  this.state ={
    articles: [],
    loading: false,
    page: 1,

  }
  

}
async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51c1551edc784bc6942e7465dffb3f5e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading: false
    })


}
handlePreviousClick = async() =>{
    this.setState({page: this.state.page - 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51c1551edc784bc6942e7465dffb3f5e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
        articles: parseData.articles,
        page: this.state.page - 1,
        loading: false
    })


}

handleNextClick = async() =>{

    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51c1551edc784bc6942e7465dffb3f5e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            page: this.state.page + 1,
            loading: false
        })
    }   
    
}

render() {
    
  
    // Render your component using the article object
     return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
     
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => (
            <div key={element.url} className="col-md-4 my-3">
              <NewsItems
                title={element.title?element.title:""}
                description={element.description?element.description:""}
                imageURL={element.urlToImage} 
                newsUrl ={element.url}
                author = {element.author}
                date = {element.publishedAt}
              />
            </div>
          ))}
        </div>
          <div className="container d-flex justify-content-between">
          <button disabled= {this.state.page <=1} type="button" onClick= {this.handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
          <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" onClick= {this.handleNextClick} className="btn btn-dark">&rarr; Next</button>
          </div>
      </div>
      
    );
  }
}

export default News
