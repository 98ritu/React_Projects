import React, { Component } from 'react'

 class Display extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1  className="text-center" >Welcome User,Your Details Are!!</h1>
        <p className="text-center">{this.props.location.state.name}</p>
        <p className="text-center">{this.props.location.state.email}</p>
        <p className="text-center">{this.props.location.state.address}</p>
        <p className="text-center">{this.props.location.state.pno}</p>
            </div>
        )
    }
}

export default Display
