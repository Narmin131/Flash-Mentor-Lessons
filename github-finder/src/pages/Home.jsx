import React, { Component } from 'react'
import Form from '../components/Form'
import Users from "../components/Users"
import axios from 'axios';
export class Home extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  searchUser = (keyword) => {
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => this.setState({ users: res.data.items }))
  }


  render() {
    return (
      <div className='main'>
        <Form searchUser={this.searchUser} />
        <Users users={this.state.users} />
      </div>
    )
  }
}

export default Home