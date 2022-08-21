import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Snack from './Snack'

const API=process.env.REACT_APP_API_URL

function Snacks() {
   const [snacks,setSnacks] = useState([])   
   useEffect(() => {
     axios.get(`${API}/snacks`)
     .then((res) => setSnacks(res.data.payload))
     .catch((c) => console.warn("catch", c))               
   },[])              
  return (
    <section className='Snacks'>
      <article>
    <ul>
     {snacks.map((snack) => {
      return(
        <li>
         <Snack key={snack.id} snack={snack}/>           
        </li>            
      )              
     })}
    </ul>
    </article>
    </section>
  )
}

export default Snacks