import React, { Component } from 'react';
import './App.css';
import Main from './Main'; // Import the Main component
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      mobile: '',
      email: '',
      password: '',
      formSubmitted: false, // State variable to track form submission
      backgroundImage: 'url("C:/Front-Back/fun/src/Untitled.png")', // Initial background image path
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, mobile, email, password } = this.state;
    // Perform validation
    if (name && age && mobile && email && password) {
      // All fields are filled, set formSubmitted to true and change background image
      this.setState({
        formSubmitted: true,
        backgroundImage: 'url("C:/Front-Back/fun/src/pexels-yogendra-singh-1466852.jpg")', // New background image path after form submission
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  render() {
    const { name, age, mobile, email, password, formSubmitted, backgroundImage } = this.state;

    let content = (
      <div>
        <div className="header-text">
          <div className='rd'>Let's Walk... Let's Run... Let's burn... The calories</div>
        </div>
        <div className="App" style={{ backgroundImage: backgroundImage }}> {/* Apply background image dynamically */}
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit} className="signup-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={name} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number" name="age" value={age} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" name="mobile" value={mobile} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={email} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={this.handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );

    if (formSubmitted) {
      content = <Main />;
    }

    return content;
  }
}

export default SignUpForm;
