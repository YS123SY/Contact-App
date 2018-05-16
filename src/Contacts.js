// import React from 'react'
// import axios from 'axios'
//
// class Contacts extends React.Component{
//   constructor (props){
//    super(props)
//     this.state={
//       name:'',
//       phone:'',
//       email:''
//     }
// }
// componentDidMount(){
//   axios.get('/contacts').then(
//     res=>{
//
//     }
//   )
// }
//      render (){
//        return (
//          <div className='contacts-container'>
//        <h1> this is the page contact </h1>
//        {this}
//          <div>
//        <h1>contact name : {this.state.name}</h1>
//          <h2>contact phone : {this.state.phone}</h2>
//          <h3>contact email : {this.state.email}</h3>
//        </div>
//      </div>
//    )}
// }
// export default Contacts
import React from 'react'
import axios from 'axios'
import ContacItem from './ContactItem'


class Contact extends React.Component{

 constructor(props){
   super(props)
   this.state={
       contacts : []
   }
 }

componentDidMount(){
 axios.get('/contacts').then(
   res =>
   {
     this.setState({
       /*name:res.data[0].name,
       tel:res.data[0].tel,
       email:res.data[0].email*/

       contacts:res.data
     })
   }
 )
}

 render(){
   return <div style={{display:'flex'}}>
     {this.state.contacts.map((el ,i)=>{
       return (
         <div>
          <ContacItem item={el} />
         </div>
              )
       }
     )}
     </div>
 }
}

export default Contact
