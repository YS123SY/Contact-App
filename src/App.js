import React, { Component } from 'react';
import { BrowserRouter as Router , Link} from 'react-router-dom'
import Routes from './Routes'

import './App.css';
import Contacts from './Contacts'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Link to='/Contacts'>
       <input type='button' value='Contact List'/>
       </Link>
       <Routes/>
      </div>
      </Router>
    );
  }
}

export default App;
