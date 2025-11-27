
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BASE_URL from '../Config/Config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Customer = ()=>{

    const [input, setInput] = useState("");
    const navigate = useNavigate();

  const handelInput = (e)=>{
    const name  = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}))
    console.log(input);
    
  }


  const handelSubmit =async (e)=>{
    e.preventDefault();
    const api = `${BASE_URL}/customer/customerInsert`;
    const response = await axios.post(api,input);
    console.log(response.data);
    alert(response.data.msg)
    navigate("/customerLogin");
  }


    return(
        <>
        <div id="customerform">
       <h6>Sign Up Here</h6>
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
        <Form.Label>Enter City Name </Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" name='city' value={input.city} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Password </Form.Label>
        <Form.Control type="password" name='password' placeholder='Enter password' value={input.password} onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    <h6>If you Already Sing Up please Login <button onClick={()=>{navigate("/customerLogin")}}>Sing In</button></h6>
    </div>
        </>
    )
}

export default Customer;