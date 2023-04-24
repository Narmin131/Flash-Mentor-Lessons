import React, { Component } from 'react'

export class User extends Component {
    render() {
        const { avatar_url, login, html_url } = this.props.user
        return (
            <>
                <div className="col-lg-4 p-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={avatar_url} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            <a href={html_url}>User Profile</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default User