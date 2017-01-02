import React from "react";
import ReactDOM from "react-dom";

import Modal from "react-bootstrap-modal";


export default class ImageModal extends React.Component {
  constructor() {
    super();
    this.onClick = this.handleClick.bind(this);
    this.state = {
      open: false,
    };
  }
  handleClick(event) {
    window.open(this.props.img);
  }
  render(){
    let closeModal = () => this.setState({ open: false })
    let openModal = () => this.setState({ open: true })

    return (
      <div>
        <div className="screenshot-holder">
          <i>
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
            <div class="text">
              <p>{this.props.caption}</p>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <button class="btn btn-success" onClick={this.onClick}>View Fullsize</button>
              <Modal.Dismiss className='btn btn-default'>Close</Modal.Dismiss>

            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}
