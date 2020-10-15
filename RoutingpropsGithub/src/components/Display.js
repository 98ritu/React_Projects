import React, { Component } from 'react'

class Display extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1 className="text-center mb-2">Welcome User!Your Details Are</h1>
                <p className="text-center">{this.props.location.state.firstName}</p>
        <p className="text-center">{this.props.location.state.lastName}</p>
        <p className="text-center">{this.props.location.state.email}</p>
        <p className="text-center">{this.props.location.state.occupation}</p>
        <p className="text-center">{this.props.location.state.pno}</p>
        <p className="text-center">{this.props.location.state.bio}</p>
            </div>
        )
    }
}

export default Display
