
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config/Config';
import axios from "axios";
import Table from 'react-bootstrap/Table';



const CheckkycStatus = ()=>{

    const [input, setInput] = useState("");
    const [mydata,setMydata] = useState([]);


     
    const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }


    const handelSubmit =async (e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/customer/CustomerKycCheck`;
        try {
            const response = await axios.post(api, input);
            console.log(response.data);
            setMydata(response.data.userCustomer);
            alert(response.data.msg);
        } catch (error) {
            alert(error.response.data.msg);
        }

    
    }

    console.log(mydata);


      
      
 





    return(
        <>
        <div id="from">
            <h6>Kyc Status Check</h6>
      <Form>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Admin Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email} onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Search
      </Button>
    </Form>
    </div>
    

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
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                                      <td>
                                <img
                                    src={`${BASE_URL}/${mydata.image}`}
                                    alt="image"
                                    width="100"
                                    height="100"
                                />
                            </td>
                            <td>{mydata.name}</td>
                            <td>{mydata.email}</td>
                            <td>{mydata.number}</td>
                            <td>{mydata.ano}</td>
                            <td>{mydata.status}</td>
                            <td>{mydata.reason}</td>
                            </tr>
        </tbody>
      </Table>


        
        </>
    )
}

export default CheckkycStatus;



