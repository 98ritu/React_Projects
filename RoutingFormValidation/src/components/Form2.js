import React, { Component } from 'react'
import Display from './Display';

export class Form2 extends Component {
    state={
        name:"",
        email:"",
        address:"",
        pno:"",
    }
    onChangeName=(e)=>{
        e.preventDefault();
        this.setState({name:e.target.value})
    }
    onChangeEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    onChangeAddress=(e)=>{
        this.setState({address:e.target.value})
    }
    onChangePno=(e)=>{
        this.setState({pno:e.target.value})
    }
    onSubmitHandler=(e)=>{
        this.props.history.push({
          pathname:"/display",
          state:{
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            pno:this.state.pno,
          }
        });
           
    }
    render() {
        return (
            <div>
                 <div className="container">
  <div className="row mt-5">
    <div className="col-md-6 offset-md-3">
    <div className="card">
      <div className="card-header text-center">
        <h1 className="display-4">Enter Details</h1>
      </div>
      <div className="card-body">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <input type="text" className="form-control mb-2" placeholder="Enter Name" onChange={this.onChangeName}/>
            <input type="email" className="form-control mb-2" placeholder="Enter Email" onChange={this.onChangeEmail}/>
            <input type="text" className="form-control mb-2" placeholder="Enter Address" onChange={this.onChangeAddress}/>
            <input type="text" className="form-control mb-2" placeholder="Enter PhoneNumber" onChange={this.onChangePno}/>
            <input type="submit" value="Submit" className="btn btn-primary text-center" onSubmit={this.onSubmitHandler}/>

          </div>
        </form>
      </div>
    </div>
        </div>
  </div>
</div>

                
            </div>
        )
    }
}

export default Form2
