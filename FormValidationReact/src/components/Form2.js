import React, { Component } from 'react'

 class Form2 extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.location.state.firstName},Your Details Are!</h1>
                <ul className="list-group">
               <li  className="list-group-item text-center">FirstName: {this.props.location.state.firstName}</li>
               <li  className="list-group-item text-center">lastName:{this.props.location.state.lastName}</li>
               <li  className="list-group-item text-center">Email:{this.props.location.state.email}</li>
               <li className="list-group-item text-center">Age: {this.props.location.state.age}</li>
               <li className="list-group-item text-center">Weight: {this.props.location.state.weight}</li>
               <li className="list-group-item text-center"> Height:{this.props.location.state.height}</li>
               <li className="list-group-item text-center">Phone: {this.props.location.state.phone}</li>
               <li className="list-group-item text-center">Address: {this.props.location.state.address}</li>
                </ul>
            </div>
        )
    }
}

export default Form2
