import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Table from 'react-bootstrap/Table'

function ModalComponent(props) {
  const { show, handleClose, data } = props
  // console.log(...data);
  

  return (
    <>
      {data ? 
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Novelty COVID-19 Infections Estimator For</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              style={{ backgroundColor: "#046B99", borderColor: "#046B99" }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant="primary"
              style={{ backgroundColor: "#046B99", borderColor: "#046B99" }}
              onClick={handleClose}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
      
       : null}
    </>
  )
}

export default ModalComponent
