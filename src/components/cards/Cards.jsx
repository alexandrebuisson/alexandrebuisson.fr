import React from 'react'
import './Cards.scss'

const Cards = props => {
  const { title, image, description, url } = props
  return (
    <div className="cards">
      <div className="imageContainer">
        <img className="image" src={image} alt={title} />
      </div>
      <div className="contentContainer">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <a className="button" href={url} target="_blank" rel="noopener noreferrer">Voir la démo</a>
      </div>
    </div>
  )
}
 
export default Cards;
