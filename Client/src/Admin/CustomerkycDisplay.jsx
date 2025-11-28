import React, { useEffect, useState } from 'react'
import BASE_URL from '../Config/Config';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function CustomerKycDisplay() {
  const [mydata, setMydata] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const LoadData = async () => {
    const api = `${BASE_URL}/admin/DisplaykycCustomer`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(() => {
    LoadData();
  }, [])



  const handelApprove = () => {
    setShowModal(true);
  };


  const handleReject = () => {
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleClose1 = () => setShowModal1(false);

  const handelInput = ()=>{

  }


  const handelSubmit = ()=>{
    
  }

  const ans = mydata.map(key => {
    return (
      <tr key={key._id}>
        <td>
          <img src={`${BASE_URL}/${key.image}`} alt="image" width="100" height="100" />
        </td>
        <td>{key.name}</td>
        <td>{key.email}</td>
        <td>{key.number}</td>
        <td>{key.ano}</td>

        <td>
          <Button
            variant="success"
            size="sm"
            style={{ marginRight: "10px" }}
            onClick={() => handelApprove(key.status)}
          >
            Approve
          </Button>

          <Button
            variant="danger"
            size="sm"
            onClick={() => handleReject(key.status)}
          >
            Reject
          </Button>
        </td>
      </tr>
    )
  })

  return (
    <>
      <h1 align="center">KYC CUSTOMER</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mo No</th>
            <th>Adhar No</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </Table>


      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>

             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={mydata.email}  onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Status" name='status' value={mydata.status} onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
 
         
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CustomerKycDisplay;
