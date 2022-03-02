import React from 'react'
import {useSelector} from 'react-redux'
function ListOFUsers() {
     const users=useSelector(state=>state) 
   

  return (
      <div>

     
      <h1>hello</h1>
   {(users) ? users.map((elt)=>(<h1>{elt.email}</h1>)):"hey"}
   </div>
  )
}

export default ListOFUsers