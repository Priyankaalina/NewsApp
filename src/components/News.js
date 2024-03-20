import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4 my-3" >
          <NewsItems title="mytitle" discription="my discription"/>
          </div>
          <div className="col-md-4 my-3" >
          <NewsItems title="mytitle" discription="my discription"/>
          </div>
          <div className="col-md-4 my-3" >
          <NewsItems title="mytitle" discription="my discription"/>
          </div>
          <div className="col-md-4 my-3" >
          <NewsItems title="mytitle" discription="my discription"/>
          </div>
          
          
        </div>
    </div>
    )
  }
}

export default News
