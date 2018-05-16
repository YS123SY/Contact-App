import  React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class ContacItem extends React.Component {

 deleteContact = (value) => {
  axios.delete(`/contact/${value}`)
 }

  render (){
      const item = this.props.item
  return  <div style={{border:'3px solid grey'}}>
    <h2>Contact name:{item.name}</h2>
    <h2>Contact tel:{item.tel}</h2>
    <h2>Contact email:{item.email}</h2>

          {/*<Link to={'/modify-contact/'+ item._id}*/}
     <Link to={`/modify-contact/${item._id}`}>
    <input type='button' value='modifier'/>
     </Link>
    <input type='button' value='delete' onClick={()=> this.deleteContact(item._id)}/>
  </div>
}
}

export default ContacItem
