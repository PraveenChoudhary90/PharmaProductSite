
import {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config/Config';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Kyc = ()=>{
    const [input, setInput] = useState({});
    const [image, setImage] = useState(null);

    const navigate = useNavigate();
     
    const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const HandelImage = (e)=>{
      setImage(e.target.files[0])
      console.log(image)
    }


    const handelSubmit =async (e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/customer/KycCustomer`;
        const formData = new FormData();

       for(let key in input){
        formData.append(key, input[key]);
       }
       
       if(image){
        formData.append("image", image);

       }
       


        try {
            const response = await axios.post(api, formData);
            console.log(response.data);
            alert(response.data.msg);
        } catch (error) {
          console.log(error);
        }

    
    }





    return(
        <>
        <div id="from">
            <h6> USER KYC </h6>
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
        <Form.Label>Enter  City </Form.Label>
        <Form.Control type="text" placeholder="Enter City" name='city' value={input.city} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter  Number </Form.Label>
        <Form.Control type="number" placeholder="Enter number" name='number' value={input.number} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Adhar Number </Form.Label>
        <Form.Control type="number" placeholder="Enter Adar number" name='ano' value={input.ano} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Aadhar Image </Form.Label>
        <Form.Control type="file"  onChange={HandelImage} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    You Can Check The KYC Status <button onClick={()=>{navigate("/kycstatus")}}>Check</button>
    </div>

        
        </>
    )
}

export default Kyc;