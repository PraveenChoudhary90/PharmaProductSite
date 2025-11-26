import React from 'react'
import {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config/Config';
import axios from "axios";

function AddtoProduct() {

    const [input, setInput] = useState("");
    const [image, setImage] = useState("");
      
    const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleImage = (e)=>{
      setImage(e.target.files);
      console.log(image);
    }

const HandelSubmit = async(e)=>{
    e.preventDefault();
    const api = `${BASE_URL}/admin/InsertProduct`;
    const formData = new FormData();
     
    for(let key in input){
        formData.append(key, input[key]);
    }

    for(let i = 0;i<image.length;i++){
        formData.append("image", image[i]);
    }
    try {
     const response = await axios.post(api, formData, {
    headers: {
        "Content-Type": "multipart/form-data",
    }
     });
        console.log(response.data);
        alert(response.data.msg)
        
    } catch (error) {
        console.log(error);
    }
 }


  return (
    <>
    
            <div id="from1">
            <h6>Add Product Form</h6>
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
          
                 <Button variant="primary"  onClick={HandelSubmit}>
            Submit
          </Button>
        </Form>
        </div>
    
    
    </>
  )
}

export default AddtoProduct