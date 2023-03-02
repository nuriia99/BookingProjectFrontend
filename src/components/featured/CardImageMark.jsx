import React from 'react'

const CardImageMark = ({ src, title, properties, mark, reviews, price }) => {
  return (
    <div className='cardImage'>
      <img src={src} alt="" />
      <h4>{title}</h4>
      <span className='cardImage_properties'>{properties}</span>
      <span className='cardImage_properties'>Starting From <span className='bold'>{price}</span></span>
      <span className='cardImage_review'>
        <button>{mark}</button>
        <span>{reviews}</span>
      </span>
    </div>
  )
}

export { CardImageMark }
