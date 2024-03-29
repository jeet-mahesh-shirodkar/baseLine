import React, {Component} from 'react';
// import {PostData} from '../../services/PostData';
// import {Redirect} from 'react-router-dom';
// import './Signup.css';
import '../../foundation.css';
import '../Signup/signup.css';

class Signup extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     username: '',
     password: '',
     email: '',
     name: '',
     redirectToReferrer: false
    };

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);

  }
 

  signup() {
      alert("sign up done");
    // if(this.state.username && this.state.password && this.state.email && this.state.name){
    // PostData('signup',this.state).then((result) => {
    //   let responseJson = result;
    //   if(responseJson.userData){         
    //     sessionStorage.setItem('userData',JSON.stringify(responseJson));
    //     this.setState({redirectToReferrer: true});
    //   }
      
    //  });
    // }
  }

 onChange(e){
   this.setState({[e.target.name]:e.target.value});
  }

  render() {
    // if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
    //   return (<Redirect to={'/home'}/>)
    // }
    return (
      
      <div className="row " id="Body">
        <div className="medium-5 columns left">
        <h4>Signup</h4>
        <label>Email</label>
        <input type="text" name="email" className="eMail" placeholder="Email" onChange={this.onChange}/>
        <label>Name</label>
        <input type="text" name="name"  className="name" placeholder="Name" onChange={this.onChange}/>
        <label>Username</label>
        <input type="text" name="username" className="userName" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password" className="passWord" placeholder="Password" onChange={this.onChange}/>
        
        <input type="submit" className="button" value="Sign Up" onClick={this.signup}/>
        <a href="/login">Login</a>
        </div>
        
      </div>
    );
  }
}

export default Signup;