import React from 'react'
import axios from "axios";

import './Contact.css'

import { ContactForm } from '../../components';


class Contact extends React.Component {
  state = {
    input: {},
  };

  saveInputs = (event) => {
    var key = event.target.name;
    this.state.input[key] = event.target.value;
    this.setState({ [key]: event.target.value });
  };

  saveData = () => {
    // console.log(this.state);
    var currentthis = this;

    // console.log(this.state.input);
    var formData = new FormData();
    for (var data in this.state.input) {
      formData.set(data, this.state.input[data]);
    }

    axios
      .post("https://35539c68-29fb-44c6-a116-2ae9a1b447b1.mock.pstmn.io/post", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then(function (response) {
        
      })
      .then(function (error) {
        //Error Callback
        //console.error(`Error: ${error}`);
      })
      .then(function () {
      });
  };


  render() {
    return (
      <section>
        <h1>Contact Us</h1>
        <input
          name="name"
          placeholder="Enter Name :"
          onChange={this.saveInputs}
        />
        <br />
        <input
          name="email"
          placeholder="Enter Email :"
          onChange={this.saveInputs}
        />
        <br />
        <button id="save_data" onClick={this.saveData}>
          Submit
        </button>
        <br />
      </section>
    )
  }
}

export default Contact