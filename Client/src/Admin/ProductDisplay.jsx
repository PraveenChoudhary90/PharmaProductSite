
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


function ProductDisplay() {
  const [mydata, setMydata] =useState([]);
  const [input, setInput] = useState([]);
  const [image, setImage] = useState("");
        
      const handelInput = (e)=>{
          const name = e.target.name;
          const value = e.target.value;
          setInput(values=>({...values, [name]:value}));
          console.log(input);
      }
  
      const handleImage = (e)=>{
        setImage(e.target.files[0]);
        console.log(image);
      }


   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const LoadData = async()=>{
    const api = `${BASE_URL}/admin/DisplayProduct`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(()=>{
    LoadData();
  },[]);


    
  const HandelDelete = async(_id)=>{
    const api = `${BASE_URL}/admin/DeleteProduct`;
    const response = await axios.post(api, {_id:_id});
    console.log(response.data);
    alert(response.data.msg);
    setMydata(mydata.filter(key1=>key1._id!==_id));
  }


  const HandelUpdate =async(_id)=>{
    const api = `${BASE_URL}/admin/UpdateGetData`;
    const response = await axios.post(api,{_id:_id});
    console.log(response.data);
    setInput(response.data);
    setShow(true);

  }

  
const HandelFormSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  
  for (let key in input) {
    formData.append(key, input[key]);
  }

  if (image) {
    formData.append("defaultImage", image);
  }

  try {
    const api = `${BASE_URL}/admin/UpdateProduct`;
    const response = await axios.post(api, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response.data)
    alert(response.data.msg);

    setShow(false);
    LoadData(); 
  } catch (error) {
    console.error(error);
    alert("Error updating product");
  }
};








let count =0;
  const ans  = mydata.map((key)=>{
    count++;
    return(
      <>
     
    <tr>
        <td>{count}</td>
        <td>
            <img  src={`${BASE_URL}/${key.defaultImage}`}  width="100" height="100" alt="image" />
        </td>
        <td style={{fontWeight:"bold"}}>{key. category}</td>
        <td>{key. subCategory}</td>
        <td>{key. productname}</td>
        <td>{key.  brand}</td>
        <td>{key. mrp}</td>
        <td>{key. price}</td>
        <td>{key. batchNo}</td>
        <td>{key. mfgDate}</td>
        <td>{key. expDate}</td>
        <td style={{fontSize:"30px"}} onClick={()=>{HandelDelete(key._id)}}><MdDelete /></td>
        <td style={{fontSize:"30px"}} onClick={()=>{HandelUpdate(key._id)}}><MdSystemSecurityUpdateGood /></td>
    </tr>



     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
                       
                             <Form>
                               <Form.Label>Category</Form.Label>
                               <Form.Select name="category" value={input.category} onChange={handelInput}>
                                   <option value="">Select Category</option>
                                   <option value="Tablet">Tablet</option>
                                   <option value="Capsule">Capsule</option>
                                   <option value="Syrup">Syrup</option>
                                   <option value="Injection">Injection</option>
                                   <option value="Ointment">Ointment</option>
                               </Form.Select>
                              <Form.Label>Sub-Category</Form.Label>
                               <Form.Select name="subCategory" value={input.subCategory} onChange={handelInput}>
                                   <option value="">Select Sub Category</option>
                                   <option value="Antibiotic">Antibiotic</option>
                                   <option value="Painkiller">Painkiller</option>
                                   <option value="Antacid">Antacid</option>
                                   <option value="Anti-Allergic">Anti-Allergic</option>
                                   <option value="Multivitamin">Multivitamin</option>
                                   <option value="Probiotic">Probiotic</option>
                                   <option value="Vitamin">Vitamin</option>
                                   <option value="Cough Syrup">Cough Syrup</option>
                                   <option value="Digestive Syrup">Digestive Syrup</option>
                                   <option value="Insulin">Insulin</option>
                                   <option value="Antifungal Cream">Antifungal Cream</option>
                               </Form.Select>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Product Name </Form.Label>
                       <Form.Control type="text"  name='productname' value={input.productname} onChange={handelInput} />
                     </Form.Group>
           
                      <Form.Group className="mb-3" controlId="formBasicEmaill">
                       <Form.Label>Brand</Form.Label>
                       <Form.Control type="text"  name='brand' value={input.brand} onChange={handelInput} />
                     </Form.Group>
             
                                  <Form.Group className="mb-3">
                                   <Form.Label>MRP</Form.Label>
                                   <Form.Control type="number" name='mrp' value={input.mrp} onChange={handelInput} />
                               </Form.Group>
           
                               <Form.Group className="mb-3">
                                   <Form.Label>Selling Price </Form.Label>
                                   <Form.Control type="number" name='price' value={input.price} onChange={handelInput} />
                               </Form.Group>
           
           
                               <Form.Group className="mb-3">
                                   <Form.Label>Batch No</Form.Label>
                                   <Form.Control type="text" name='batchNo' value={input.batchNo} onChange={handelInput} />
                               </Form.Group>
           
                               <Form.Group className="mb-3">
                                   <Form.Label>Manufacturing Date</Form.Label>
                                   <Form.Control type="date" name="mfgDate" value={input.mfgDate} onChange={handelInput} />
                               </Form.Group>
           
                               <Form.Group className="mb-3">
                                   <Form.Label>Expiry Date</Form.Label>
                                   <Form.Control type="date" name="expDate" value={input.expDate} onChange={handelInput} />
                               </Form.Group>
           
                               <Form.Group className="mb-3">
                                   <Form.Label>Product Image</Form.Label>
                                   <Form.Control type="file" multiple onChange={handleImage} />
                               </Form.Group>
                     
                            <Button variant="primary"  onClick={HandelFormSubmit}>
                       Submit
                     </Button>
                   </Form>
            </Modal.Body>
      </Modal>


      
         
      
      </>
    )
  })




  return (
   <>
   <div id="admi1">
   <h1>Welcome to our Display Product Page </h1>
   </div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Count</th>
          <th>Image</th>
          <th>Category</th>
          <th>Sub-Category</th>
          <th>ProductName</th>
          <th>Brand</th>
          <th>MRP</th>
          <th>Price</th>
          <th>Batch No</th>
          <th>MfDate</th>
          <th>Exdate</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>

   </>
  )
}

export default ProductDisplay