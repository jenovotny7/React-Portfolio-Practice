import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-responsive-modal'
import ModalFooter from 'react-bootstrap/ModalFooter'

export default class ProjectCard extends Component {
  state = {
    open: false
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <div className='projectContainer'>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant='top' src={this.props.imageCardPath} />
            <Card.Body>
              <Card.Title>{this.props.cardTitle}</Card.Title>
              <button
                type='button'
                className='btn btn-danger'
                data-toggle='modal'
                data-target='#myModal'
                onClick={this.onOpenModal}
              >
                Learn More
              </button>

              <Modal open={open} center onClose={this.onCloseModal}>
                <h5 style={{ margin: '10px' }}>
                  
                  <ModalFooter>
                    <button
                      type='button'
                      className='btn btn-primary'
                      data-dismiss='modal'
                    >
                      <a
                        className='text-white'
                        href={this.props.sourceCode}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View Project
                      </a>
                    </button>
                    
                  </ModalFooter>
                </h5>
              </Modal>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}
