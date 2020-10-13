import React, { Component } from 'react'

export class Form1 extends Component {
    state={
        user:"",
        pass:"",
    }
    onChangeName=(e)=>{
        e.preventDefault();
        this.setState({user:e.target.value})
    }
    onChangePass=(e)=>{
        e.preventDefault();
        this.setState({pass:e.target.value})
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        if(validEmailRegex.test(this.state.user) && this.state.pass.length>8){
            console.log(this.props);
            this.props.history.push("/form2");
           
        }else{
          window.alert("Enter correct Email and password length should be greater than 8")
        }
    }
    render() {
        return (
            <div>
                <div className="container">
  <div className="row mt-5">
    <div className="col-md-6 offset-md-3">
    <div className="card">
      <div className="card-header text-center">
        <h1 className="display-4">Login Form</h1>
      </div>
      <div className="card-body">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <input type="text" className="form-control mb-2" placeholder="Enter Email" onChange={this.onChangeName}/>
            <input type="Password" className="form-control mb-2" placeholder="Enter Password" onChange={this.onChangePass}/>
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
