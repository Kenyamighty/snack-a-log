import React from 'react'
import { Link } from 'react-router-dom'
import heartFull from '../assets/heart-solid.png'
import heartEmpty from '../assets/heart-regular.png'

function Snack({ snack }) {
  return (
    <div>
      <Link to={`/snacks/${snack.id}`}>
       <span>
        <img src={snack.image} alt=""/>
       </span>
       <span>
        {snack.is_healthy ? (
          <img src={heartFull} alt=""/>
        ):(
          <img src={heartEmpty} alt=""/>
        )
        }
        <h4>{snack.name}</h4>
       </span>
      </Link>
    </div>
  )
}

export default Snack