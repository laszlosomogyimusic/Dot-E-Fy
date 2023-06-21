import React, { Component } from 'react'
import { Container } from "react-bootstrap"
import { SearchResults } from "../index";

import API from "../../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {

  }  

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    API.search(this.state.search)
      .then(res => {
        console.log(res.data.message);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };


  render() {
    return (
      <article>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>

          <SearchResults results={this.state.results} />
        </Container>
      </article>
    )
  }

}

export default Search