import React from 'react'
import { Link } from 'react-router-dom'
import heartFull from '../assets/heart-solid.png'
import heartEmpty from '../assets/heart-regular.png'

function Snack({ snack }) {
  return (
    <div className='Snack'>
      <Link to={`/snacks/${snack.id}`}>
       <span>
        <img src={snack.image} alt={snack.name}/>
       </span>
       <span>
        <h4 className='name'>
        {snack.is_healthy ? (
          <img src={heartFull} alt="healthy food"/>
        ):(
          <img src={heartEmpty} alt="unhealthy food"/>
        )
        }
        {snack.name}
        </h4>
       </span>
      </Link>
    </div>
  )
}

export default Snack