import PropTypes from 'prop-types'
import React from 'react'

import './cards.css'


function card({title, imageSource, text, url}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className='overflow'> 
        <img src={imageSource} alt='' className='card-img-top'/>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary"> 
          {
            text ? text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
          }
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target='_blank'>Go to this Website</a>
      </div>
    </div>
  )
}


card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string


}

export default card

