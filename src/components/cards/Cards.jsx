import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.scss'

const Cards = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img style={{ width: 120 }} src={props.image} alt={props.alt} />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.description}</p>
        <Link className="btn btn-outline-success" to={props.url}>Plus d'informations</Link>
      </div>
    </div>
  )
}
 
export default Cards;
