import React, {Component} from 'react';
import '../../foundation.css';
import '../LandingPage/welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <div className="medium-12 columns">
          <p id="welcomeText">olla !!</p>

          <a href="/login" className="button">Login</a>
          <a href="/signup" className="button success">Signup</a>
        </div>
      </div>
    );
  }
}

export default Welcome;