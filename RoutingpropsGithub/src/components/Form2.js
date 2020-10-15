import React, { Component } from 'react'

class Form2 extends Component {
    state={
        occupation:"",
        pno:"",
        bio:"",
        firstName:"",
        lastName:"",
        email:"",

    }
    componentDidMount(){
        this.setState({firstName:this.props.location.state.firstname,lastName:this.props.location.state.lastname,email:this.props.location.state.email})
    }
    onChangeHandlerOne=(e)=>{
        e.preventDefault();
        this.setState({occupation:e.target.value});
    }
    onChangeHandlerTwo=(e)=>{
        e.preventDefault();
        this.setState({pno:e.target.value});
    }
    onChangeHandlerThree=(e)=>{
        e.preventDefault();
        this.setState({bio:e.target.value});
    }

    onSubmitHandler=(e)=>{
       console.log(this.state.firstName);
       console.log(this.state.lastName);
       console.log(this.state.email);
       

        this.props.history.push({
            pathname:"/display",
            state:{
                occupation:this.state.occupation,
                pno:this.state.pno,
                bio:this.state.bio,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email
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
          <h1 className="display-4">Details</h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <input type="text" className="form-control mb-2" placeholder="Occupation" onChange={this.onChangeHandlerOne}/>
              <input type="text" className="form-control mb-2" placeholder="Phone Number"onChange={this.onChangeHandlerTwo} />
              <textarea className="form-control mb-2" placeholder="Bio" onChange={this.onChangeHandlerThree}/>
              <input type="submit" value="Submit" className="btn btn-primary text-center" />
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
