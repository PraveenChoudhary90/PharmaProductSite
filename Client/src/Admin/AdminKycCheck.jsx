
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config/Config';
import axios from "axios";
const KycCheck = ()=>{
    const [input, setInput] = useState("");


     
    const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }


    const handelSubmit =async (e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/customer/AdminKycStatus`;
        try {
            const response = await axios.post(api, input);
            console.log(response.data);
            alert(response.data.msg);
        } catch (error) {
            alert(error.response.data.msg);
        }

    
    }





    return(
        <>
        <div id="from">
      <Form>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter  Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email} onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Enter Status" name='status' value={input.status} onChange={handelInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </div>

        
        </>
    )
}

export default KycCheck;