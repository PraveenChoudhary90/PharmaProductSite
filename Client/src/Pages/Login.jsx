
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config/Config';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = ()=>{
    const [input, setInput] = useState("");
    const navigate = useNavigate();


     
    const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }


    const handelSubmit =async (e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/admin/AdminLogin`;
        try {
            const response = await axios.post(api, input);
            console.log(response.data);
            localStorage.setItem("email", response.data.Admin.email);
            alert(response.data.msg);
            navigate("/admin");
        } catch (error) {
            alert(error.response.data.msg);
        }

    
    }





    return(
        <>
        <div id="from">
            <h6>Login Page</h6>
      <Form>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Admin Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email} onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={handelInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </div>

        
        </>
    )
}

export default Login;