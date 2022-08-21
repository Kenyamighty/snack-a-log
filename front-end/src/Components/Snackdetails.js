import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import heartFull from '../assets/heart-solid.png'
import heartEmpty from '../assets/heart-regular.png'
import axios from 'axios'

function Snackdetails() {
 const [snack, setSnack] = useState([])
 let { id } = useParams()
 let navigate = useNavigate()
 const API = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios.get(`${API}/snacks/${id}`)  
    .then((res) => {
    setSnack(res.data.payload)                
    })
  }, [id, navigate, API])

  const deletSnack = () => {
     axios.delete(`${API}/snacks/${id}`)
     .then(() => {
     navigate(`/snack`)               
     })
     .catch((c) => console.error('catch', c) )               
  } 
  
  const handleDelete = () => {
    deletSnack()                
  }
  return (
    <div>
     <article className='Snack'>
      <h1>Snacks</h1>
     <span>
        {snack.is_healthy ? (
          <img src={heartFull} alt="healthy food"/>
        ):(
          <img src={heartEmpty} alt="unhealthy food"/>
        )
        }
        <h4>{snack.name}</h4>
        <img src={snack.image} alt={snack.name}/>
       </span> 
       <h5>Protein:{snack.protein}</h5>             
       <h5>Fiber:{snack.fiber}</h5>             
       <h5>Added Sugar:{snack.added_sugar}</h5>             
     </article>
     <div>
      <Link to="/snacks">
      <button>Back</button> 
      </Link>             
     </div>
     <div>
      <Link to={`/snacks/${id}/edit`}>
      <button>Edit</button> 
      </Link>             
     </div>
     <div>
      <button onClick={handleDelete} >Delete</button>              
     </div>
    </div>
  )
}

export default Snackdetails