import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

function ModalComponent(props) {
  const { show, handleClose, data } = props
  
  
  return (
    <>
      {data ? 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className='text-dark'>
              Currently Infected: {data.impact.currentlyInfected}
              Currently Infected: {data.impact.currentlyInfected}
              Currently Infected: {data.impact.currentlyInfected}
              Currently Infected: {data.impact.currentlyInfected}
              Currently Infected: {data.impact.currentlyInfected}
              Currently Infected: {data.impact.currentlyInfected}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" style={{backgroundColor:'#046B99', borderColor:'#046B99'}} onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" style={{backgroundColor:'#046B99', borderColor:'#046B99'}} onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
       : null}
    </>
  )
}

export default ModalComponent
