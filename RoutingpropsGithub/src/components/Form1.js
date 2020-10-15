import React, { Component } from 'react'

class Form1 extends Component {
    state={
        firstname:"",
        lastname:"",
        email:"",
    }
    onChangeHandlerOne=(e)=>{
        e.preventDefault();
        this.setState({firstname:e.target.value});
    }
    onChangeHandlerTwo=(e)=>{
        e.preventDefault();
        this.setState({lastname:e.target.value});
    }
    onChangeHandlerThree=(e)=>{
        e.preventDefault();
        this.setState({email:e.target.value});
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        this.props.history.push({
            pathname:"/form2",
            state:{
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                email:this.state.email,
            }
        });
    }
    render() {
        return (
            <div>
                <div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="card">
        <div className="card-header">
          <h1 className="display-4">Login Form</h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <input type="text" className="form-control mb-2" placeholder="First Name" onChange={this.onChangeHandlerOne}/>
              <input type="text" className="form-control mb-2" placeholder="Last Name"onChange={this.onChangeHandlerTwo} />
              <input type="email" className="form-control mb-2" placeholder="Email" onChange={this.onChangeHandlerThree}/>
              <input type="submit" value="Login" className="btn btn-primary text-center" />
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

export default Form1;
