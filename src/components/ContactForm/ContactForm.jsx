import React from 'react'
import axios from "axios";

import './ContactForm.css'


class ContactForm extends React.Component {
  state = {
    input: {},
  };

  saveInputs = (event) => {
    var key = event.target.name;
    //this.state.input[key] = event.target.value;
    this.setState({ [key]: event.target.value });
  };

  saveData = () => {
    // console.log(this.state);
    // var currentthis = this;

    // console.log(this.state.input);
    var formData = new FormData();
    for (var data in this.state.input) {
      formData.set(data, this.state.input[data]);
    }

    axios
      .post("https://ce707595-c326-4cd4-a947-8c05d35e6ded.mock.pstmn.io/post", formData)
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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contactForm col-md-10">
                <div className='formRow'>
                  <p>Name:</p>
                  <input
                    name="name"
                    placeholder="Enter Name :"
                    onChange={this.saveInputs}
                  />
                </div>

                <div className='formRow'>
                  <p>Your Email:</p>
                  <input
                    name="email"
                    placeholder="Enter Email :"
                    onChange={this.saveInputs}
                  />
                </div>

                <div className='formRow'>
                  <p>Message:</p>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter Message :"
                    onChange={this.saveInputs}>

                  </textarea>
                </div>

                <button className="CTA" id="save_data" onClick={this.saveData}>
                  Submit Message
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactForm