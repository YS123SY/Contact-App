import  React from 'react'
import axios from 'axios'

class ModifyContact extends React.Component {
constructor(props){
    super(props)
    this.state={
      name :"",
      phone:"",
      email:""
    }
}
componentDidMount = () => {
  axios.get(`/contact/${this.props.id.match.params.id}`).then(
    res=> this.setState({
      name : res.data.name,
      phone : res.data.phone,
      email : res.data.email
    })
  )
}

upDateContact = (value) => {
  axios.put(`/contact/${this.props.id.match.params.id}`,{...value})
    }



handleState = e => {
  this.setState({
    [e.target.name] : e.target.value
   })
}

  render () {
    console.log(this.props.id.match.params.id)
    return <div className='add-contact-container'>
          <h1> Modify Contact Page </h1>
          <form>
            <div>
              <label>Name</label><br/>
              <input name="name" onChange={this.handleState} type='text' value={this.state.name} />
            </div>
            <div>
              <label>Phone</label><br/>
              <input name='phone' onChange={this.handleState} type='text' value={this.state.phone} />
            </div>
            <div>
              <label>Email</label><br/>
              <input name='email' onChange={this.handleState}  type='text' value={this.state.email} />
            </div>
            <div>
              <input type='button' onClick={()=>this.upDateContact(this.state)} value='Modify contact' />
            </div>
          </form>
    </div>
  }
}
export default ModifyContact
