import React from 'react'
import loading from '../loading_a.gif'

const Spinner = () => {
    return (
      <div className='text-center' role='status'>
        <img className='my-3' style={{width:'60px', height:'auto'}} src={loading} alt="loading" />
      </div>
    //   <div class="spinner-border text-success" role="status">
    //   <span class="visually-hidden">Loading...</span>
    // </div>
    )
}

export default Spinner;