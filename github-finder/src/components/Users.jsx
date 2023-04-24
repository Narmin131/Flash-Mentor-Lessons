import React, { Component } from 'react'
import User from "../components/User"
export class Users extends Component {
  render() {
    return (
      <>
        <div className="container" style={{backgroundColor:'red'}}>
          <div className="row">
            {
              this.props.users.map((item, index) => {
                return <User key={index} user={item} />
              })
            }
          </div>
        </div>
      </>
    )
  }
}

export default Users