import React from "react";
import ReactDOM from "react-dom";

import Modal from "react-bootstrap-modal";


export default class ImageModal extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  render(){
    let closeModal = () => this.setState({ open: false })
    let openModal = () => this.setState({ open: true })

    return (
      <div>
        <div className="screenshot-holder">
          <i data-title="MS3x Parts Ready For Installation">
            <img className="img-responsive thumbnail" src={this.props.img} alt={this.props.alt} />
          </i>
          <i className="mask" onClick={openModal}>
            <i className="icon fa fa-search-plus" />
          </i>
         </div>
          <Modal
            show={this.state.open}
            onHide={closeModal}
            aria-labelledby="ModalHeader"
           >
            <Modal.Header closeButton>
              <Modal.Title id='ModalHeader'>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div class="text-center">
              <img className="img-responsive" src={this.props.img} alt={this.props.alt} />
            </div>
            </Modal.Body>
            <Modal.Footer>

              <Modal.Dismiss className='btn btn-default'>Close</Modal.Dismiss>

            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}
