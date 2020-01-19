import React from 'react'
import './Cards.scss'

const Cards = props => {
  const { title, image, description, url, tags } = props
  const redirect = () => { 
    window.open(
      url,
      "_blank"
    )
   }
  return (
    <div className="cards">
      <div className="imageContainer">
        <img className="image" src={image} alt={title} />
        <div className="overlay">
          {
            tags.map((i) => {
              return <div className="tag">{i.label}</div>
            })
          }
        </div>
      </div>
      <div className="contentContainer">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <button onClick={redirect}>Voir la démo</button>
      </div>
    </div>
  )
}
 
export default Cards;
