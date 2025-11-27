

import React, { useEffect, useState } from 'react'
import BASE_URL from '../Config/Config';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MRDisplay() {
    const [mydata, setMydata] = useState([]);
    const [input, setInput]  =useState({});
      const [image, setImage] = useState("");
            
          const handelInput = (e)=>{
              const name = e.target.name;
              const value = e.target.value;
              setInput(values=>({...values, [name]:value}));
              console.log(input);
          }
      
          const HandelImage = (e)=>{
            setImage(e.target.files[0]);
            console.log(image);
          }
    
    
       const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    

  const LoadData = async()=>{
    const api = `${BASE_URL}/admin/DisplayMR`;
    const response  =await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(()=>{
    LoadData();
  },[])


  const HandelDelete =(_id)=>{
    const api = `${BASE_URL}/admin/MrDelete`;
    try {
    const response = axios.post(api,{_id:_id})
    console.log(response.data);
    alert("mr deleted successfully")
    LoadData(); 
    } catch (error) {
        console.log(error)
    }
   

  }

  const HandelUpdate = async(_id)=>{
    const api = `${BASE_URL}/admin/mrgetupdatedata`;
    try {
        const response  = await axios.post(api,{_id:_id});
        console.log(response.data);
        setInput(response.data);
        setShow(true)

    } catch (error) {
        console.log(error)
    }

  }

    const ans = mydata.map(key=>{
        return(
            <>
            <tr>
                <td>
                    <img src={`${BASE_URL}/${key.image}`} alt="image" width="100" height="100" />
                </td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.number}</td>
                <td>{key.ano}</td>
                <td>{key.status}</td>
                <td style={{fontSize:"25px"}} onClick={()=>{HandelDelete(key._id)}}><MdDelete /></td>
                <td style={{fontSize:"25px"}} onClick={()=>{HandelUpdate(key._id)}}><MdSystemSecurityUpdateGood /></td>
            </tr>
            </>
        )
    })



   const handelSubmit = ()=>{
    
   }



  return (
      <>
      <h1 align="center">MR Display Page</h1>
             <Table striped bordered hover>
            <thead>
              <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mo No</th>
              <th>Adhar No</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {ans}
              </tbody>
              </Table>

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                 <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter  Name </Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' value={input.name} onChange={handelInput}  />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter  Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mo Number </Form.Label>
        <Form.Control type="number" placeholder="Enter number" name='number' value={input.number} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Adhar Number </Form.Label>
        <Form.Control type="number" placeholder="Enter Adar number" name='ano' value={input.ano} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Adar Image </Form.Label>
        <Form.Control type="file"  onChange={HandelImage} />
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

export default MRDisplay