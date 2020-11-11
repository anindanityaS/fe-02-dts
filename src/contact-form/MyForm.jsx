import React, { Component } from 'react';
// import './App.css';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      mail: '',
      message: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Contact US</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your mail:</p>
      <input
        type='email'
        name='mail'
        onChange={this.myChangeHandler}
      />
      <p>Enter your messege:</p>
      <input
        type='text'
        name='message'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}


export default MyForm;
