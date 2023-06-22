import React, { useState } from 'react'
import { SearchBar, ResultGallery } from '../../components';

import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle } from "react-bootstrap";

const Search = () => {
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };  

  return (
    <section className="search">
      <SearchBar setResults={setResults} />
      <ResultGallery results={results}/>


      <section className="lyrics">
        <button onClick={showModal}>Display Modal</button>
        <Modal show={isOpen} onHide={hideModal} dialogClassName={"primaryModal"}>
          <Modal.Header>
            <Modal.Title>Hi</Modal.Title>
          </Modal.Header>
          <Modal.Body>The body</Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button>Save</button>
          </Modal.Footer>
        </Modal>
      </section>
    </section>
  )
}

export default Search