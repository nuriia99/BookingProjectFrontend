import React from 'react'

const CardImage = ({ src, title, properties }) => {
  return (
    <div className='cardImage'>
      <img src={src} alt="" />
      <h4>{title}</h4>
      <span className='cardImage_properties'>{properties}</span>
    </div>
  )
}

export { CardImage }
