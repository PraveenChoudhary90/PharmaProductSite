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
  const [input,setInput] = useState([]);

  const LoadData = async () => {
    const api = `${BASE_URL}/admin/DisplaykycCustomer`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(() => {
    LoadData();
  }, [])


   const handelInput = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInput(values=>({...values,[name]:value}))
      console.log(input);
  }




  



  const handelApprove =async (_id) => {
    const api = `${BASE_URL}/admin/KycApprovedReject`;
    const response = await axios.post(api, {_id:_id}) 
    console.log(response.data);
    setInput(response.data)
    setShowModal(true);
  };


  const handleReject = async(_id) => {
     const api = `${BASE_URL}/admin/KycApprovedReject`;
    const response = await axios.post(api, {_id:_id}) 
    console.log(response.data);
    setInput(response.data)
    setShowModal1(true);
  };

  const handleClose = () => setShowModal(false);
  const handleClose1 = () => setShowModal1(false);

 
  const handelSubmitApproved = async(e)=>{
  e.preventDefault();
  const api = `${BASE_URL}/admin/updateStatusApprove`;
  const response = await axios.post(api, input);
  console.log(response.data);
  alert(response.data.msg);
  setShowModal(false);
  LoadData();
  }



  const handelSubmitReject = async(e)=>{
    e.preventDefault();
    const api = `${BASE_URL}/admin/updateStatusReject`;
  const response = await axios.post(api, input);
  console.log(response.data);
  alert(response.data.msg);
  setShowModal1(false);
  LoadData();
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
        <td>{key.status}</td>

        <td>
          <Button
            variant="success"
            size="sm"
            style={{ marginRight: "10px" }}
            onClick={() => handelApprove(key._id)}
          >
            Approve
          </Button>

          <Button
            variant="danger"
            size="sm"
            onClick={() => handleReject(key._id)}
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
            <th>StatusUpdate</th>
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
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email}  onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Status" name='status' value={input.status} onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmitApproved}>
        Submit
      </Button>
    </Form>
 
         
        </Modal.Body>
      </Modal>


      {/* reject model */}

      
      <Modal show={showModal1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>

             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email}  onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Status" name='status' value={input.status} onChange={handelInput} />
      </Form.Group>
       

       <Form.Group className="mb-3" controlId="formBasicPasswordj">
        <Form.Label>Reason To Reject</Form.Label>
        <Form.Control type="text" placeholder="reason to reject" name='reason' value={input.reason} onChange={handelInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handelSubmitReject}>
        Submit
      </Button>
    </Form>
 
         
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CustomerKycDisplay;
