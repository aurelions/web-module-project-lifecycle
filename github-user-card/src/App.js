import React from 'react'
import './App.css'
import axios from 'axios';

import Search from './Components/Github'

import User from './Components/User'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      login: "aurelions",
      user: {},
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.login}`)
      .then(res => {
        this.setState({...this.state.user, user: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">

        <h1>Github User Card!</h1>

        <User user={this.state.user}/>

      </div>
    )
  }
} 

export default App;