import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
// import {PostData} from '../../services/PostData';
// import './Login.css';
import '../../foundation.css';
import '../Login/login.css';

class Login extends Component {

  constructor(){
    super();
   
    this.state = {
     username: '',
     password: '',
     redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  

  login() {
      alert("Yesh");
    // if(this.state.username && this.state.password){
    //   PostData('login',this.state).then((result) => {
    //    let responseJson = result;
    //    if(responseJson.userData){         
    //      sessionStorage.setItem('userData',JSON.stringify(responseJson));
    //      this.setState({redirectToReferrer: true});
    //    }
       
    //   });
    // }
    
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

  render() {
     return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4 className="login">Login</h4>
        <label>Username</label>
        <input type="text" name="username" className="userName" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password" className="passWord" placeholder="Password" onChange={this.onChange}/>
        <input type="submit" className="button success" value="Login" onClick={this.login}/>
        <a href="/signup" className="Registration">Registration</a>
        </div>
      </div>
    );
  }
}

export default Login;