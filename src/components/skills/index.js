import React from 'react'
import './skills.scss'

const Skills = (props) => {
  const { logo, name, color, url } = props
  return (
    <a className="skillsCard" rel="noopener noreferrer" href={url} target="_blank" style={{ color: color }}>
      <img className="skillsImg" src={logo} alt={name} />
      <small className="skillsTitle">{name}</small>
    </a>
  )
}

export default Skills
