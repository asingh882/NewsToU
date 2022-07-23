import React, { Component } from 'react'
import loading from '../loading_a.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center' role='status'>
        <img className='my-3' style={{width:'60px', height:'auto'}} src={loading} alt="loading" />
      </div>
    //   <div class="spinner-border text-success" role="status">
    //   <span class="visually-hidden">Loading...</span>
    // </div>
    )
  }
}
