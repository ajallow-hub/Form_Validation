import React from "react";
import "./App.css";
import "./FormValidation.css";

class FormValidation extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  handleFnameChange = (event) => {
    event.preventDefault();
    this.setState({
      fname: event.target.value,
    });
  };
  handleLnameChange = (event) => {
    event.preventDefault();
    this.setState({
      lname: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
  };
  handleChange = (event) =>{
    event.preventDefault();
    this.setState({
       
    });
  }

  formSubmit = (event) => {
    alert(`${this.state.fname} ${this.state.lname} ${this.state.email} ${this.state.password}`);
    event.preventDefault();
    
  };

  render() {
    return (
      <main>
      <h1 id="logo">Linkedin</h1>
      <p id="tagline">Make the most of your professional life</p>
      <form action="onSubmit{formSubmit}">
        <div className="form-group">
          <label for="" onClick={this.handleFnameChange}>First name</label>
          <input type="text" value={this.fname}/>
        </div>
        <div className="form-group">
          <label for="" onClick={this.handleLnameChange}>Last name</label>
          <input type="text"  value={this.lname}/>
        </div>
        <div className="form-group">
          <label for="" onClick={this.handleEmailChange}>Email</label>
          <input type="email"  value={this.email}/>
        </div>
        <div className="form-group">
          <label for="" onClick={this.handlePasswordChange}>Password (6 or more characters )</label>
          <input type="password"  value={this.password}/>
        </div>
        <p>
          You agree to the Linkedin
          <span className="policy">User Agreement, Privacy Policy</span>, and
          <span className="policy">Cookie Policy</span>.
        </p>
        <button className="signup-btn" onClick={this.handleChange}>Agree &amp; Join</button>
        <div className="line-with-text">
          <div className="line"></div>
          <span className="text-in-line">or</span>
          <div className="line"></div>
        </div>
        <button class="facebook-btn">
          <i class="fab fa-facebook-f icon"></i> Continue with Facebook
        </button>
        <p>Already on Linkedin? Sign in</p>
      </form>

      <p>Linkedin Corporation &copy; 2019</p>
    </main>
    );
  }
}

export default FormValidation;
