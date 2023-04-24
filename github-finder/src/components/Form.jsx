import React, { Component } from 'react'

export class Form extends Component {


    constructor() {
        super();
        this.state = {
            keyword: ''
        }
    }


    submitForm = (e) => {
        e.preventDefault();
        this.props.searchUser(this.state.keyword)
    }



    render() {
        return (
            <>
                <div className="container mt-3">
                    <form onSubmit={this.submitForm}>
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control" onChange={(e) => this.setState({ keyword: e.target.value })} />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Form