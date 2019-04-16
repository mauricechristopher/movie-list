import React from 'react';
import Modal from 'react-bootstrap/ModalHeader';
import Button from 'react-bootstrap/Button'
import { graphql } from 'react-apollo'
import { getMoviesQuery } from '../queries/queries'

class MovieModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMouseOver: false
    };
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Hello</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default graphql(getMoviesQuery)(MovieModal);
