import React, { Component } from 'react'

class Form1 extends Component {
    state={
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        height:"",
        age:"",
        weight:"",
        address:"",

        firstnameError:"",
        lastNameError:"",
        emailError:"",
        phoneError:"",
        ageError:"",
        heightError:"",
        weightError:"",
    }
    
    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    validateFields=()=>{
        let validity=true;
        const firstName=this.state.firstName;
        const lastName=this.state.lastName;
        const email=this.state.email;
        const height=this.state.height;
        const weight=this.state.weight;
        const age=this.state.age;
        const phone=this.state.phone;

        const validFirstName=RegExp(/^[a-z A-Z]{2,10}$/);
        const validLastName=RegExp(/^[a-z A-Z]{2,10}$/);
        const validEmail=RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
        const validHeight=RegExp(/^[0-9]{1,3}$/);
        const validWeight=RegExp(/^[0-9]{1,3}$/);
        const validAge=RegExp(/^[0-9]{1,3}$/);
        const validPhone=RegExp(/^[0-9]{10}$/);

       if(firstName===""){
           this.setState({firstnameError:"Input can't be empty"});
       }
       else{
        if(!validFirstName.test(firstName)){
            this.setState({firstnameError:"Enter Valid First Name"});
            validity=false;
        }
        else{
         this.setState({firstnameError:""});
     }
       }
        
       if(lastName===""){
        this.setState({lastnameError:"Input can't be empty"});
    }else{
        if(!validLastName.test(lastName)){
            this.setState({lastnameError:"Enter Valid LastName"});
            validity=false;
        }
        else{
            this.setState({lastnameError:""});
        }
    }
    if(email===""){
        this.setState({emailError:"Input can't be empty"});
    }else{  if(!validEmail.test(email)){
        this.setState({emailError:"Enter Valid Email"});
        validity=false;
    }
    else{
        this.setState({emailError:""});
    }}
     
    if(phone===""){
        this.setState({phoneError:"Input can't be empty"});
    }else{
        if(!validPhone.test(phone)){
            this.setState({phoneError:"Enter Valid Phone"});
            validity=false;
        }
        else{
            this.setState({phoneError:""});
        }
    }
   
    if(height===""){
        this.setState({heightError:"Input can't be empty"});
    }else{
        if(!validHeight.test(height) || height==0){
            this.setState({heightError:"Enter Valid Height"});
            validity=false;
        }
        else{
            console.log(height);
            this.setState({heightError:""});
        }
    }

    if(weight===""){
        this.setState({weightError:"Input can't be empty"});
    }else{if(!validWeight.test(weight) || weight==0){
        this.setState({weightError:"Enter Valid Weight"});
        validity=false;
    }
    else{
        this.setState({weightError:""});
    }}
    
    if(weight===""){
        this.setState({weightError:"Input can't be empty"});
    }else{if(!validAge.test(age) || age==0){
        this.setState({ageError:"Enter Valid Age"});
        validity=false;
    }
    else{
        this.setState({ageError:""});
    }
    return validity;

    }}
    
    


    onSubmitHandler=(e)=>{
        e.preventDefault();
        if(this.validateFields()){
            this.props.history.push({
                pathname:'/form2',
                state:{
                    firstName:this.state.firstName,
                    lastName:this.state.lastName,
                    age:this.state.age,
                    height:this.state.height,
                    weight:this.state.weight,
                    address:this.state.address,
                    email:this.state.email,
                    phone:this.state.phone,
                }
            });
        }
    }
    cancelHandler=(e)=>{
        e.preventDefault();
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          this.setState({
           firstName:"",
           lastName:"",
           age:"",
           height:"",
           weight:"",
           email:"",
           phone:""
          });
          Array.from(document.querySelectorAll("textarea")).forEach(
            input => (input.value = "")
          );
          this.setState({
              address:"",
          })
        
       
    }

    render() {
        return (
            <div>
                <div className="row">
  <div className="col-md-8 offset-md-2">
    <div className="card">
      <div className="card-body">
        <h1>Validation Form</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <input type="text" name="firstName" className="form-control mb-2" placeholder="First Name" onChange={this.onChangeHandler}/>
        <div className="text-danger"><small>{this.state.firstnameError}</small></div>
            <input type="text" name="lastName" className="form-control mb-2" placeholder="Last Name" onChange={this.onChangeHandler} />
            <div className="text-danger"><small>{this.state.lastnameError}</small></div>
            <input type="text" name="email" className="form-control mb-2" placeholder="Email" onChange={this.onChangeHandler} />
            <div className="text-danger"><small>{this.state.emailError}</small></div>
            <input type="text" name="phone" className="form-control mb-2" placeholder="Phone number" onChange={this.onChangeHandler} />
            <div className="text-danger"><small>{this.state.phoneError}</small></div>
            <input type="text" name="height" className="form-control mb-2" placeholder="Height" onChange={this.onChangeHandler} />
            <div className="text-danger"><small>{this.state.heightError}</small></div>
            <input type="text" name="weight" className="form-control mb-2" placeholder="Weight" onChange={this.onChangeHandler} />
            <div className="text-danger"><small>{this.state.weightError}</small></div>
            <input type="text" name="age" className="form-control mb-2" placeholder="Age" onChange={this.onChangeHandler} />
            <div className="text-danger"><small>{this.state.ageError}</small></div>
            <textarea name="address" placeholder="Address" className="form-control mb-2
            " onChange={this.onChangeHandler}></textarea>
            <input type="submit" value="Submit" className="btn btn-primary" />
            <button className="btn btn-danger" onClick={this.cancelHandler}>Cancel</button>

          </div>
        </form>
      </div>
    </div>
  </div>
</div>
                
            </div>
        )
    }
}

export default Form1;
