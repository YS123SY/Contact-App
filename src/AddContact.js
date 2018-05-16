import  React from 'react'
import axios from 'axios'

class AddContact extends React.Component {
constructor(props){
    super(props)
    this.state={
      name :"",
      phone:"",
      email:""
    }
}
handleState = e => {
  this.setState({
    [e.target.name] : e.target.value
   })
}
 addContact = (value) => {
   axios.post('/contacts', {...value})
 }
  render () {
    return <div className='add-contact-container'>
          <h1> Add Contact Page </h1>
          <form>
            <div>
              <label>Name</label><br/>
              <input name="name" onChange={this.handleState} type='text' />
            </div>
            <div>
              <label>Phone</label><br/>
              <input name='phone' onChange={this.handleState} type='text' />
            </div>
            <div>
              <label>Email</label><br/>
              <input name='email' onChange={this.handleState}  type='text' />
            </div>
            <div>
              <input type='button' onClick={()=>this.addContact(this.state)} value='Add contact' />
            </div>
          </form>
    </div>
  }
}
export default AddContact
